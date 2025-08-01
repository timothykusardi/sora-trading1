/** next-sitemap.config.js */
module.exports = {
  siteUrl: 'https://charcoalinternational.com', // ← your production URL
  generateRobotsTxt: true,                     // (optional) also creates robots.txt
  changefreq: 'weekly',                        // how often pages are “likely” to change
  priority: 0.7,                               // sitemap priority (0.0–1.0)
  sitemapSize: 5000,                           // split into multiple if you have >5000 URLs
  exclude: ['/404', '/components/*'],          // any paths you don’t want indexed
}
