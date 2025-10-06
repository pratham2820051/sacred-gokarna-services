const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const DOMAIN = 'https://narayanabalitripindi.com';

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.9 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: DOMAIN });
  const writeStream = createWriteStream('./public/sitemap.xml');

  routes.forEach(route => sitemap.write(route));
  sitemap.end();

  await streamToPromise(sitemap);
  sitemap.pipe(writeStream);

  console.log('Sitemap generated at public/sitemap.xml');
}

generateSitemap().catch(console.error);
