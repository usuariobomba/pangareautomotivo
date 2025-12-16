import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-accent-dark text-[#f8f8f5] pt-16 pb-8 px-4 md:px-20 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        
        {/* Brand */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img 
              src="https://i.ibb.co/q3cRCJ7c/bannertransp.png" 
              alt="Pangaré Automotivo" 
              className="h-24 md:h-32 w-auto object-contain brightness-0 invert"
              width="256"
              height="128"
              loading="lazy"
            />
          </div>
          <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
            Potência e confiança para ir mais longe. Mais de 50 anos impulsionando empresas e motoristas com qualidade.
          </p>
          <a href="https://instagram.com/pangareauto" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-bold uppercase tracking-wider text-sm border-b border-gray-700 pb-1">
            <span className="font-display">Siga no Instagram: @pangareauto</span>
          </a>
        </div>
        
        {/* Contact Info */}
        <div>
          <h4 className="font-display font-bold uppercase text-lg mb-6 text-primary tracking-wide">Entre em Contato</h4>
          <ul className="space-y-5 text-sm text-gray-300">
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary shrink-0">location_on</span>
              <span className="leading-snug">Rua 11 de Agosto, 2993<br />Tatuí - SP</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary shrink-0">call</span>
              <div className="flex flex-col">
                <a href="https://wa.me/5515996485258?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20equipe." target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-primary flex items-center gap-2">
                  <span className="material-symbols-outlined text-base">chat</span>
                  (15) 99648-5258
                </a>
                <a href="tel:1530224063" className="font-bold text-white hover:text-primary">(15) 3022-4063</a>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary shrink-0">mail</span>
              <a href="mailto:luiz@pangareautomotivo.com.br" className="hover:text-primary transition-colors cursor-pointer break-all">luiz@pangareautomotivo.com.br</a>
            </li>
          </ul>
        </div>
        
        {/* Hours */}
        <div>
          <h4 className="font-display font-bold uppercase text-lg mb-6 text-primary tracking-wide">Horários</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex justify-between border-b border-gray-800 pb-2">
              <span>Seg - Sex</span>
              <span className="font-bold text-white">08:00 - 18:00</span>
            </li>
            <li className="flex justify-between border-b border-gray-800 pb-2 text-gray-500">
              <span>Sábado</span>
              <span className="font-bold uppercase text-xs pt-1">Fechado</span>
            </li>
            <li className="flex justify-between pb-2 text-gray-500">
              <span>Domingo</span>
              <span className="font-bold uppercase text-xs pt-1">Fechado</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
        <p>© 2024 Pangaré Automotivo. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <span className="text-gray-600">Tradição desde 19XX</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;