const reviews = [
  {
    name: 'Luiza S.',
    text: '"Descobri que ele usava foto falsa de um gringo que ele jurava que era ele. Me poupou de meses de enganação."',
    avatar: '/example_woman.jpeg',
  },
  {
    name: 'Matheus K.',
    text: '"Descobri que ela tinha perfil em sites +18. Dei block na hora."',
    avatar: '/example_man.jpeg',
  },
  {
    name: 'Leonardo P.',
    text: '"Conversei com ela no Tinder e descobri que todas as fotos eram falsas. Ainda bem que vi isso antes de sair com ela."',
    avatar: '/example_oldman.jpeg',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="border-t border-gray-100 bg-[#FAF8F2] px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-widest text-[#D4A800]">
          Reviews
        </p>
        <h2 className="mb-12 text-center text-3xl font-black leading-tight text-gray-900 sm:text-4xl">
          O que as pessoas estão dizendo.
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-7 shadow-sm"
            >
              <div className="mb-5">
                <img src="/stars.png" alt="5 estrelas" className="h-6 object-contain object-left" />
              </div>
              <p className="mb-8 flex-1 text-base leading-relaxed text-gray-700">{review.text}</p>
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-full border-2 border-[#FAF8F2]">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="h-full w-full object-cover"
                    style={{ filter: 'blur(4px)', transform: 'scale(1.2)' }}
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{review.name}</p>
                  <p className="flex items-center gap-1 text-xs text-gray-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                    Usuário verificado
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
