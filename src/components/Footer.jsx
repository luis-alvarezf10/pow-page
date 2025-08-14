import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const socialNetworks = [
    {
      name: 'instagram',
      url: 'https://instagram.com/powgym',
      viewBox: '0 0 16 16',
      path: 'M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'
    },
    {
      name: 'tiktok',
      url: 'https://tiktok.com/@powgym',
      viewBox: '0 0 16 16',
      path: 'M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z'
    },
    {
      name: 'whatsapp',
      url: 'https://wa.me/34123456789',
      viewBox: '0 0 16 16',
      path: 'M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-permanent-marker text-yellow-400">Pow</span>
              <span className="text-xl font-semibold text-white">Fitness</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos tu vida en 60 minutos. El gimnasio más innovador donde cada sesión cuenta.
            </p>
            <div className="flex space-x-5">
              {socialNetworks.map((social) => (
                <a key={social.name} className={`social-container ${social.name}`} href={social.url} target="_blank" rel="noopener noreferrer">
                  <svg viewBox={social.viewBox} className="social-svg">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Sede Centro */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">Sede Principal</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-7 text-yellow-400 mt-1" />
                <span className="text-gray-300">a 2 cuadras de Av. Principal<br />Lechería</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+58 412-7563518</span>
              </div>
              <div className="space-y-1 text-gray-300 text-sm">
                <div className="font-medium text-yellow-400">Horarios:</div>
                  <div>Lun - Vie: 6:00 AM - 7:00 PM</div>
                  <div>Sáb: 6:00 AM - 12:00 M</div>
              </div>
            </div>
          </div>

          {/* Sede Norte */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">Sede Smash</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-7 text-yellow-400 mt-1" />
                <span className="text-gray-300">Av. Intercomunal, Atras de Inversan<br />Lechería</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+58 412-2530116</span>
              </div>
              <div className="space-y-1 text-gray-300 text-sm">
                <div className="font-medium text-yellow-400">Horarios:</div>
                <div>Lun - Vie: 6:00 AM - 7:00 PM</div>
                <div>Sáb: 6:00 AM - 12:00 M</div>
              </div>
            </div>
          </div>

          {/* Contacto General */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-yellow-400">Contacto General</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">info@powgym.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">+34 900 123 456</span>
              </div>
              <div className="space-y-2 text-gray-300 text-sm">
                <div className="font-medium text-yellow-400">Servicios:</div>
                <ol>
                  <li>• Entrenamiento personalizado</li>
                  <li>• Clases grupales</li>
                  <li>• Asesoría nutricional</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 POW Gym. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Política de Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Términos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;