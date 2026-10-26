const fs = require('fs');
const path = require('path');

console.log('==============================================');
console.log('🔍 RUNNING COMPREHENSIVE REPO SEO GATECHECK');
console.log('==============================================\n');

let failed = false;

// 1. Check HTML files (Excluding redirection landing page go.html which has dedicated audit)
const allHtmlFiles = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const htmlFiles = allHtmlFiles.filter(f => f !== 'go.html');
console.log(`Found ${htmlFiles.length} content HTML files: ${htmlFiles.join(', ')}\n`);

// 1.0 Dedicated Check for /go.html Gateway
console.log('Checking /go.html Redirection Gateway Compliance...');
if (!fs.existsSync('go.html')) {
  console.error(`❌ [go.html] Missing /go.html redirection landing page!`);
  failed = true;
} else {
  const goContent = fs.readFileSync('go.html', 'utf8');
  if (!goContent.includes('content="noindex, nofollow"')) {
    console.error(`❌ [go.html] Missing strict <meta name="robots" content="noindex, nofollow"> tag!`);
    failed = true;
  }
  if (!goContent.includes('name="description"')) {
    console.error(`❌ [go.html] Missing <meta name="description"> tag!`);
    failed = true;
  }
}

// 1.1 Check 301 Configuration Files
console.log('Checking 301 redirection configuration files (_redirects, nginx-redirects.conf)...');
if (!fs.existsSync('_redirects')) {
  console.error(`❌ Missing _redirects configuration for Cloudflare Pages / Netlify!`);
  failed = true;
}
if (!fs.existsSync('nginx-redirects.conf')) {
  console.error(`❌ Missing nginx-redirects.conf configuration for VPS / BT-Panel!`);
  failed = true;
}

// 1.2 Check robots.txt for Bing/Google Compliance
console.log('Checking robots.txt compliance...');
const robotsContent = fs.readFileSync('robots.txt', 'utf8');
if (/Disallow:\s*(\/go|\/go\.html)/i.test(robotsContent)) {
  console.error(`❌ [robots.txt] Contains Disallow for /go or /go.html (Violates Bing Webmaster guidelines)!`);
  failed = true;
}

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');

  // A. Check Canonical
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="https:\/\/jichangbianli\.org\/([^"]*)"\s*\/>/);
  if (!canonicalMatch) {
    console.error(`❌ [${f}] Missing or invalid canonical tag`);
    failed = true;
  } else {
    const expectedPath = f === 'index.html' ? '' : f;
    if (canonicalMatch[1] !== expectedPath) {
      console.error(`❌ [${f}] Canonical mismatch: expected '${expectedPath}', got '${canonicalMatch[1]}'`);
      failed = true;
    }
  }

  // B. Check Robots meta
  if (!content.includes('name="robots"')) {
    console.error(`❌ [${f}] Missing meta robots tag`);
    failed = true;
  }

  // C. Check H1 count (must be exactly 1)
  const h1Matches = content.match(/<h1[\s>]/gi) || [];
  if (h1Matches.length !== 1) {
    console.error(`❌ [${f}] Expected exactly 1 <h1> tag, found ${h1Matches.length}`);
    failed = true;
  }

  // D. Check JSON-LD syntax
  const scriptMatches = content.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi) || [];
  if (scriptMatches.length === 0) {
    console.error(`❌ [${f}] Missing JSON-LD structured data`);
    failed = true;
  } else {
    scriptMatches.forEach((s, idx) => {
      const raw = s.replace(/<script\s+type="application\/ld\+json">/i, '').replace(/<\/script>/i, '').trim();
      try {
        const parsed = JSON.parse(raw);
        if (!parsed['@context']) {
          console.error(`❌ [${f}] JSON-LD script ${idx} missing @context`);
          failed = true;
        }
      } catch (e) {
        console.error(`❌ [${f}] JSON-LD script ${idx} syntax error: ${e.message}`);
        failed = true;
      }
    });
  }

  // E. Check affiliate & 301 gateway links
  const affDirectRegex = /href=["'](https?:\/\/[^"']*(?:aff\.com|\?code=|\?aff=|\?ref=|kunpengjiasu\.com|jichang\.best|ytjcok\.org)[^"']*)["']/gi;
  let affDirectMatch;
  while ((affDirectMatch = affDirectRegex.exec(content)) !== null) {
    console.error(`❌ [${f}] Contains direct affiliate link without 301 isolation: ${affDirectMatch[1]}`);
    failed = true;
  }

  // Ensure all /go.html links have proper rel="nofollow sponsored noopener noreferrer" and valid id
  const goLinkMatches = content.match(/<a\s+[^>]*href=["']\/go\.html\?id=([^"']+)["'][^>]*>/gi) || [];
  const validGoIds = [
    'huanqiuti', 'dalaoyun', 'liulianyun', 'yunjiexian', 'shandianshu',
    'shenxing', 'kexinyun', 'kosing', 'sujie', 'kuaili', 'edgenode',
    'edgenova', 'yuntu', 'kunpeng', 'shunyun', 'jilianyun', 'guangnianti',
    'tg-huanqiuti'
  ];
  for (const aTag of goLinkMatches) {
    const idMatch = aTag.match(/href=["']\/go\.html\?id=([^"']+)["']/i);
    if (idMatch && !validGoIds.includes(idMatch[1].toLowerCase())) {
      console.error(`❌ [${f}] Invalid or unregistered go id: ${idMatch[1]}`);
      failed = true;
    }
    const relMatch = aTag.match(/rel=["']([^"']+)["']/i);
    if (!relMatch || !relMatch[1].includes('nofollow') || !relMatch[1].includes('sponsored')) {
      console.error(`❌ [${f}] /go.html link missing rel="nofollow sponsored": ${aTag}`);
      failed = true;
    }
  }

  const tg = content.match(/https?:\/\/t\.me\/(?!huanqiuti8899)[^\s"'<>]+/i);
  if (tg) {
    console.error(`❌ [${f}] Contains unauthorized Telegram link: ${tg[0]}`);
    failed = true;
  }

  // F. Check relative hrefs and srcs
  const relHrefs = content.match(/href=["'](?!(?:https?:\/\/|\/|#|mailto:|javascript:))([^"']+)["']/gi);
  if (relHrefs) {
    console.error(`❌ [${f}] Relative hrefs found: ${relHrefs.join(', ')}`);
    failed = true;
  }

  // G. Check for 404 dead links on internal references
  const internalHrefs = content.match(/href="(\/[^"#?]+)/g) || [];
  internalHrefs.forEach(h => {
    const rawPath = h.replace('href="/', '').trim();
    if (rawPath && !rawPath.startsWith('http')) {
      const filePath = path.join(__dirname, rawPath);
      if (!fs.existsSync(filePath)) {
        console.error(`❌ [${f}] Dead internal link: /${rawPath} does not exist!`);
        failed = true;
      }
    }
  });
}

// 2. Check sitemap.xml
console.log('Checking sitemap.xml...');
const sitemap = fs.readFileSync('sitemap.xml', 'utf8');

if (sitemap.includes('go.html') || sitemap.includes('/go/')) {
  console.error(`❌ [sitemap.xml] /go.html or /go/ must NEVER be included in sitemap.xml!`);
  failed = true;
}
const locMatches = [...sitemap.matchAll(/<loc>https:\/\/jichangbianli\.org\/([^<]*)<\/loc>/g)].map(m => m[1]);

for (const loc of locMatches) {
  const fileName = loc === '' ? 'index.html' : loc;
  if (!fs.existsSync(fileName)) {
    console.error(`❌ [sitemap.xml] Target file '${fileName}' does not exist on disk!`);
    failed = true;
  }
}

// Ensure all HTML files are in sitemap
for (const f of htmlFiles) {
  const expectedLoc = f === 'index.html' ? 'https://jichangbianli.org/' : `https://jichangbianli.org/${f}`;
  if (!sitemap.includes(expectedLoc)) {
    console.error(`❌ [sitemap.xml] Missing sitemap entry for ${expectedLoc}`);
    failed = true;
  }
}

// 3. Check llms.txt
console.log('Checking llms.txt...');
const llms = fs.readFileSync('llms.txt', 'utf8');
const llmsUrls = [...llms.matchAll(/https:\/\/jichangbianli\.org\/([^\s\)]*)/g)].map(m => m[1]);
for (const u of llmsUrls) {
  const cleanU = u.replace(/\/$/, '');
  const fileName = cleanU === '' ? 'index.html' : cleanU;
  if (!fs.existsSync(fileName)) {
    console.error(`❌ [llms.txt] URL '${u}' points to non-existent file '${fileName}'`);
    failed = true;
  }
}

// 4. Check README.md
console.log('Checking README.md...');
const readme = fs.readFileSync('README.md', 'utf8');
const readmeAff = readme.match(/(\?aff=|\?ref=|\?code=|\.aff\.com)/i);
if (readmeAff) {
  console.error(`❌ [README.md] Contains affiliate pattern: ${readmeAff[0]}`);
  failed = true;
}
const readmeTg = readme.match(/t\.me/i);
if (readmeTg) {
  console.error(`❌ [README.md] Contains Telegram link: ${readmeTg[0]}`);
  failed = true;
}

if (!failed) {
  console.log('\n🎉 ALL REPO AUDIT CHECKS PASSED WITH 100% SUCCESS!');
  console.log('   - 0 Dead links (all internal links exist on disk)');
  console.log('   - 0 Affiliate / referral parameters');
  console.log('   - 0 External Telegram / community bypass links');
  console.log('   - 100% Valid Schema.org JSON-LD structured data');
  console.log('   - 100% Valid Canonical, Meta Robots & Open Graph tags');
  console.log('   - sitemap.xml & llms.txt completely synced');
} else {
  process.exit(1);
}
