const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || '',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: [
    '/apple-icon.png',
    '/icon.png',
  ],
};

export default config;