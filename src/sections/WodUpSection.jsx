import wodupLogo from '../assets/images/wodup.png';

const features = [
  'Pizarrón del WOD diario',
  'Registro de 1RM y marcas',
  'Registro de record',
  'Leaderboard de la comunidad',
];

export default function WodUpSection() {
  return (
    <section id="app-wodup" className="w-full py-12 md:py-18 px-5 lg:px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="rounded-3xl bg-[#201f1f]/80 backdrop-blur-2xl p-8 lg:p-12 shadow-2xl relative">
        {/* Decorative blurs */}
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-[#F4511E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-96 h-96 bg-[#244c55]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left: Copy */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#353534]/80 text-[#a5cdd7] w-fit">
              <span className="material-symbols-outlined text-[16px]">smartphone</span>
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.12em] font-semibold">
                Tu entrenamiento, siempre contigo
              </span>
            </div>

            <h2 className="font-['Oswald'] text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] uppercase text-white tracking-tight font-semibold">
              Lleva tu rutina con{' '}
              <span className="text-[#F4511E]">WodUp</span>
            </h2>

            <p className="font-['DM_Sans'] text-[16px] leading-6 text-[#cac8aa] max-w-xl leading-relaxed">
              Descarga la app WodUp para seguir tus entrenamientos, registrar tus progresos y conectarte con tu coach. Tu rutina personalizada, tu historial y tus metas — todo en un solo lugar.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#F4511E] text-[20px]">check_circle</span>
                  <span className="font-['DM_Sans'] text-[14px] leading-5 text-[#e5e2e1]">{f}</span>
                </div>
              ))}
            </div>

            {/* Download badges */}
            {/* <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://apps.apple.com/us/app/wodup/id1407715516"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#353534] px-5 py-3 rounded-xl hover:bg-[#393939] transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-[28px] text-white">file_download</span>
                <div className="text-left">
                  <span className="font-['DM_Sans'] text-[10px] leading-[14px] block text-[#cac8aa] uppercase tracking-wider font-semibold">Disponible en</span>
                  <span className="font-['DM_Sans'] text-[18px] leading-[24px] font-bold text-white">App Store</span>
                </div>
              </a>
              <a
                href="https://www.wodup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#353534] px-5 py-3 rounded-xl hover:bg-[#393939] transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-[28px] text-[#F4511E]">play_arrow</span>
                <div className="text-left">
                  <span className="font-['DM_Sans'] text-[10px] leading-[14px] block text-[#cac8aa] uppercase tracking-wider font-semibold">Disponible en</span>
                  <span className="font-['DM_Sans'] text-[18px] leading-[24px] font-bold text-white">Google Play</span>
                </div>
              </a>
            </div> */}
          </div>

          {/* Right: App icon */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F4511E]/25 rounded-full blur-3xl scale-150 pointer-events-none" />
              <img
                src={wodupLogo}
                alt="WodUp"
                className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-[32px] object-cover shadow-[0_20px_60px_rgba(244,81,30,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
