import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const DOMAIN = 'https://narayanabalitripindi.com';

const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/narayana-bali-pooja', changefreq: 'weekly', priority: 0.9 },
  { url: '/tripindi-shraddha', changefreq: 'weekly', priority: 0.9 },
  { url: '/pitru-dosha-remedies', changefreq: 'weekly', priority: 0.8 },
  { url: '/virtual-pooja-booking', changefreq: 'weekly', priority: 0.8 },
  { url: '/pricing', changefreq: 'weekly', priority: 0.8 },
  { url: '/faq', changefreq: 'weekly', priority: 0.7 },
  { url: '/about', changefreq: 'weekly', priority: 0.7 },
  { url: '/poojas', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'weekly', priority: 0.7 },
  { url: '/blogs', changefreq: 'weekly', priority: 0.9 },
  { url: '/blog/narayana-bali-benefits-complete-guide', changefreq: 'weekly', priority: 0.9 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: DOMAIN });
  const writeStream = createWriteStream('./public/sitemap.xml');

  routes.forEach(route => sitemap.write(route));
  sitemap.end();

  await streamToPromise(sitemap);
  sitemap.pipe(writeStream);

  console.log(' Sitemap generated at public/sitemap.xml');
}

generateSitemap().catch(console.error);
