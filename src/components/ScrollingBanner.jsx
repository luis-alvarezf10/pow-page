const phrases = [
  'POTENCIAMOS TU VIDA',
  'ENTRENA CON LOS MEJORES',
  'LECHERÍA, VENEZUELA',
];

export default function ScrollingBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[#c0e9f4] py-3 select-none shadow-xl">
      <div className="flex whitespace-nowrap will-change-transform animate-[marquee_24s_linear_infinite]">
        {[0, 1].map((copy) => (
          <span
            key={copy}
            className="font-['Oswald'] text-[20px] leading-[26px] uppercase text-[#001f25] tracking-wider flex items-center gap-6 px-4"
          >
            {phrases.map((p, i) => (
              <span key={`${copy}-${i}`} className="flex items-center gap-6">
                <span>{p}</span>
                {i < phrases.length - 1 ? (
                  <span className="text-[#001f25]/50">✦</span>
                ) : (
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}
