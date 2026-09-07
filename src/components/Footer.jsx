import powWhite from '../assets/images/pow-white.png';

const footerLinks = [
  { label: 'Términos', href: '#' },
  { label: 'Privacidad', href: '#' },
  { label: 'Reglamento', href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0e0e0e] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img src={powWhite} alt="Pow Fitness Logo" className="h-8 w-auto object-contain" />
              <span className="font-['Oswald'] text-[20px] leading-[26px] uppercase text-white tracking-wide font-medium">Pow Fitness</span>
            </div>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa] leading-relaxed">
              Entrenamiento de alta intensidad, disciplina implacable y comunidad atlética de élite en Lechería. Transformando potencia física en rendimiento para la vida diaria.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase text-[#e9ea00] px-2 py-1 bg-[#201f1f] rounded font-semibold">CrossFit Affiliate</span>
              <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase text-[#a5cdd7] px-2 py-1 bg-[#201f1f] rounded font-semibold">WodUp Track</span>
            </div>
          </div>

          {/* Col 2: Sede Principal */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Oswald'] text-[20px] leading-[26px] uppercase text-white tracking-wider font-medium">Sede Principal</h3>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Lechería, a 2 cuadras de la Av. Principal, Anzoátegui.</p>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Lunes a Viernes: 6:00 AM – 7:00 PM</p>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Sábados: 6:00 AM – 12:00 PM</p>
            <a className="font-['DM_Sans'] text-[10px] leading-[14px] text-[#a5cdd7] uppercase pt-1 hover:underline font-semibold" href="tel:+584127563518">+58 412-7563518</a>
          </div>

          {/* Col 3: Sede Smash */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Oswald'] text-[20px] leading-[26px] uppercase text-white tracking-wider font-medium">Sede Smash</h3>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Lechería, Av. Intercomunal, Detrás de Inversan.</p>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Lunes a Viernes: 6:00 AM – 7:00 PM</p>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Sábados: 6:00 AM – 12:00 PM</p>
            <a className="font-['DM_Sans'] text-[10px] leading-[14px] text-[#a5cdd7] uppercase pt-1 hover:underline font-semibold" href="tel:+584122530116">+58 412-2530116</a>
          </div>

          {/* Col 4: Contact */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Oswald'] text-[20px] leading-[26px] uppercase text-white tracking-wider font-medium">Contacto Directo</h3>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Atención inmediata vía WhatsApp oficial:</p>
            <a className="font-['Oswald'] text-[20px] leading-[26px] text-[#e9ea00] hover:underline" href="https://wa.me/584127563518" target="_blank" rel="noopener noreferrer">
              +58 412-7563518
            </a>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa] pt-2">Email: info@powfitness.com</p>
            <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">Lechería • Anzoátegui • Venezuela</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0e0e0e]">
          <p className="font-['DM_Sans'] text-[12px] leading-[16px] text-[#cac8aa]">
            © 2026 Pow Fitness. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link, i) => (
              <a key={i} className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase text-[#cac8aa] hover:text-white transition-colors font-semibold" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
