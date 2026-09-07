const features = [
  'Pizarrón del WOD diario',
  'Registro de 1RM y marcas',
  'Reserva de clases en tiempo real',
  'Leaderboard de la comunidad',
];

export default function WodUpSection() {
  return (
    <section id="app-wodup" className="w-full py-12 md:py-18 px-5 lg:px-10 max-w-7xl mx-auto overflow-hidden">
      <div className="rounded-3xl bg-[#201f1f]/80 backdrop-blur-2xl p-8 lg:p-12 shadow-2xl relative">
        {/* Decorative blurs */}
        <div className="absolute -right-16 -top-16 w-96 h-96 bg-[#e9ea00]/10 rounded-full blur-3xl pointer-events-none" />
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
              Lleva tu rutina con <span className="text-[#e9ea00]">WodUp</span>
            </h2>

            <p className="font-['DM_Sans'] text-[16px] leading-6 text-[#cac8aa] max-w-xl leading-relaxed">
              Descarga nuestra app WodUp para seguir tus entrenamientos, registrar tus progresos y conectarte con tu coach. Tu rutina personalizada, tu historial y tus metas — todo en un solo lugar.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#e9ea00] text-[20px]">check_circle</span>
                  <span className="font-['DM_Sans'] text-[14px] leading-5 text-[#e5e2e1]">{f}</span>
                </div>
              ))}
            </div>

            {/* Download badges */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://apps.apple.com"
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
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#353534] px-5 py-3 rounded-xl hover:bg-[#393939] transition-colors shadow-md"
              >
                <span className="material-symbols-outlined text-[28px] text-[#a5cdd7]">play_arrow</span>
                <div className="text-left">
                  <span className="font-['DM_Sans'] text-[10px] leading-[14px] block text-[#cac8aa] uppercase tracking-wider font-semibold">Disponible en</span>
                  <span className="font-['DM_Sans'] text-[18px] leading-[24px] font-bold text-white">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] rounded-[42px] bg-[#0e0e0e] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
              <div className="w-full rounded-[34px] bg-[#1c1b1b] overflow-hidden p-4 flex flex-col gap-3">
                {/* Status bar */}
                <div className="flex justify-between items-center text-[#cac8aa] px-2 pt-2">
                  <span className="font-['DM_Sans'] text-[10px] font-bold text-white">09:41</span>
                  <div className="w-16 h-4 bg-[#353534] rounded-full" />
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">signal_cellular_4_bar</span>
                    <span className="material-symbols-outlined text-[14px]">battery_full</span>
                  </div>
                </div>
                {/* App header */}
                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="font-['DM_Sans'] text-[10px] uppercase text-[#e9ea00] font-bold tracking-wider">WodUp • Pow CCS</span>
                    <p className="font-['DM_Sans'] text-[18px] leading-[24px] text-white font-bold">WOD: "Murph Prep"</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#e9ea00] text-[#323200] flex items-center justify-center font-bold text-xs">JS</div>
                </div>
                {/* Progress chart */}
                <div className="bg-[#201f1f] p-3 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-['DM_Sans'] text-[10px] text-[#cac8aa] uppercase">Rondas completadas</span>
                    <span className="font-['DM_Sans'] text-[10px] text-[#a5cdd7] font-mono">24:18.42</span>
                  </div>
                  <svg className="w-full h-12" fill="none" viewBox="0 0 200 48">
                    <path d="M0 36 C 30 38, 40 10, 70 20 C 100 30, 110 5, 140 18 C 170 32, 180 8, 200 12" fill="none" stroke="#e9ea00" strokeLinecap="round" strokeWidth="3" />
                    <path d="M0 36 C 30 38, 40 10, 70 20 C 100 30, 110 5, 140 18 C 170 32, 180 8, 200 12 L 200 48 L 0 48 Z" fill="rgba(233,234,0,0.08)" />
                  </svg>
                  <div className="flex justify-between text-[10px] pt-1 text-[#cac8aa] font-mono">
                    <span>HR: 168 bpm</span>
                    <span className="text-[#e9ea00]">PEAK ZONE</span>
                  </div>
                </div>
                {/* Streak badges */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#201f1f] p-2 rounded-lg text-center">
                    <span className="font-['Oswald'] text-[20px] leading-[26px] text-white block">14</span>
                    <span className="font-['DM_Sans'] text-[10px] leading-[14px] text-[#cac8aa] uppercase">Días Racha</span>
                  </div>
                  <div className="bg-[#201f1f] p-2 rounded-lg text-center">
                    <span className="font-['Oswald'] text-[20px] leading-[26px] text-[#a5cdd7] block">PR 225#</span>
                    <span className="font-['DM_Sans'] text-[10px] leading-[14px] text-[#cac8aa] uppercase">Clean & Jerk</span>
                  </div>
                </div>
                {/* Status */}
                <div className="bg-[#e9ea00] p-2 rounded-xl text-center text-[#323200] font-['DM_Sans'] text-[12px] leading-[16px] font-bold uppercase tracking-wider">
                  Sesión Registrada ✓
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
