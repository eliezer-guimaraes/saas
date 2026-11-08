import { Upload, Lock } from 'lucide-react';

type CTAProps = { onOpenSearch: () => void };

export default function CTA({ onOpenSearch }: CTAProps) {
  return (
    <section className="bg-white px-6 py-20 text-center">
      <div className="mx-auto max-w-lg">
        <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#D4A800]">Começar</p>
        <h2 className="mb-4 text-4xl font-black leading-tight text-gray-900">
          Uma foto diz tudo
          <br />
          que você precisa saber.
        </h2>
        <p className="mb-8 text-sm text-gray-500">Resultados rápidos, privados e sem cadastro.</p>

        <button
          onClick={onOpenSearch}
          className="liquid-gold inline-flex items-center gap-2.5 rounded-full px-10 py-4 text-base font-black text-gray-900"
        >
          <Upload className="h-[18px] w-[18px]" />
          Enviar uma foto
        </button>

        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <Lock className="h-3 w-3" />
          Foto apagada após a busca · Resultados privados
        </p>
      </div>
    </section>
  );
}
