import { Globe } from 'lucide-react';

const platforms = [
  { name: 'Instagram', src: '/instagram-logo.jpeg' },
  { name: 'Facebook', src: '/facebook-logo.jpeg' },
  { name: 'YouTube', src: '/youtube-logo.jpeg' },
  { name: 'X', src: '/x-logo.jpeg' },
  { name: 'TikTok', src: '/tiktok-logo.jpeg' },
  { name: 'LinkedIn', src: '/linkedin-logo.jpeg' },
  { name: 'Pinterest', src: '/logopinterest.jpeg' },
  { name: 'Privacy', src: '/privacy-logo.jpeg' },
];

export default function Features() {
  return (
    <section className="bg-[#FAF8F2] px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A800]">
          Respostas Claras
        </p>
        <h2 className="mb-12 text-center text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
          Tudo que você precisa saber
          <br />
          em uma única busca.
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Card 1: Platforms */}
          <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white px-8 py-10 text-center">
            <div className="mb-7 grid grid-cols-3 gap-4">
              {platforms.map((p) => (
                <div
                  key={p.name}
                  className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gray-100 bg-gray-50 shadow-sm"
                >
                  <img src={p.src} alt={p.name} className="h-8 w-8 rounded-full object-cover" />
                </div>
              ))}
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-100 bg-gray-50 shadow-sm">
                <Globe className="h-6 w-6 text-[#3380FF]" />
              </div>
            </div>
            <h3 className="text-base font-black text-gray-900">Busque em toda plataforma</h3>
            <p className="mt-1.5 text-sm text-gray-500">Bilhões de imagens públicas, um rosto.</p>
          </div>

          {/* Card 2: Confidence score */}
          <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white px-8 py-10 text-center">
            <div className="mb-7 flex w-full flex-1 flex-col justify-center space-y-3.5">
              <div className="flex items-center justify-center gap-3">
                <span
                  className="w-24 flex-shrink-0 rounded-full px-4 py-2 text-center font-mono text-sm font-black tabular-nums text-white"
                  style={{
                    background: '#2DB064',
                    boxShadow: '0 8px 20px -4px rgba(45,176,100,0.4), 0 2px 8px -1px rgba(45,176,100,0.4)',
                  }}
                >
                  75–100%
                </span>
                <span className="w-24 text-left text-sm font-semibold text-gray-700">Forte</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span
                  className="w-24 flex-shrink-0 rounded-full px-4 py-2 text-center font-mono text-sm font-black tabular-nums text-white"
                  style={{
                    background: '#F5A623',
                    boxShadow: '0 8px 20px -4px rgba(245,166,35,0.4), 0 2px 8px -1px rgba(245,166,35,0.4)',
                  }}
                >
                  50–74%
                </span>
                <span className="w-24 text-left text-sm font-semibold text-gray-700">Provável</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span
                  className="w-24 flex-shrink-0 rounded-full px-4 py-2 text-center font-mono text-sm font-black tabular-nums text-white"
                  style={{
                    background: '#E85142',
                    boxShadow: '0 8px 20px -4px rgba(232,81,66,0.4), 0 2px 8px -1px rgba(232,81,66,0.4)',
                  }}
                >
                  0–49%
                </span>
                <span className="w-24 text-left text-sm font-semibold text-gray-700">Improvável</span>
              </div>
            </div>
            <h3 className="text-base font-black text-gray-900">Score de confiança no resultado</h3>
            <p className="mt-1.5 text-sm text-gray-500">Classificado em Forte, Provável ou Improvável.</p>
          </div>

          {/* Card 3: Photo quality */}
          <div className="flex flex-col items-center rounded-3xl border border-gray-100 bg-white px-8 py-10 text-center">
            <div className="relative mb-7" style={{ width: 168, height: 168 }}>
              <div
                className="absolute inset-0 overflow-hidden rounded-full border-2 shadow-lg"
                style={{ borderColor: '#D4A800' }}
              >
                <img
                  src="/woman_search.jpeg"
                  alt=""
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="pointer-events-none absolute rounded-full bg-[#D4A800]" style={{ top: -8, left: 82, width: 4, height: 16 }} />
              <div className="pointer-events-none absolute rounded-full bg-[#D4A800]" style={{ top: 82, right: -8, width: 16, height: 4 }} />
              <div className="pointer-events-none absolute rounded-full bg-[#D4A800]" style={{ bottom: -8, left: 82, width: 4, height: 16 }} />
              <div className="pointer-events-none absolute rounded-full bg-[#D4A800]" style={{ top: 82, left: -8, width: 16, height: 4 }} />
            </div>
            <h3 className="text-base font-black text-gray-900">Qualidade da foto importa</h3>
            <p className="mt-1.5 text-sm text-gray-500">Foto frontal e nítida gera resultados melhores.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
