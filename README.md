# ⚡ 光速便利店 Speed Mart — 24小时不打烊的网络漫游补给站

<div align="center">

[![Website](https://img.shields.io/badge/Official%20Site-jichangbianli.org-FF6B35?style=for-the-badge&logo=google-chrome&logoColor=white)](https://jichangbianli.org)
[![Telegram](https://img.shields.io/badge/Telegram-Contact%20Store-229ED9?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/huanqiuti8899)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Status: Operational](https://img.shields.io/badge/Cloudflare%20Edge-Active%2099.99%25-brightgreen?style=for-the-badge&logo=cloudflare&logoColor=white)](https://jichangbianli.org)
[![GitHub Stars](https://img.shields.io/github/stars/zs350235495-ui/bianlidian?style=for-the-badge&logo=github&color=FFD166)](https://github.com/zs350235495-ui/bianlidian)

<p align="center">
  <strong>「像挑零食一样挑出适合你的加速方案」</strong><br>
  拒绝虚标 • 拒绝跑路套路 • 纯客观数据驱动 • 30天晚高峰丢包实盘监控
</p>

[🌐 访问官网](https://jichangbianli.org) • [🏪 店长严选](https://jichangbianli.org/reviews.html) • [📖 便利店日志](https://jichangbianli.org/blog.html) • [🍱 新手便当](https://jichangbianli.org/guide.html) • [💬 Telegram咨询](https://t.me/huanqiuti8899)

</div>

---

> [!NOTE]
> **店长寄语：** 为什么白天测速能跑满 1000M，一到晚上 8 点连网页都打不开？90% 的卡顿不是本地宽带问题，而是踩了劣质公网骨干网 QoS 限速与协议错配的坑。本项目旨在通过清晰的拟物化便利店界面与客观实测数据，帮大家打破信息差，挑选最稳定省心的网络漫游方案。

---

## 🧭 便利店货架导航全景图（文件架构表）

本项目采用现代化静态极简架构，零复杂打包依赖，原生兼容 **GitHub Pages**、**Cloudflare Pages** 与 **Vercel**：

| 文件名称 | 拟物化货架栏目 | 核心功能定位与内容说明 | 目标受众 |
| :--- | :--- | :--- | :--- |
| **`index.html`** | 🏪 **[便利店首页](https://jichangbianli.org/)** | 全站品牌首屏、本季三大爆款橱窗速览、核心场景选型入口与服务导览 | 初次进店全量访客 |
| **`reviews.html`** | 🍱 **[店长严选货架](https://jichangbianli.org/reviews.html)** | 6+ 款主流机场深度横评天梯榜、晚高峰测速参数对比、多维分类筛选、全系套餐与 7 折优惠码弹窗 | 寻找稳定优质节点的用户 |
| **`blog.html`** | 📖 **[便利店日志专栏 (博客首页)](https://jichangbianli.org/blog.html)** | 技术博客单页平铺陈列，支持协议、流媒体、分流规则等多维度分类药丸筛选 | 进阶折腾与技术爱好者 |
| **`top3-airports-2026.html`** | 🏆 **[2026 前三名深度横评](https://jichangbianli.org/top3-airports-2026.html)** | 2026 年度前三名（环球梯、大佬云、榴莲云）万字级实盘测试长文，包含双 ISP 解锁与选购决策树 | 深度比选、追求极致性价比 |
| **`article.html`** | 💡 **[网络漫游避坑终极指南](https://jichangbianli.org/article.html)** | 站内基石型（Pillar Content）SEO 指南长文，深度剖析公网直连、中继与 IPLC 专线本质 | 频繁遇到晚高峰卡顿断流者 |
| **`guide.html`** | 🍙 **[新手便当教程](https://jichangbianli.org/guide.html)** | 零基础 Windows / macOS / iOS / Android 全平台 5 分钟极速上手图文与订阅导入 | 刚接触外网的新手小白 |
| **`devices.html`** | 📱 **[设备专柜](https://jichangbianli.org/devices.html)** | 全平台主流开源客户端（Clash Verge、Sing-box、Surge、Shadowrocket）下载与配置指引 | 寻找安全纯净客户端者 |
| **`speedtest.html`** | 🧊 **[测速冰箱](https://jichangbianli.org/speedtest.html)** | 节点延迟监控、实时丢包测试工具箱与 NextTrace 路由可视化追踪使用指引 | 需要排查网络抖动与路由者 |
| **`faq.html`** | 🧯 **[常见避坑手册](https://jichangbianli.org/faq.html)** | 汇总 Fake-IP 冲突、TUN 虚拟网卡断网、微信打不开、异地登录风控等高频疑难排错 | 遇到各种奇葩断网报错者 |
| **`sitemap.xml`** | 🗺️ **[站点地图 (Sitemap)](https://jichangbianli.org/sitemap.xml)** | 遵循 sitemaps.org 标准格式，收录全站核心页面，优先配置权重以便爬虫索引 | 搜索引擎爬虫 (Google/Baidu) |
| **`robots.txt`** | 🤖 **[爬虫规则 (Robots)](https://jichangbianli.org/robots.txt)** | 明确爬虫抓取边界并指定站点地图入口路径 | 搜索引擎规范索引 |

---

## 📖 便利店日志（精选博客文章直达专栏）

「便利店日志」是光速便利店专为网络爱好者、出海办公族与极客打造的深度技术博客专栏。所有文章均经过真实环境抓包验证，提供干货满满的实战指南：

- 📌 **博客总目录入口**：👉 [https://jichangbianli.org/blog.html](https://jichangbianli.org/blog.html)
- 🏆 **年度权威评测博文**：
  - [《2026年机场推荐前三名深度横评：晚高峰实测、性价比与专线避坑指南》](https://jichangbianli.org/top3-airports-2026.html) —— 深度实测第一名环球梯、第二名大佬云、第三名榴莲云，拆解双 ISP 原生住宅 IP 与 0 丢包物理专线。
- 💡 **底层架构与协议选型博文**：
  - [《2026 网络漫游避坑终极指南：从协议选型、晚高峰抗劣化到客户端全平台配置》](https://jichangbianli.org/article.html) —— 深入剖析公网直连（单车道）、BGP中继（高架桥）与IPLC物理专线（高铁）本质区别，Hysteria2 暴力重传抗丢包原理。
- 🍱 **新手入门上手图文**：
  - [《新手便当：全平台 5 分钟上手教程（Win/Mac/iOS/Android）》](https://jichangbianli.org/guide.html) —— 从订阅链接获取、导入客户端到节点切换的保姆级新手图文。
- 📱 **客户端工具库精选**：
  - [《全平台推荐客户端与安全下载指引》](https://jichangbianli.org/devices.html) —— 涵盖 Clash Verge Rev、Sing-box、Surge、Shadowrocket 纯净开源版本。
- 🧯 **疑难排错速查**：
  - [《常见避坑指南：微信异地风控、TUN 虚拟网卡断网与 DNS 泄漏排查》](https://jichangbianli.org/faq.html) —— 解决国内 App 弹验证码、网银风控与代理假死的实操避坑手册。

---

## 🏆 2026 深度横评与晚高峰实测数据矩阵

> **数据采集环境**：上海电信 1000M + 广州移动 500M 双网络接入，连续 30 天于 **晚高峰 20:30 - 22:30** 定时抓包监测所得平均值。

| 排名 | 服务商品牌 | 线路底层架构 | 晚高峰延迟 (港/日/美) | 晚高峰丢包率 | 流媒体 & AI 解锁表现 | 券后起步价 | 独家7折券 | 核心场景与官网直达 |
| :---: | :---: | :--- | :---: | :---: | :--- | :---: | :---: | :--- |
| 🥇 **TOP 1** | **环球梯** | 100% 物理内网 IPLC 专线 | 18ms / 32ms / 125ms | **0.00% (极稳)** | **双 ISP 原生住宅 IP**<br>ChatGPT/Claude/Netflix 4K 全通 | **¥14.70/月**<br>(100GB起) | `HQ66` | **晚高峰 0 丢包镇店之宝**<br>适合远程办公与 AI 生产力<br>[👉 直达官网选购](https://123pps01.huanqiutiaff.com/#/?code=j5VBUvw0) |
| 🥈 **TOP 2** | **大佬云** | 多线 BGP 入口 + IPLC 专线隧道 | 22ms / 38ms / 138ms | **< 0.45% (偶发)** | Netflix 全区 / Claude Pro / Disney+ 4K 秒开 | **¥12.60/月**<br>(80GB起) | `dly88` | **全能稳健六边形战士**<br>不限设备数量，外服网游低跳 Ping<br>[👉 直达官网选购](https://ppsvip01.dalaoyunaff.com/#/?code=Iz1GlCVa) |
| 🥉 **TOP 3** | **榴莲云** | 高带宽 IEPL 专线 + 优化隧道 | 25ms / 42ms / 145ms | **< 1.20% (流畅)** | 主流流媒体自动分流解锁<br>8K 视频无卡顿秒开 | **¥10.50/月**<br>(120GB起) | `ll88` | **每 G 仅 8 分钱性价比之王**<br>适合学生党与 4K 追剧大流量党<br>[👉 直达官网选购](https://123pp01.liulianyunaff.com/#/?code=MsZP3u7G) |
| **TOP 4** | **云界线** | 企业级 IEPL 专线全节点 | 20ms / 35ms / 130ms | **< 0.20% (极低)** | 完美解锁 OpenAI 与流媒体非自制剧 | **¥5.60/月**<br>(年付折算) | `yjx888` | **极速电竞与大带宽旗舰**<br>2.5Gbps 超大吞吐管道<br>[👉 直达官网选购](https://pp01.yunjiexianaff.com/#/?code=bp0ZSKBV) |
| **TOP 5** | **闪电鼠** | 全 IEPL 内网专线 (x1倍率) | 26ms / 45ms / 148ms | **< 0.80% (稳定)** | 原生 IP 纯净解锁 AI 与海外金融 | **¥4.20/月**<br>(年付折算) | `sds88` | **年付超值备用首选**<br>日常查资料与轻度漫游神价<br>[👉 直达官网选购](https://ppsvip01.shandianshuaff.com/#/?code=QbLF8tjB) |
| **TOP 6** | **神行加速** | 专线接入 + 全球 Anycast 调度 | 24ms / 40ms / 140ms | **< 0.60% (平稳)** | 常用跨国业务与社媒秒级响应 | **¥12.60/月**<br>(120GB起) | `sx0077` | **轻量畅行与社媒首选**<br>全平台一键导入极为省心<br>[👉 直达官网选购](https://pps123.shenxingaff.com/#/?code=6tQ7zHUc) |

---

## 📡 四大运营商（电信 / 联通 / 移动 / 广电）晚高峰选线避坑速查表

不同运营商的国际出海通道截然不同，选对与本地宽带匹配的节点线路至关重要：

| 运营商类型 | 出口骨干网现状分析 | 晚高峰核心痛点 | 最佳选线搭配方案 | 绝不能碰的雷区 |
| :--- | :--- | :--- | :--- | :--- |
| **中国电信 (China Telecom)** | 普通 163 骨干网（AS4134）晚高峰极度拥挤；高端 CN2 GIA（AS4809）带宽昂贵。 | 晚高峰 20:00-23:00 公网出海丢包率高达 30%~50%，QoS 优先级垫底。 | **首选 IPLC 专线（如环球梯）** 或入口为电信优化中继，由国内专线直出，避开 163 国际出口。 | 切勿使用普通公网直连（直连美西或直连普通香港必断流）。 |
| **中国联通 (China Unicom)** | 普通 4837 骨干网容量尚可；高端 9929（A 网）质量较优。 | 整体出海优于电信，但在大促或敏感期晚高峰仍会偶发丢包。 | **BGP 多线中继（如大佬云）** 或内网专线。北方联通连日韩延迟极佳（沪日/京日专线）。 | 避免使用移动单线中转机，联通跨网访问容易引入 20ms+ 额外跨网延迟。 |
| **中国移动 (China Mobile)** | 拥有 CMI（AS58453）大管道，近期进军 CMIN2（AS58807）。 | 晚高峰移动经常对 UDP 协议进行严格的局部阻断或丢包干扰。 | **纯内网 IEPL / IPLC 专线**，或选择 Shadowsocks / Trojan 协议（比 UDP 协议更不易被干扰）。 | 谨慎使用未优化的单边 UDP 暴力协议（易被运营商临时阻断）。 |
| **中国广电 (China Broadnet)** | 借用移动或电信底层链路，部分地区具备独立缓存网。 | DNS 污染和跨省跨网穿透调度较为严重，解析漂移大。 | 客户端必须开启 **Fake-IP 模式**，并将 DNS 解析锁定为公共 DoH（如阿里/腾讯 DoH），搭配 BGP 入口。 | 严禁使用系统本地 DNS 解析，极易出现域名被劫持至假 IP。 |

---

## 📚 网络漫游黑话翻译机（新手词典）

为了让完全不懂网络技术的新人也能秒懂，店长用生活化比喻总结了常见黑话：

```
┌────────────────────────────────────────────────────────┐
│                   【网络底层链路比喻】                    │
│                                                        │
│  🛣️ 公网直连  =  普通跨海单车道 (晚高峰必然堵车、QoS限速)       │
│  🌉 BGP 隧道  =  城市多线互联高架桥 (本地低延迟接入，出海走公网) │
│  🚄 IPLC 专线 =  点对点地下高铁 (物理光纤内网直达，完全不过 GFW) │
└────────────────────────────────────────────────────────┘
```

1. **公网直连 (Direct)**：
   - 客户端直接通过运营商国际公网连往境外机房。价格最便宜，但在晚高峰运营商骨干网会强制触发 **QoS 限速丢包**。
2. **IPLC / IEPL 内网专线**：
   - **IPLC（国际私有租用线路）** 与 **IEPL（国际以太网专线）**：由运营商开辟的企业级跨国内网专用光缆。数据在境内网关入闸后内网点对点直出，**完全不过 GFW 骨干审查，晚高峰真正做到 0 丢包**。
3. **TUN 虚拟网卡模式**：
   - 在操作系统内部虚拟一张网卡，直接在网络协议栈底层接管**全电脑所有应用程序**（包括终端 CMD、Git、外服端游）的网络流量，解决某些软件不支持代理设置的问题。
4. **Fake-IP (虚拟 IP 映射)**：
   - 客户端收到域名请求后，不向本地运营商发起解析，而是直接返回一个假 IP（如 `198.18.0.1`）让操作系统立即发包，真实解析在境外落地节点执行。**彻底防止 DNS 污染与 DNS 泄漏**。
5. **规则分流 (Rule) vs 全局代理 (Global)**：
   - **规则分流**：国内网站（微信、百度、淘宝）直连不走节点，国外网站（Google、YouTube）才走代理。
   - **全局代理**：电脑所有流量无差别全部翻墙，会导致国内 App 弹异地登录验证码、甚至被网银风控冻结。日常使用**切忌长期开全局模式**！

---

## 💻 全平台推荐客户端与安全下载指引

请务必通过官方 GitHub Release 页面下载客户端，切勿从不明搜索引擎广告或第三方软件站下载，防止被植入恶意木马：

### 1. Windows 桌面端
- **首推**：[Clash Verge Rev](https://github.com/clash-verge-rev/clash-verge-rev/releases)（开源、界面现代、支持 Clash Meta/Mihomo 内核与 TUN 模式）。
- **极客**：[Sing-box for Windows](https://github.com/SagerNet/sing-box/releases)（资源占用极低、内存不到 30MB）。

### 2. macOS 苹果电脑
- **首推**：[Clash Verge Rev (Mac 适配版)](https://github.com/clash-verge-rev/clash-verge-rev/releases)（完美适配 Apple Silicon M1/M2/M3/M4 芯片架构）。
- **进阶**：[Surge for Mac](https://nssurge.com/)（网络调试与策略分流天花板，商业付费）。

### 3. iOS / iPadOS 苹果移动端
- **首推**：**Shadowrocket (小火箭)**（美区 App Store 售价 $2.99，老牌易上手，支持全部协议）。
- **进阶**：**Loon** 或 **Quantumult X**（脚本强大，流媒体自动检测与去广告分流）。

### 4. Android 安卓手机与平板
- **首推**：[Clash Meta for Android (CMFA)](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)（功能完善、支持分应用代理）。
- **备选**：[Surfboard](https://getsurfboard.com/)（兼容 Surge 配置语法，省电极佳）。

### 5. 软路由 / 旁路由 (OpenWrt / iKuai)
- 推荐使用 **OpenClash** 或 **PassWall**：
  - 配置主路由负责 DHCP 与 NAT 转换，旁路由 OpenWrt 负责透明代理与分流。
  - 开启 `Fake-IP (TUN)` 混合模式，全屋智能电视、PS5/Switch 游戏机免客户端直接秒开 4K 与外服联机。

---

## 🛠️ 本地开发与 Cloudflare Pages 静态部署教程

本项目基于原生 HTML5 + Tailwind CSS 构建，无需 Node.js 打包编译，即开即用。

### 1. 本地克隆与预览

```bash
# 1. 克隆本仓库到本地
git clone https://github.com/zs350235495-ui/bianlidian.git

# 2. 进入项目工作目录
cd bianlidian

# 3. 使用任意轻量静态服务器运行（如 Python 或 VSCode Live Server）
python -m http.server 8080

# 4. 浏览器打开 http://localhost:8080 即可实时调试与预览
```

### 2. Cloudflare Pages 零成本自动化部署（推荐）

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)，在左侧导航进入 **Workers & Pages**。
2. 点击 **Create application ➔ Pages ➔ Connect to Git**。
3. 授权并选择本仓库 `zs350235495-ui/bianlidian`。
4. 构建配置（Build settings）：
   - **Framework preset**：`None`
   - **Build command**：（留空不用填）
   - **Build output directory**：`/`（直接指向根目录）
5. 点击 **Save and Deploy**，10 秒内即可完成全球数百个边缘节点的部署。
6. 在 **Custom domains** 中绑定 `jichangbianli.org` 即可获得极速访问与免费 SSL 证书。

---

## ⚖️ 合规免责声明与社区公约

1. **合规交流**：本仓库包含的网页代码、技术评测与配置文件仅用于网络工程研究、海外学术文献检索、跨国合法办公与合规技术交流。
2. **法律合规**：任何用户在使用网络加速工具时，应自觉遵守所在国家和地区的法律法规，严禁利用本项目提及的工具从事任何危害国家安全、侵犯他人隐私或违反法律法规的活动。
3. **独立客观**：光速便利店所有实测数据均来自真实高峰期监控，不接受任何虚假刷榜赞助，评测结果仅供技术选型参考。

---

<div align="center">
  <p>🏪 <strong>光速便利店 Speed Mart</strong> • 24小时守护你的网络漫游体验</p>
  <p>© 2026 Speed Mart. All rights reserved.</p>
</div>
