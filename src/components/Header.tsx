import { useEffect, useState } from 'react';
import { Search } from 'lucide-react';

type HeaderProps = { onOpenSearch: () => void };

export default function Header({ onOpenSearch }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-gray-200/80 bg-[#FAF8F2]/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/buscax-logo.png"
            alt="BuscaX"
            className="h-7 w-auto"
            style={{ mixBlendMode: 'multiply' }}
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-semibold text-gray-600 md:flex">
          <a href="#como-funciona" className="transition-colors hover:text-gray-900">
            Como funciona
          </a>
          <a href="#reviews" className="transition-colors hover:text-gray-900">
            Reviews
          </a>
          <a href="#faq" className="transition-colors hover:text-gray-900">
            Perguntas frequentes
          </a>
          <a href="/blog" className="transition-colors hover:text-gray-900">
            Blog
          </a>
        </nav>

        <button
          onClick={onOpenSearch}
          className="liquid-gold inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold text-gray-900"
        >
          <Search className="h-4 w-4" />
          Fazer uma busca
        </button>
      </div>
    </header>
  );
}
