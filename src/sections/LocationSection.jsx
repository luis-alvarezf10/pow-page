import { MapPin, Clock, Phone, Star, Zap } from 'lucide-react';

export default function LocationSection() {
  const locations = [
    {
      name: 'Sede Principal',
      address: 'Lechería, a 2 cuadras de Av. Principal de Lechería',
      phone: '+58 412-7563518',
      hours: 'Lun - Vie: 5:00 AM - 10:00 PM\nSáb - Dom: 6:00 AM - 8:00 PM',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13508.27268448884!2d-64.68792157499098!3d10.194751351408632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d739b7982c121%3A0xedbf594a0c66e163!2sPOW%20FITNESS%20C.A!5e0!3m2!1ses-419!2sve!4v1755056807100!5m2!1ses-419!2sve',
      features: ['CrossFit', 'Bodybuilding', 'Entrenamiento Personal', 'Fisioterapia', 'Nutrición'],
      highlight: 'Sede Original',
      color: 'yellow'
    },
    {
      name: 'Sede Smash',
      address: 'Lechería, Av. Intercomunal, Atras de Inversan',
      phone: '+58 412-2530116',
      hours: 'Lun - Vie: 5:30 AM - 9:30 PM\nSáb - Dom: 6:30 AM - 7:30 PM',
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d672.2746885408088!2d-64.66813843719639!3d10.182521477688343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d73005d821bdd%3A0xd68faefcaf4bcb7e!2sPow%20Fitness%20Smash!5e0!3m2!1ses-419!2sve!4v1755057043656!5m2!1ses-419!2sve',
      features: ['Bodybuilding', 'Entrenamiento Personal', 'Fisioterapia', 'Nutrición'],
      highlight: 'Sede Polideportiva',
      color: 'yellow'
    }
  ];

  return (
    <section id="location" className="relative bg-gray-800 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Nuestras Sedes</h2>
          <p className="text-gray-400 text-lg">Encuentra la sede más cercana a ti y comienza tu transformación</p>
        </div>

        <div className="space-y-16">
          {locations.map((location, index) => {
            const isEven = index % 2 === 0;
            const colorClasses = 'from-yellow-400 to-orange-400 border-yellow-400/30';
            
            return (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Mapa */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''} relative group`}>
                  <div className="h-80 bg-gray-700 rounded-2xl overflow-hidden border border-gray-500">
                    {location.mapEmbed ? (
                      <iframe 
                        src={location.mapEmbed}
                        width="100%" 
                        height="100%" 
                        style={{border: 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-2xl"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-400">
                        <div className="text-center">
                          <MapPin className="w-12 h-12 mx-auto mb-2" />
                          <p>Mapa próximamente</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Información */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''} bg-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div>
                      <h3 className="text-4xl font-semibold text-yellow-400 mb-2">{location.name}</h3>
                      <span className={`text-sm px-6 py-1 rounded-full bg-yellow-400  text-white font-semibold`}>
                        {location.highlight}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{location.address}</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{location.phone}</span>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div className="text-gray-300 whitespace-pre-line">{location.hours}</div>
                    </div>
                  </div>

                  {/* Servicios disponibles */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Servicios disponibles:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {location.features.map((feature, i) => (
                        <div key={i} className={`bg-yellow-400/10  text-yellow-400 text-xs font-semibold border rounded-lg py-2 text-center text-sm font-medium`}>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}