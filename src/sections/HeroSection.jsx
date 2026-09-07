import powWhite from '../assets/images/pow-white.png';
import gym from '../assets/images/gym.jpg';

const WHATSAPP_URL = 'https://wa.me/584127563518?text=Hola%20Pow%20Fitness!%20Quiero%20agendar%20mi%20clase%20gratis';

const stats = [
  { value: '60', suffix: 'M', label: 'Intensidad Pura', color: 'text-[#e9ea00]' },
  { value: '2', suffix: 'X', label: 'Sedes Oficiales', color: 'text-[#a5cdd7]' },
  { value: '100', suffix: '%', label: 'Comunidad', color: 'text-[#e9ea00]' },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full -mt-20 min-h-screen flex items-center justify-center overflow-hidden bg-[#0e0e0e]">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${gym})` }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0e0e]/80 via-[#0e0e0e]/70 to-[#0e0e0e]" />

      {/* Glow effects */}
      <div className="absolute w-[600px] h-[600px] -top-24 left-1/2 -translate-x-1/2 bg-[#e9ea00]/10 rounded-full blur-[140px] pointer-events-none z-10" />
      <div className="absolute w-[500px] h-[500px] bottom-10 right-10 bg-[#244c55]/20 rounded-full blur-[160px] pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-5 lg:px-10 pt-36 pb-24 flex flex-col items-center text-center">
        {/* Logo */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-2 rounded-full bg-[#e9ea00]/20 blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
          <img src={powWhite} alt="Pow Fitness Logo" className="relative w-28 h-28 md:w-36 md:h-36 object-contain" />
        </div>

        {/* Badge */}
        <span className="font-['DM_Sans'] text-[12px] font-bold uppercase tracking-[0.25em] text-[#a5cdd7] mb-3 bg-[#2a2a2a]/60 px-4 py-1 rounded-full backdrop-blur-md">
          Centro de entrenamiento ✦ Musculación ✦ Crossfit
        </span>

        {/* Headline */}
        <h1 className="font-['Oswald'] text-[40px] leading-[44px] md:text-[64px] md:leading-[68px] uppercase text-white tracking-tight max-w-4xl text-balance font-bold">
          Potenciamos tu día en 60 minutos
        </h1>

        {/* Subheadline */}
        <p className="font-['DM_Sans'] text-[16px] leading-6 text-[#cac8aa] max-w-2xl mt-4 mb-10">
          Clases grupales, entrenamiento personalizado y más.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-[#e9ea00] text-[#323200] font-['DM_Sans'] text-[14px] font-bold px-8 py-3 rounded-full uppercase tracking-wider transition-all duration-300 shadow-[0_0_35px_rgba(233,234,0,0.35)] hover:scale-105 hover:shadow-[0_0_45px_rgba(233,234,0,0.55)] flex items-center justify-center gap-2"
          >
            <span>Agendar mi clase gratis</span>
            <span className="material-symbols-outlined text-[20px]">bolt</span>
          </a>
          <a
            href="#planes"
            className="w-full sm:w-auto font-['DM_Sans'] text-[14px] font-bold text-white px-8 py-3 rounded-full uppercase tracking-wider transition-colors hover:text-[#a5cdd7] hover:bg-[#2a2a2a]/40 backdrop-blur-sm flex items-center justify-center gap-2"
          >
            <span>Ver planes</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-3 gap-6 w-full max-w-xl text-left bg-[#201f1f]/60 backdrop-blur-xl rounded-2xl p-4">
          {stats.map((stat, i) => (
            <div key={i}>
              <span className="font-['Oswald'] text-[28px] leading-[34px] text-white block">
                {stat.value}<span className={stat.color}>{stat.suffix}</span>
              </span>
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.12em] font-semibold text-[#cac8aa]">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
