// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://bgrem.in', // Your website URL
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    sitemapSize: 5000, // Adjust according to your website size
    robotsTxtOptions: {
        policies: [
          { userAgent: '*', allow: '/' }
        ],
    }
};