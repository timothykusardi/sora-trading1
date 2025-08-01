// next-sitemap.config.js
const path = require('path');

// load your JSON by path
const PRODUCTS = require(path.resolve(
  __dirname,
  'src/app/data/products.json'
));

const siteUrl = 'https://charcoalinternational.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404', '/components/*'],

  additionalPaths: async (config) => {
    // sanity check:
    console.log('PRODUCT SLUGS:', Object.keys(PRODUCTS));
    return Object.keys(PRODUCTS).map((slug) => ({
      loc: `${config.siteUrl}/products/${slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.5,
    }));
  },
};
