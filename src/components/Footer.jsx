import { MapPin, Phone, Mail } from 'lucide-react';
import SocialButtons from './SocialButtons';

const Footer = () => {

  return (
    <footer className="bg-[#141414] text-white py-16">
      <div className="max-w-6xl mx-auto px-6 w-1/2 md:w-full">
        <div className="grid md:grid-cols-4 gap-8 mb-12 ">
          {/* Logo y descripción */}
          <div className="">
            <img src="/assets/images/pow-white.png" alt="logo pow" className="w-30 "/>
            <p className="text-gray-300 my-4 leading-relaxed ">
              Transformamos tu vida en 60 minutos. 
            </p>
            <SocialButtons />
          </div>

          {/* Sede Centro */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Sede Principal</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-7 text-[#789da4] mt-1" />
                <span className="text-gray-300">a 2 cuadras de Av. Principal<br />Lechería</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#789da4]" />
                <span className="text-gray-300">+58 412-7563518</span>
              </div>
            </div>
          </div>

          {/* Sede Norte */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Sede Smash</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-7 text-[#789da4] mt-1" />
                <span className="text-gray-300">Av. Intercomunal, Atras de Inversan<br />Lechería</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#789da4]" />
                <span className="text-gray-300">+58 412-2530116</span>
              </div>
            </div>
          </div>

          {/* Contacto General */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-white">Contacto General</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#789da4]" />
                <span className="text-gray-300">info@powgym.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#789da4]" />
                <span className="text-gray-300">+34 900 123 456</span>
              </div>
              <div className="space-y-2 text-gray-300 text-sm">
              <div className="font-medium text-white">Horarios:</div>
                <div>Lun - Vie: 6:00 AM - 7:00 PM</div>
                <div>Sáb: 6:00 AM - 12:00 M</div>
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