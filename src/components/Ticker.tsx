const tickerItems = [
  { name: 'TikTok', src: '/tiktok-logo.jpeg' },
  { name: 'Instagram', src: '/instagram-logo.jpeg' },
  { name: 'LinkedIn', src: '/linkedin-logo.jpeg' },
  { name: 'YouTube', src: '/youtube-logo.jpeg' },
  { name: 'X', src: '/x-logo.jpeg' },
  { name: 'Facebook', src: '/facebook-logo.jpeg' },
  { name: 'Pinterest', src: '/logopinterest.jpeg' },
  { name: 'Perfis públicos', src: '/man-logo.jpeg' },
  { name: 'Privacy', src: '/privacy-logo.jpeg' },
];

function TickerItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="flex items-center gap-3 rounded-full border border-white/70 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-md">
      <img src={src} alt={name} className="h-10 w-10 rounded-full object-cover shadow-sm" />
      {name}
    </div>
  );
}

export default function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <section className="relative overflow-hidden py-10">
      <div
        className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32"
        style={{ background: 'linear-gradient(to right, #FAF8F2 0%, transparent 100%)' }}
      />
      <div
        className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32"
        style={{ background: 'linear-gradient(to left, #FAF8F2 0%, transparent 100%)' }}
      />

      <div className="mb-4 flex w-max">
        <div className="ticker-l flex gap-5">
          {items.map((item, i) => (
            <TickerItem key={`l-${i}`} {...item} />
          ))}
        </div>
      </div>

      <div className="flex w-max">
        <div className="ticker-r flex gap-5">
          {[...items].reverse().map((item, i) => (
            <TickerItem key={`r-${i}`} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
