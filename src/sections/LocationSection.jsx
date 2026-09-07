const locations = [
  {
    name: 'Sede Principal',
    badge: 'Arena Oficial',
    badgeColor: 'bg-[#e9ea00]',
    dotColor: 'bg-[#e9ea00]',
    address: 'Lechería, a 2 cuadras de Av. Principal (Edificio Pow Fitness)',
    phone: '+58 412-7563518',
    phoneLink: 'tel:+584127563518',
    hours: 'Lun-Vie: 6:00 AM – 7:00 PM | Sáb: 6:00 AM – 12:00 PM',
    features: ['CrossFit', 'Bodybuilding', 'Personalizado'],
    mapsUrl: 'https://maps.google.com/?q=Lecheria+Venezuela',
  },
  {
    name: 'Sede Smash',
    badge: 'Centro Deportivo',
    badgeColor: 'bg-[#a5cdd7]',
    dotColor: 'bg-[#a5cdd7]',
    address: 'Lechería, Av. Intercomunal, Atrás de Inversan',
    phone: '+58 412-2530116',
    phoneLink: 'tel:+584122530116',
    hours: 'Lun-Vie: 6:00 AM – 7:00 PM | Sáb: 6:00 AM – 12:00 PM',
    features: ['Bodybuilding', 'Entrenamiento Personalizado', 'Área de Potencia'],
    mapsUrl: 'https://maps.google.com/?q=Avenida+Intercomunal+Lecheria',
    reversed: true,
  },
];

export default function LocationSection() {
  return (
    <section id="sedes" className="w-full py-12 md:py-18 px-5 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <span className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase tracking-[0.2em] text-[#e9ea00] block mb-1 font-semibold">
            Instalaciones de Élite
          </span>
          <h2 className="font-['Oswald'] text-[32px] leading-[36px] md:text-[48px] md:leading-[52px] uppercase text-[#a5cdd7] tracking-tight font-semibold">
            Encuéntranos
          </h2>
        </div>
        <p className="font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa] max-w-md">
          Dos arenas equipadas con barras olímpicas, racks Rogue, área de acondicionamiento de alta densidad y zonas de recuperación.
        </p>
      </div>

      {/* Locations */}
      <div className="flex flex-col gap-8">
        {locations.map((loc, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-3xl bg-[#201f1f]/60 backdrop-blur-xl p-6 lg:p-8 items-center`}
          >
            {/* Info */}
            <div className={`lg:col-span-6 flex flex-col gap-4 ${loc.reversed ? 'order-1 lg:order-2' : ''}`}>
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full ${loc.dotColor}`} />
                <span className="font-['DM_Sans'] text-[12px] leading-[16px] uppercase font-bold tracking-wider text-[#e9ea00]">{loc.badge}</span>
              </div>
              <h3 className="font-['Oswald'] text-[28px] leading-[34px] uppercase text-white font-semibold">{loc.name}</h3>
              <div className="flex flex-col gap-3 font-['DM_Sans'] text-[14px] leading-5 text-[#cac8aa]">
                <p className="flex items-start gap-2 text-[#e5e2e1]">
                  <span className="material-symbols-outlined text-[#a5cdd7] text-[20px] shrink-0">location_on</span>
                  <span>{loc.address}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a5cdd7] text-[20px] shrink-0">call</span>
                  <a href={loc.phoneLink} className="text-white hover:text-[#e9ea00] transition-colors">{loc.phone}</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#a5cdd7] text-[20px] shrink-0">schedule</span>
                  <span>{loc.hours}</span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {loc.features.map((f, fi) => (
                  <span key={fi} className="font-['DM_Sans'] text-[10px] leading-[14px] uppercase bg-[#353534] px-3 py-1 rounded text-white font-semibold">
                    {f}
                  </span>
                ))}
              </div>
              <div className="pt-2">
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white font-['DM_Sans'] text-[12px] leading-[16px] uppercase font-bold tracking-wider hover:text-[#e9ea00] transition-colors"
                >
                  <span>Abrir en Google Maps</span>
                  <span className="material-symbols-outlined text-[18px]">north_east</span>
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className={`lg:col-span-6 h-72 rounded-2xl overflow-hidden shadow-xl bg-[#2a2a2a] ${loc.reversed ? 'order-2 lg:order-1' : ''}`}>
              <iframe
                src={loc.name === 'Sede Principal'
                  ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13508.27268448884!2d-64.68792157499098!3d10.194751351408632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d739b7982c121%3A0xedbf594a0c66e163!2sPOW%20FITNESS%20C.A!5e0!3m2!1ses-419!2sve!4v1755056807100!5m2!1ses-419!2sve'
                  : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.2746885408088!2d-64.66813843719639!3d10.182521477688343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d73005d821bdd%3A0xd68faefcaf4bcb7e!2sPow%20Fitness%20Smash!5e0!3m2!1ses-419!2sve!4v1755057043656!5m2!1ses-419!2sve'
                }
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
                title={loc.name}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
