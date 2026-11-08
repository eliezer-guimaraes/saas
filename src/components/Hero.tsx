import { Upload, Lock, ShieldCheck } from 'lucide-react';

const orbitIcons = [
  { name: 'LinkedIn', src: '/linkedin-logo.jpeg', top: 20, left: 192, color: '#0A66C2', delay: '0s' },
  { name: 'YouTube', src: '/youtube-logo.jpeg', top: 60, left: 303, color: '#FF0000', delay: '1.5s' },
  { name: 'X', src: '/x-logo.jpeg', top: 162, left: 361, color: '#000000', delay: '3s' },
  { name: 'Instagram', src: '/instagram-logo.jpeg', top: 278, left: 341, color: '#D44285', delay: '4.5s' },
  { name: 'TikTok', src: '/tiktok-logo.jpeg', top: 354, left: 251, color: '#000000', delay: '6s' },
  { name: 'Facebook', src: '/facebook-logo.jpeg', top: 354, left: 133, color: '#1877F2', delay: '7.5s' },
  { name: 'Pinterest', src: '/logopinterest.jpeg', top: 278, left: 43, color: '#E60023', delay: '9s' },
  { name: 'Perfis', src: '/man-logo.jpeg', top: 162, left: 23, color: '#6b7280', delay: '10.5s' },
  { name: 'Privacy', src: '/privacy-logo.jpeg', top: 60, left: 81, color: '#F5A623', delay: '12s' },
];

type HeroProps = { onOpenSearch: () => void };

export default function Hero({ onOpenSearch }: HeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pt-12 pb-16 text-center">
      <div className="mx-auto max-w-5xl">
        {/* Badge */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F5C400]/40 bg-[#FFF8D6] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4A800]">
          IA de Reconhecimento Facial
        </div>

        {/* Title */}
        <h1 className="mx-auto mb-10 max-w-2xl text-4xl font-black leading-[1.1] text-gray-900 sm:text-5xl md:text-6xl">
          Ache qualquer pessoa
          <br />
          <span className="relative inline-block">
            com uma única foto.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="12"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M2 9C50 4 120 2 180 4C220 5 260 7 298 3"
                stroke="#F5C400"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        {/* Orbital animation */}
        <div className="relative mx-auto mb-8 h-[min(440px,calc(100vw-32px))] w-[min(440px,calc(100vw-32px))]">
          <div className="orbital-canvas relative">
          <svg
            className="pointer-events-none absolute inset-0"
            width="440"
            height="440"
          >
            <circle
              cx="220"
              cy="220"
              r="174"
              fill="none"
              stroke="#D4A80045"
              strokeWidth="1.5"
              strokeDasharray="5 8"
            />
          </svg>

          <div className="orbit-ring" style={{ animationDuration: '30s' }}>
            {orbitIcons.map((icon) => (
              <div
                key={icon.name}
                className="orbit-icon absolute"
                style={{
                  top: icon.top,
                  left: icon.left,
                  width: 56,
                  height: 56,
                  animationDuration: '30s',
                }}
              >
                <div
                  className="glow-ring pointer-events-none absolute rounded-full"
                  style={{
                    inset: -3,
                    border: `2px solid ${icon.color}`,
                    color: icon.color,
                    animationDelay: icon.delay,
                  }}
                />
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-white shadow-xl">
                  <img
                    src={icon.src}
                    alt={icon.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Center upload button */}
          <div
            id="hero-upload"
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <div className="pointer-events-auto">
              <button onClick={onOpenSearch} className="liquid-gold inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-black text-gray-900 sm:px-6 sm:py-3.5">
                <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Enviar foto</span>
              </button>
            </div>
          </div>
          </div>
        </div>

        {/* Privacy badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F5C400]/40 bg-[#FFF8D6] px-5 py-2 text-xs font-semibold text-[#996600]">
          <Lock className="h-3 w-3" />
          Foto armazenada com segurança · Resultados privados para você
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4">
          <div className="flex -space-x-3">
            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#FAF8F2]" style={{ zIndex: 4 }}>
              <img
                src="/example_woman.jpeg"
                alt="usuário"
                className="h-full w-full object-cover"
                style={{ filter: 'blur(5px)', transform: 'scale(1.25)' }}
              />
            </div>
            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#FAF8F2]" style={{ zIndex: 3 }}>
              <img
                src="/example_man.jpeg"
                alt="usuário"
                className="h-full w-full object-cover"
                style={{ filter: 'blur(5px)', transform: 'scale(1.25)' }}
              />
            </div>
            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#FAF8F2]" style={{ zIndex: 2 }}>
              <img
                src="/example_oldwoman.jpeg"
                alt="usuário"
                className="h-full w-full object-cover"
                style={{ filter: 'blur(5px)', transform: 'scale(1.25)' }}
              />
            </div>
            <div className="h-11 w-11 overflow-hidden rounded-full border-2 border-[#FAF8F2]" style={{ zIndex: 1 }}>
              <img
                src="/example_oldman.jpeg"
                alt="usuário"
                className="h-full w-full object-cover"
                style={{ filter: 'blur(5px)', transform: 'scale(1.25)' }}
              />
            </div>
          </div>
          <p className="text-sm text-gray-600">
            <strong className="font-black text-gray-900">10.000+</strong> pesquisas completas
          </p>
        </div>

        {/* Trust line */}
        <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <ShieldCheck className="h-3 w-3" />
          Foto apagada após a busca · Resultados privados
        </div>
      </div>
    </section>
  );
}
