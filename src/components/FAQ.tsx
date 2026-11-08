import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqItems = [
  {
    q: 'A busca é anônima?',
    a: 'Sim. A foto enviada é criptografada e usada apenas para a busca. Após o processamento, a foto é automaticamente apagada dos nossos servidores. Ninguém tem acesso à sua busca.',
  },
  {
    q: 'O que a BuscaX consegue encontrar?',
    a: 'A BuscaX busca em bilhões de imagens públicas na internet — redes sociais (Instagram, TikTok, LinkedIn, Facebook, X, YouTube, Pinterest), sites de notícias, fóruns e registros digitais. Você recebe correspondências com score de similaridade e o link direto para o perfil encontrado.',
  },
  {
    q: 'Preciso me cadastrar para fazer uma busca?',
    a: 'Não. Você pode fazer uma busca sem cadastro. O resultado fica pronto em menos de 60 segundos.',
  },
  {
    q: 'A foto que eu envio fica salva?',
    a: 'Não. Após a busca ser concluída, a foto é automaticamente apagada. Não armazenamos nem reutilizamos suas imagens.',
  },
  {
    q: 'Quais tipos de foto funcionam melhor?',
    a: 'Fotos frontais e nítidas geram resultados melhores. Screenshots de redes sociais, fotos de câmera — qualquer formato serve, desde que o rosto esteja visível.',
  },
  {
    q: 'Os resultados podem ser usados para decisões de crédito ou emprego?',
    a: 'Não. A BuscaX realiza buscas em informações publicamente disponíveis para fins de verificação pessoal. Resultados não podem ser usados para decisões de emprego, crédito ou moradia.',
  },
  {
    q: 'É legal fazer essa busca?',
    a: 'Sim. A BuscaX busca apenas em informações publicamente disponíveis na internet. O uso é destinado para verificação pessoal, como conferir se um perfil é real antes de se conhecer alguém pela internet.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="border-t border-gray-100 bg-[#FAF8F2]">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A800]">
          FAQ
        </p>
        <h2 className="mb-3 text-center text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
          Dúvidas frequentes.
        </h2>
        <p className="mb-10 text-center text-sm text-gray-500">
          Tudo o que você precisa saber antes de fazer sua busca.
        </p>

        <div className="space-y-3">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-bold text-gray-900">{item.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                  gridTemplateRows: openIndex === i ? '1fr' : '0fr',
                }}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-sm leading-relaxed text-gray-500">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
