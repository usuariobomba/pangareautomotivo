import React from 'react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative w-full overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row h-auto min-h-[600px] lg:min-h-[85vh]">

        {/* Text Content */}
        <div className="flex-1 px-6 py-12 md:py-24 md:pl-20 flex flex-col justify-center items-start z-10 relative overflow-hidden">

          {/* Watermark Logo Background - WebP Version */}
          <img
            src="https://i.ibb.co/7dJfvgXW/logotransparenet.webp"
            alt=""
            className="absolute right-[-25%] md:right-[-10%] top-[5%] md:-top-[10%] h-[60%] md:h-[120%] w-auto pointer-events-none select-none object-contain -z-10 opacity-20 md:opacity-50"
            width="600"
            height="600"
            aria-hidden="true"
            loading="lazy"
            fetchPriority="low"
          />

          <div className="relative z-10">
            <div className="inline-block bg-accent-dark text-white px-4 py-2 rounded-lg text-xs font-bold uppercase mb-6 tracking-widest border border-gray-700">
              Oficina Mecânica em Tatuí há mais de 50 anos
            </div>

            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] tracking-tighter mb-6 text-accent-dark">
              Mecânica <br />
              <span className="relative inline-block text-primary">
                Geral
              </span> & <br />
              Peças <span className="bg-primary px-2 text-white transform -rotate-2 inline-block shadow-lg">Sob Cotação</span>
            </h2>

            <p className="text-lg md:text-xl font-medium max-w-lg mb-8 text-black bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm leading-relaxed border-l-4 border-primary">
              Sua referência de <strong>mecânico em Tatuí-SP</strong>. Serviço na linha leve e peças para toda linha — leve e pesada. Impulsionando empresas e motoristas há mais de meio século.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <a
                href="https://wa.me/5515996485258?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20agendar%20um%20servi%C3%A7o."
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none bg-primary hover:bg-red-700 text-white font-display font-bold text-base uppercase py-4 px-8 rounded-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all flex items-center justify-center gap-2 border-2 border-black"
              >
                <span>Agendar no WhatsApp</span>
                <span className="material-symbols-outlined">chat</span>
              </a>
              <a
                href="#parts"
                onClick={(e) => handleScroll(e, 'parts')}
                className="flex-1 sm:flex-none bg-white border-2 border-accent-dark text-accent-dark hover:bg-gray-50 font-display font-bold text-base uppercase py-4 px-8 rounded-lg hover:shadow-lg transition-all text-center flex items-center justify-center cursor-pointer"
              >
                Ver Peças
              </a>
            </div>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 min-h-[300px] md:min-h-auto relative bg-gray-100 border-l-0 md:border-l-4 border-black overflow-hidden">
          <img
            src="https://wsrv.nl/?url=https://lh3.googleusercontent.com/aida-public/AB6AXuCRY4Hxmrn8_rzvFYKe4B-42T50Rm56VoZpTjQeLz_2KFgcbfxbyk-kUZ6p9TW2wKsOh3mhQyKvgGurse7bxfO0ruBR4-dpL94Bo-Mmrwk9Hxei9yCmdKoYDMZmvKFMXoDJyDP8hU61xUEuZDstqLebuOAx5tMf6NZ8fKW47-J9gZJRHFWHWVc76XE9Iz_CjK9Mz0hzjsTtJ4wyAUyakfEMz_S5y9kRR3uEEc65X_QW6HteVwybWdmPiEvfyDg6lq6V8tdG-nG5Pzo&w=1000&output=webp"
            alt="Mecânico profissional da Pangaré Automotivo trabalhando em Tatuí SP"
            className="absolute inset-0 w-full h-full object-cover"
            fetchPriority="high"
            decoding="sync"
          />

          {/* Overlay Pattern */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

          {/* Badge */}
          <div className="absolute bottom-10 right-10 md:left-10 md:right-auto bg-white p-4 rounded-sm border-2 border-primary shadow-[6px_6px_0px_0px_rgba(239,35,60,1)] rotate-2 hidden md:block z-10">
            <p className="font-display font-black text-2xl leading-none flex items-center gap-2 text-accent-dark">
              Tatuí <span className="text-primary text-sm bg-black px-1 py-0.5 text-white">SP</span>
            </p>
            <p className="font-bold text-xs uppercase tracking-wide mt-1">Mais de meio século</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;