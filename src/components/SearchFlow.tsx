import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import { Check, ChevronRight, Clock3, Mail, Search, ShieldCheck, Upload, X } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { SiTinder } from 'react-icons/si';
import type { IconType } from 'react-icons';

type FlowStep = 'upload' | 'crop' | 'scanning' | 'results';
type Social = { label: string; icon: IconType; count: number; color: string };
type Profile = { image: string; username: string; platform: string; score: string };

type SearchFlowProps = {
  isOpen: boolean;
  onClose: () => void;
};

const socials: Social[] = [
  { label: 'Facebook', icon: FaFacebookF, count: 2, color: '#1877f2' },
  { label: 'Instagram', icon: FaInstagram, count: 3, color: '#d94686' },
  { label: 'Twitter', icon: FaTwitter, count: 1, color: '#111827' },
  { label: 'TikTok', icon: FaTiktok, count: 2, color: '#111827' },
  { label: 'Tinder', icon: SiTinder, count: 1, color: '#f97316' },
];

const profiles: Profile[] = [
  { image: 'https://i.pinimg.com/736x/69/97/92/699792728a3cfe42f75df9e5cc0df01e.jpg', username: '@mat••••••••', platform: 'Instagram', score: '98%' },
  { image: 'https://i.pinimg.com/736x/c1/24/cd/c124cd981c3296a90825dbc2b25ab6bd.jpg', username: '@isa••••••••', platform: 'Facebook', score: '91%' },
  { image: 'https://i.pinimg.com/736x/3d/80/e8/3d80e88eef529f74adab16e359be84f7.jpg', username: 'Isab•••••• S••••••', platform: 'TikTok', score: '87%' },
  { image: 'https://i.pinimg.com/736x/f1/ec/e2/f1ece2ca18da429242ecdc60e7cc07bd.jpg', username: '@isa••••••••••', platform: 'Tinder', score: '84%' },
  { image: 'https://i.pinimg.com/1200x/b5/ee/ff/b5eeffc6729b810a24505f8b44eacfe5.jpg', username: '@isa••••••••••', platform: 'Twitter', score: '74%' },
  { image: 'https://i.pinimg.com/1200x/b8/bb/6b/b8bb6b287601a6746d825d5ed293a9c7.jpg', username: 'Isa•••••• S••••••', platform: 'Facebook', score: '68%' },
];

function shuffleProfiles(items: Profile[]): Profile[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function SocialIcon({ item }: { item: Social }) {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-100 bg-white shadow-sm">
        <Icon className="h-5 w-5" style={{ color: item.color }} />
      </div>
      <span className="text-xs font-bold text-gray-700">{item.count}</span>
    </div>
  );
}

export default function SearchFlow({ isOpen, onClose }: SearchFlowProps) {
  const [step, setStep] = useState<FlowStep>('upload');
  const [email, setEmail] = useState('');
  const [preview, setPreview] = useState('/woman_search.jpeg');
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [showReceiveButton, setShowReceiveButton] = useState(false);
  const [relatedProfiles, setRelatedProfiles] = useState<Profile[]>([]);
  const [profilesAnalyzed, setProfilesAnalyzed] = useState(876533);
  const [socialResults, setSocialResults] = useState<Social[]>(socials);
  const [checkoutSeconds, setCheckoutSeconds] = useState(600);

  const scanningLines = useMemo(
    () => [
      '> handshake: conexão segura estabelecida',
      '> carregando módulo: face_decryptor v4.2',
      '> gerando hash dos pontos faciais',
      '> executando força bruta em índices públicos',
      '> quebrando camadas de criptografia...',
      '> correspondências encontradas: acesso pronto',
    ],
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    setStep('upload');
    setCheckoutOpen(false);
    setShowReceiveButton(false);
    setRelatedProfiles(shuffleProfiles(profiles).slice(0, 4));
    setProfilesAnalyzed(876533);
    setSocialResults(socials.map((social) => ({ ...social, count: Math.floor(Math.random() * 3) + 1 })));
  }, [isOpen]);

  useEffect(() => {
    if (step !== 'scanning') return;
    const startedAt = Date.now();
    const counter = window.setInterval(() => {
      const progress = Math.min((Date.now() - startedAt) / 6000, 1);
      setProfilesAnalyzed(Math.max(2, Math.round(876533 - (876531 * progress))));
    }, 100);
    const timer = window.setTimeout(() => setStep('results'), 6000);
    return () => {
      window.clearInterval(counter);
      window.clearTimeout(timer);
    };
  }, [step]);

  useEffect(() => {
    if (step !== 'results') return;
    const timer = window.setTimeout(() => setCheckoutOpen(true), 5000);
    return () => window.clearTimeout(timer);
  }, [step]);

  useEffect(() => {
    if (!checkoutOpen) return;
    setCheckoutSeconds(600);
    const timer = window.setInterval(() => {
      setCheckoutSeconds((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [checkoutOpen]);

  if (!isOpen) return null;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    setShowReceiveButton(true);
  };

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-gray-950/50 px-4 py-6 backdrop-blur-sm sm:py-10">
      <div className="mx-auto flex min-h-full max-w-xl items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-[28px] border border-white/70 bg-[#FAF8F2] shadow-2xl">
          <button
            onClick={onClose}
            aria-label="Fechar busca"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-500 shadow-sm transition hover:text-gray-900"
          >
            <X className="h-4 w-4" />
          </button>

          {step === 'upload' && (
            <div className="px-5 py-8 sm:px-10 sm:py-10">
              <div className="mb-7 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF4B8] text-[#C39100]">
                  <Search className="h-6 w-6" />
                </div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#D4A800]">Começar busca</p>
                <h2 className="text-[clamp(1.35rem,7vw,1.875rem)] font-black text-gray-900">Encontre perfis com uma foto</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">Envie uma foto e receba os resultados no seu email.</p>
              </div>

              <label className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-[#E0C44B] bg-white px-6 py-8 text-center transition hover:bg-[#FFFDF0]">
                <input type="file" accept="image/*" className="sr-only" onChange={handleFileChange} />
                {preview ? (
                  <img src={preview} alt="Prévia da foto" className="mb-4 h-28 w-28 rounded-full object-cover object-top ring-4 ring-[#F5C400]/30" />
                ) : (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF7CC] text-[#D4A800]">
                    <Upload className="h-7 w-7" />
                  </div>
                )}
                <span className="text-sm font-black text-gray-900">Escolher foto da pessoa</span>
                <span className="mt-1 text-xs text-gray-400">JPG, PNG ou WEBP · até 10 MB</span>
              </label>

              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-bold text-gray-800">Email para receber sua pesquisa</span>
                <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 focus-within:border-[#D4A800] focus-within:ring-2 focus-within:ring-[#F5C400]/20">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="voce@email.com"
                    className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                  />
                </div>
              </label>

              <button
                onClick={() => setStep('crop')}
                disabled={!email.trim()}
                className="liquid-gold mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-black text-gray-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Iniciar busca <ChevronRight className="h-4 w-4" />
              </button>
              <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-gray-400">
                <ShieldCheck className="h-3 w-3" /> Foto privada e apagada após o processamento
              </p>
            </div>
          )}

          {step === 'crop' && (
            <div className="px-5 py-8 text-center sm:px-10 sm:py-10">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#D4A800]">Etapa 2 de 3</p>
              <h2 className="text-2xl font-black text-gray-900">Centralize o rosto</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-gray-500">
                Ajuste a imagem dentro da moldura para melhorar a precisão da busca.
              </p>

              <div className="mx-auto my-7 flex h-64 w-64 items-center justify-center rounded-full border-4 border-[#F5C400] bg-gray-900/5 p-2 shadow-[0_0_0_10px_rgba(245,196,0,0.12)]">
                <img src={preview} alt="Centralize o rosto" className="h-full w-full rounded-full object-cover object-top" />
              </div>
              <div className="mx-auto flex max-w-sm items-start gap-2 rounded-2xl border border-[#F5C400]/40 bg-[#FFF8D6] px-4 py-3 text-left text-xs font-semibold leading-relaxed text-[#8A6800]">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-shrink-0" />
                Certifique-se de que o rosto esteja totalmente visível e centralizado.
              </div>
              <button
                onClick={() => setStep('scanning')}
                className="liquid-gold mt-6 flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-black text-gray-900"
              >
                Pronto <Check className="h-4 w-4" />
              </button>
            </div>
          )}

          {step === 'scanning' && (
            <div className="px-5 py-8 text-center sm:px-10 sm:py-10">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#D4A800]">Analisando imagem</p>
              <h2 className="text-2xl font-black text-gray-900">Nossa IA está procurando...</h2>
              <div className="relative mx-auto mt-7 h-64 w-64 overflow-hidden rounded-full border-4 border-[#F5C400] shadow-[0_0_0_10px_rgba(245,196,0,0.12)]">
                <img src={preview} alt="Imagem em análise" className="h-full w-full object-cover object-top" />
                <div className="scanner-line absolute left-0 right-0 z-10 h-1" />
                <div className="absolute inset-0 bg-[#F5C400]/10" />
              </div>
              <p className="mt-5 text-sm font-black text-gray-900">{profilesAnalyzed.toLocaleString('pt-BR')} perfis analisados</p>
              <p className="mt-1 text-xs text-gray-500">Quebrando camadas de criptografia...</p>
              <div className="mx-auto mt-4 max-w-md rounded-2xl border border-gray-800 bg-[#080d16] p-4 text-left font-mono text-[11px] leading-6 text-emerald-300 shadow-xl">
                {scanningLines.map((line, index) => (
                  <div key={line} className="animate-float-in" style={{ animationDelay: `${index * 550}ms` }}>
                    <span className="mr-2 text-gray-500">{String(index + 1).padStart(2, '0')}</span>
                    {line}
                    {index === scanningLines.length - 1 ? <span className="ml-1 animate-pulse">_</span> : null}
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 'results' && (
            <div className="px-5 py-8 sm:px-8 sm:py-10">
              <div className="text-center">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.22em] text-[#D4A800]">Busca concluída</p>
                <h2 className="text-2xl font-black text-gray-900">Encontramos possíveis perfis</h2>
                <p className="mt-2 text-sm text-gray-500">Confira uma prévia dos resultados encontrados.</p>
              </div>

              <div className="my-6 flex items-center gap-4 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm">
                <img src={preview} alt="Foto pesquisada" className="h-20 w-20 rounded-2xl object-cover object-top ring-2 ring-[#F5C400]" />
                <div>
                  <p className="text-sm font-black text-gray-900">Análise facial concluída</p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">Resultados serão enviados para {email}</p>
                  <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                    <Check className="h-3 w-3" /> Privado
                  </span>
                </div>
              </div>

              <div className="mb-6 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="mb-4 text-sm font-black text-gray-900">Contas encontradas</p>
                <div className="flex justify-between gap-2">
                  {socialResults.map((social) => <SocialIcon key={social.label} item={social} />)}
                </div>
              </div>

              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-black text-gray-900">Perfis relacionados</p>
                    <p className="mt-1 text-xs text-gray-500">Correspondências ordenadas por similaridade</p>
                  </div>
                  <span className="rounded-full bg-[#FFF8D6] px-2.5 py-1 text-xs font-black text-[#9A7300]">4+ perfis</span>
                </div>
                <div className="space-y-3">
                  {relatedProfiles.map((profile) => (
                    <div key={profile.username} className="flex items-center gap-3 rounded-2xl border border-gray-100 bg-[#FAF8F2] p-2.5">
                      <img src={profile.image} alt="Perfil censurado" className="h-10 w-10 rounded-xl object-cover blur-[4px]" />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-gray-800">{profile.username}</p>
                        <p className="text-[10px] text-gray-400">{profile.platform}</p>
                      </div>
                      <span className="rounded-lg bg-emerald-600 px-2 py-1 text-[10px] font-black text-white">{profile.score}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setCheckoutOpen(true)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#D4A800] bg-[#FFF8D6] px-4 py-3 text-sm font-black text-[#8A6800] transition hover:bg-[#FFF1A3]"
                >
                  Carregar mais perfis <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              {showReceiveButton ? (
                <button onClick={() => setCheckoutOpen(true)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-sm font-black text-white shadow-lg transition hover:bg-gray-800">
                  Receber minha pesquisa <Mail className="h-4 w-4" />
                </button>
              ) : null}
            </div>
          )}
        </div>
      </div>

      {checkoutOpen ? (
        <div className="fixed inset-0 z-[80] overflow-y-auto bg-gray-950/55 px-4 py-5 backdrop-blur-sm sm:py-10">
          <div className="mx-auto flex min-h-full max-w-[430px] items-center justify-center">
            <div className="relative w-full overflow-hidden rounded-[26px] border-t-4 border-[#F5C400] bg-white px-6 pb-6 pt-7 shadow-2xl sm:px-7">
              <button onClick={closeCheckout} aria-label="Fechar checkout" className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-900">
                <X className="h-4 w-4" />
              </button>
              <div className="text-center">
                <div className="mb-3 flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-4 py-3 text-white">
                  <Clock3 className="h-4 w-4 text-[#F5C400]" />
                  <span className="text-xs font-bold">Esta promoção expira em</span>
                  <strong className="font-mono text-lg tracking-wider text-[#F5C400]">{formatTime(checkoutSeconds)}</strong>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#F5C400] bg-[#FFF8D6] px-3 py-1 text-[10px] font-black uppercase tracking-wide text-[#9A7300]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5C400]" /> Oferta por tempo limitado
                </span>
                <div className="mx-auto mt-4 h-28 w-28 rounded-full border-4 border-[#F5C400] p-1 shadow-[0_0_30px_rgba(245,196,0,0.25)]">
                  <img src={preview} alt="Resultado encontrado" className="h-full w-full rounded-full object-cover object-top" />
                </div>
                <div className="mx-auto -mt-4 flex h-8 w-8 translate-x-10 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-white shadow"><Check className="h-4 w-4" /></div>
                <h2 className="mt-1 break-words text-[clamp(1.25rem,7vw,1.5rem)] font-black leading-tight text-gray-900">Encontramos perfis com essa foto!</h2>
                <p className="mt-1 text-sm text-gray-500">Desbloqueie para ver todos os resultados</p>
              </div>

              <div className="my-5 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div className="mb-2 flex gap-1 text-[#F5C400]">★★★★★</div>
                <p className="text-sm italic leading-relaxed text-gray-600">"Descobri que ele usava foto falsa de um gringo que ele jurava que era ele. Me poupou de meses de enganação."</p>
                <p className="mt-2 text-xs font-bold text-gray-400">— Luiza S.</p>
              </div>

              <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border-2 border-[#F5C400] bg-[#FFF8D6] px-4 py-4">
                <p className="text-sm font-black text-gray-800">◉ &nbsp; Uma Busca Completa</p>
                <div className="text-right"><p className="text-xs font-bold text-gray-400 line-through">R$37,90</p><p className="text-2xl font-black text-gray-900">R$19,90</p></div>
              </div>
              <a href="https://pay.kirvano.com/41998598-aee7-4908-bfec-136ea788a365" className="liquid-gold flex w-full items-center justify-center rounded-2xl px-5 py-4 text-base font-black text-gray-900">LIBERAR RELATÓRIO</a>
              <p className="mt-4 text-center text-[10px] text-gray-400">Compra única · Sem assinatura · Liberação imediata</p>
              <div className="mt-4 flex justify-center gap-2 text-[10px] font-bold text-gray-500"><span className="rounded-full bg-gray-100 px-2.5 py-1">PIX</span><span className="rounded-full bg-gray-100 px-2.5 py-1">🔒 SSL</span><span className="rounded-full bg-gray-100 px-2.5 py-1">Banco Central</span></div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
