const WHATSAPP_URL = 'https://wa.me/584127563518?text=Hola%20Pow!%20Deseo%20reclamar%20mi%20primera%20clase%20gratis';

export default function FinalCTASection() {
  return (
    <section className="relative w-full py-12 md:py-18 my-8 overflow-hidden bg-[#0e0e0e] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('/assets/images/gym.jpg')" }} />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0e0e0e]/90 via-[#0e0e0e]/80 to-[#0e0e0e]/90" />
      <div className="absolute w-[500px] h-[500px] bg-[#e9ea00]/15 rounded-full blur-[140px] pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-5 lg:px-10 text-center flex flex-col items-center py-8">
        <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.25em] text-[#e9ea00] mb-3 bg-[#2a2a2a]/70 px-4 py-1 rounded-full font-semibold">
          Tu momento es ahora
        </span>
        <h2 className="font-['Oswald'] text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] uppercase text-white tracking-tight max-w-2xl text-balance font-bold">
          ¿Estás listo para potenciar tu vida?
        </h2>
        <p className="font-['DM_Sans'] text-[16px] leading-6 text-[#cac8aa] max-w-xl mt-4 mb-8">
          Tu primera clase es gratis. Sin compromisos. Solo vos y tu mejor versión.
        </p>

        {/* CTA Button */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e9ea00] text-[#323200] font-['Oswald'] text-[20px] leading-[26px] px-10 py-4 rounded-full uppercase tracking-wider transition-all duration-300 shadow-[0_0_40px_rgba(233,234,0,0.4)] hover:scale-105 active:scale-95 animate-pulse flex items-center gap-2"
        >
          <span>Agendar mi clase gratis</span>
          <span className="material-symbols-outlined text-[24px]">arrow_forward</span>
        </a>

        {/* Secondary */}
        <div className="mt-6 flex items-center gap-2 text-[#cac8aa] font-['DM_Sans'] text-[12px] leading-[16px]">
          <span>¿Tienes preguntas puntuales?</span>
          <a className="text-[#a5cdd7] hover:underline font-bold" href="https://wa.me/584127563518">+58 412-7563518</a>
          <span>o escríbenos a ambas sedes</span>
        </div>
      </div>
    </section>
  );
}
