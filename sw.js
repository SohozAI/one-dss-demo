// ওয়ান-ডিএসএস সার্ভিস ওয়ার্কার
//  - HTML/নেভিগেশন = network-first: নতুন deploy সাথে সাথে আসে; অফলাইনে ক্যাশ ফেরত
//  - হ্যাশ-করা স্ট্যাটিক সম্পদ (js/css/font/img) = stale-while-revalidate: তাৎক্ষণিক, পেছনে হালনাগাদ
const CACHE = 'one-dss-v2';

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (e) => e.waitUntil((async () => {
  // পুরোনো সংস্করণের ক্যাশ মুছে ফেলা (আটকে-থাকা পুরোনো ফাইল রোধ)
  const keys = await caches.keys();
  await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
  await self.clients.claim();
})()));

function isNavigation(req) {
  return req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
}

// redirected response সরাসরি নেভিগেশনে respondWith করলে TypeError (GH Pages /repo → /repo/ রিডাইরেক্ট) —
// তাই redirect হলে পরিষ্কার নতুন Response বানানো হয়
async function cleanResponse(res) {
  if (!res.redirected) return res;
  const body = await res.clone().blob();
  return new Response(body, { status: res.status, statusText: res.statusText, headers: res.headers });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== self.location.origin) return;

  if (isNavigation(req)) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      try {
        const res = await fetch(req);
        if (res && res.ok) {
          // hash-router SPA: যেকোনো নেভিগেশনের জন্য একই অ্যাপ-শেল যথেষ্ট — স্থিতিশীল 'index.html' কী-তে রাখা
          const clean = await cleanResponse(res);
          cache.put('index.html', clean.clone());
          return clean;
        }
        return res;
      } catch {
        // অফলাইন: ক্যাশ-করা অ্যাপ-শেল (যেকোনো পথের নেভিগেশনেই চলে)
        return (await cache.match('index.html')) || Response.error();
      }
    })());
    return;
  }

  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const cached = await cache.match(req);
    const net = fetch(req).then((res) => { if (res && res.ok) cache.put(req, res.clone()); return res; }).catch(() => cached);
    return cached || net;
  })());
});
