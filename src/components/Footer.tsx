export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#FAF8F2] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 grid grid-cols-1 gap-8 md:grid-cols-5">
          {/* Logo + description */}
          <div>
            <div className="mb-3">
              <img
                src="/buscax-logo.png"
                alt="BuscaX"
                className="h-8 w-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <p className="text-sm leading-relaxed text-gray-500">
              Busca facial com IA. Descubra onde uma foto aparece publicamente na internet.
            </p>
          </div>

          {/* Produto */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Produto</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#como-funciona" className="transition-colors hover:text-[#F5C400]">
                  Como funciona
                </a>
              </li>
              <li>
                <a href="#reviews" className="transition-colors hover:text-[#F5C400]">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#hero-upload" className="transition-colors hover:text-[#F5C400]">
                  Fazer uma busca
                </a>
              </li>
              <li>
                <a href="#faq" className="transition-colors hover:text-[#F5C400]">
                  Perguntas frequentes
                </a>
              </li>
              <li>
                <a href="#blog" className="transition-colors hover:text-[#F5C400]">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Ache alguém */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Ache alguém</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#instagram" className="transition-colors hover:text-[#F5C400]">
                  Ache alguém no Instagram
                </a>
              </li>
              <li>
                <a href="#facebook" className="transition-colors hover:text-[#F5C400]">
                  Ache alguém no Facebook
                </a>
              </li>
              <li>
                <a href="#tiktok" className="transition-colors hover:text-[#F5C400]">
                  Ache alguém no TikTok
                </a>
              </li>
              <li>
                <a href="#linkedin" className="transition-colors hover:text-[#F5C400]">
                  Ache alguém no LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Contato</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="mailto:buscaxsite@gmail.com"
                  className="transition-colors hover:text-[#F5C400]"
                >
                  buscaxsite@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Legal</p>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#termos" className="transition-colors hover:text-[#F5C400]">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#privacidade" className="transition-colors hover:text-[#F5C400]">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="#lgpd" className="transition-colors hover:text-[#F5C400]">
                  LGPD
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-xs text-gray-400">
          <p>
            A BuscaX realiza buscas em informações publicamente disponíveis para fins de verificação pessoal. Não é
            uma agência de crédito. Resultados não podem ser usados para decisões de emprego, crédito ou moradia.
          </p>
          <p className="mt-3">© 2026 BuscaX · CNPJ 68.962.985/0001-70 · Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
