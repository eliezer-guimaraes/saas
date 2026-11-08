const orbitLogos = [
  { src: '/linkedin-logo.jpeg', top: 70, left: 142 },
  { src: '/youtube-logo.jpeg', top: 132, left: 106 },
  { src: '/x-logo.jpeg', top: 132, left: 34 },
  { src: '/instagram-logo.jpeg', top: 70, left: -2 },
  { src: '/tiktok-logo.jpeg', top: 8, left: 34 },
  { src: '/man-logo.jpeg', top: 8, left: 106 },
];

const resultMatches = [
  { handle: '@isa.santos_', platform: 'Instagram', src: '/instagram-logo.jpeg', score: '98%', color: '#16a34a' },
  { handle: '@isabella.santos', platform: 'TikTok', src: '/tiktok-logo.jpeg', score: '91%', color: '#16a34a' },
  { handle: 'Isabella Santos', platform: 'LinkedIn', src: '/linkedin-logo.jpeg', score: '74%', color: '#d97706' },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A800]">
          Como funciona
        </p>
        <h2 className="mb-14 text-center text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
          O que acontece quando
          <br />
          você faz uma busca.
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Step 1: Upload */}
          <div className="flex flex-col rounded-3xl border border-gray-100 bg-[#FAF8F2] p-8">
            <div className="mb-8 flex min-h-[176px] items-center justify-center">
              <div
                className="relative h-40 w-40 overflow-hidden rounded-full border-[3px]"
                style={{ borderColor: 'rgba(0,191,255,0.45)' }}
              >
                <img
                  src="/woman_search.jpeg"
                  alt="Isabella Santos"
                  className="h-full w-full object-cover object-top"
                />
                <div
                  className="absolute left-0 right-0 h-0.5"
                  style={{
                    top: 0,
                    background:
                      'linear-gradient(90deg,transparent,rgba(0,220,255,.9) 30%,#00DFFF 50%,rgba(0,220,255,.9) 70%,transparent)',
                    boxShadow: '0 0 10px 3px rgba(0,210,255,.6)',
                    animation: 'dd-scan-card 1.8s ease-in-out infinite',
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: 'linear-gradient(180deg,rgba(0,5,20,.12) 0%,transparent 45%)' }}
                />
              </div>
            </div>
            <p className="mb-1 flex items-center gap-2 text-xs font-bold text-gray-400">
              <span className="font-black text-[#D4A800]">01</span>
              <span className="uppercase tracking-widest">Upload</span>
            </p>
            <h3 className="mb-2 text-lg font-black text-gray-900">Envie uma foto</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Uma foto clara e frontal. Screenshot de rede social, câmera — qualquer formato serve. Sua foto é
              criptografada e a busca é 100% anônima.
            </p>
          </div>

          {/* Step 2: Search */}
          <div className="flex flex-col rounded-3xl border border-gray-100 bg-[#FAF8F2] p-8">
            <div className="mb-8 flex min-h-[176px] items-center justify-center">
              <div className="relative" style={{ width: 176, height: 176 }}>
                <svg className="absolute inset-0 h-full w-full">
                  <circle cx="88" cy="88" r="72" fill="none" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="5 6" />
                </svg>
                <div className="orbit-ring" style={{ animationDuration: '20s' }}>
                  {orbitLogos.map((logo, i) => (
                    <div
                      key={i}
                      className="orbit-icon absolute h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-md"
                      style={{ top: logo.top, left: logo.left, animationDuration: '20s' }}
                    >
                      <img src={logo.src} alt="" className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="absolute left-1/2 top-1/2 z-10 h-20 w-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-white shadow-lg">
                  <img
                    src="/woman_search.jpeg"
                    alt="Isabella"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
            <p className="mb-1 flex items-center gap-2 text-xs font-bold text-gray-400">
              <span className="font-black text-[#D4A800]">02</span>
              <span className="uppercase tracking-widest">Busca</span>
            </p>
            <h3 className="mb-2 text-lg font-black text-gray-900">Nossa IA vasculha a web</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Comparamos o rosto contra bilhões de imagens públicas — redes sociais, sites de notícias, fóruns e
              registros digitais.
            </p>
          </div>

          {/* Step 3: Results */}
          <div className="flex flex-col rounded-3xl border border-gray-100 bg-[#FAF8F2] p-8">
            <div className="mb-8 flex min-h-[176px] flex-col justify-center space-y-2.5">
              {resultMatches.map((match) => (
                <div
                  key={match.handle}
                  className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-3 py-2.5 shadow-sm"
                >
                  <div className="h-8 w-8 flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
                    <img src={match.src} alt={match.platform} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-semibold text-gray-800">{match.handle}</p>
                    <p className="text-[10px] text-gray-400">{match.platform}</p>
                  </div>
                  <span
                    className="flex-shrink-0 rounded-lg px-2.5 py-1 text-xs font-bold text-white"
                    style={{ background: match.color }}
                  >
                    {match.score}
                  </span>
                </div>
              ))}
            </div>
            <p className="mb-1 flex items-center gap-2 text-xs font-bold text-gray-400">
              <span className="font-black text-[#D4A800]">03</span>
              <span className="uppercase tracking-widest">Resultado</span>
            </p>
            <h3 className="mb-2 text-lg font-black text-gray-900">Veja os matches ranqueados</h3>
            <p className="text-sm leading-relaxed text-gray-500">
              Você recebe correspondências com score de similaridade, a plataforma de origem e o link direto para o
              perfil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
