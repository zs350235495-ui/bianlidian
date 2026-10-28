/**
 * 机场便利店 (jichangbianli.org) - IndexNow 搜索引擎即时推送工具
 * 协议规范：https://www.indexnow.org/
 * 密钥文件：3431c8bcde0d44c2b751bd60efc378a7.txt
 * 支持引擎：Microsoft Bing, Yandex, Seznam, Naver 等 IndexNow 联盟搜索引擎
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const HOST = 'jichangbianli.org';
const KEY_FILE = '3431c8bcde0d44c2b751bd60efc378a7.txt';
const KEY_PATH = path.join(__dirname, KEY_FILE);
const SITEMAP_PATH = path.join(__dirname, 'sitemap.xml');

// 校验与提取 Key
function getApiKey() {
  if (!fs.existsSync(KEY_PATH)) {
    throw new Error(`未找到 IndexNow 密钥文件: ${KEY_FILE}`);
  }
  const key = fs.readFileSync(KEY_PATH, 'utf8').trim();
  if (!key) {
    throw new Error(`IndexNow 密钥文件内容为空: ${KEY_FILE}`);
  }
  return key;
}

// 从 sitemap.xml 提取所有需要推送的绝对物理 URL
function getUrlsFromSitemap() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    throw new Error('未找到 sitemap.xml 文件，无法提取推送 URL');
  }
  const xml = fs.readFileSync(SITEMAP_PATH, 'utf8');
  const matches = [...xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)];
  const urls = matches.map(m => m[1].trim());
  const uniqueUrls = Array.from(new Set(urls));
  
  if (uniqueUrls.length === 0) {
    throw new Error('sitemap.xml 中未匹配到任何有效 <loc> URL');
  }
  return uniqueUrls;
}

function postToIndexNow(endpoint, payload) {
  return new Promise((resolve) => {
    const urlObj = new URL(endpoint);
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
        'User-Agent': 'jichangbianli-IndexNow-Bot/1.0'
      },
      timeout: 15000
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          endpoint,
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: data
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        endpoint,
        error: err.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        endpoint,
        error: '请求超时 (15s)'
      });
    });

    req.write(payload);
    req.end();
  });
}

async function main() {
  try {
    console.log('====================================================');
    console.log(`🚀 开始执行 ${HOST} IndexNow 搜索引擎即时推送广播...`);
    console.log('====================================================\n');

    const apiKey = getApiKey();
    const keyLocation = `https://${HOST}/${KEY_FILE}`;
    const urlList = getUrlsFromSitemap();

    console.log(`🔑 验证密钥凭证: ${apiKey}`);
    console.log(`📍 密钥验证位置: ${keyLocation}`);
    console.log(`📋 从 sitemap.xml 提取到 ${urlList.length} 个独立 URL：`);
    urlList.slice(0, 5).forEach(u => console.log(`   - ${u}`));
    if (urlList.length > 5) {
      console.log(`   ... 以及其他 ${urlList.length - 5} 个页面`);
    }
    console.log('');

    const payloadObj = {
      host: HOST,
      key: apiKey,
      keyLocation: keyLocation,
      urlList: urlList
    };

    const payload = JSON.stringify(payloadObj, null, 2);

    const endpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow'
    ];

    for (const ep of endpoints) {
      console.log(`📡 正在向 ${ep} 广播 URL 变动清单...`);
      const res = await postToIndexNow(ep, payload);
      if (res.error) {
        console.warn(`⚠️ [${new URL(ep).hostname}] 广播失败: ${res.error}`);
      } else if (res.statusCode === 200 || res.statusCode === 202) {
        console.log(`✅ [${new URL(ep).hostname}] 推送成功！HTTP 状态码: ${res.statusCode}`);
      } else {
        console.log(`ℹ️ [${new URL(ep).hostname}] 响应状态: ${res.statusCode} ${res.statusMessage || ''} ${res.body ? `(详情: ${res.body.trim()})` : ''}`);
      }
    }

    console.log('\n====================================================');
    console.log('🎉 IndexNow 搜索引擎广播流程执行完毕！');
    console.log('💡 提示：Bing 及联盟搜索引擎已接收变更通告，将自动调优抓取配额。');
    console.log('====================================================\n');

  } catch (err) {
    console.error(`❌ IndexNow 推送出现异常: ${err.message}`);
    process.exit(1);
  }
}

main();
