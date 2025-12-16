import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b-4 border-accent-dark bg-background-light">
      <div className="px-4 md:px-10 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src="https://i.ibb.co/q3cRCJ7c/bannertransp.png" 
            alt="Pangaré Automotivo Logo" 
            className="h-20 md:h-28 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
          <div className="flex items-center gap-6 font-display font-bold text-sm uppercase tracking-wide text-accent-dark">
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-primary transition-colors cursor-pointer">Nossa História</a>
            <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-primary transition-colors cursor-pointer">Serviços</a>
            <a href="#parts" onClick={(e) => handleScroll(e, 'parts')} className="hover:text-primary transition-colors cursor-pointer">Peças</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-primary transition-colors cursor-pointer">Contato</a>
          </div>
          <a href="https://wa.me/5515996485258?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20equipe." target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-dark text-white font-display font-black text-sm uppercase tracking-wider py-3 px-6 rounded-md border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all active:scale-95 inline-block text-center cursor-pointer">
            (15) 99648-5258
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            <span className="material-symbols-outlined text-4xl cursor-pointer text-accent-dark">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background-light border-b-4 border-accent-dark shadow-lg py-6 px-4 flex flex-col gap-6">
          <a href="#about" className="font-display font-black text-xl uppercase" onClick={(e) => handleScroll(e, 'about')}>Nossa História</a>
          <a href="#services" className="font-display font-black text-xl uppercase" onClick={(e) => handleScroll(e, 'services')}>Serviços</a>
          <a href="#parts" className="font-display font-black text-xl uppercase" onClick={(e) => handleScroll(e, 'parts')}>Peças</a>
          <a href="#contact" className="font-display font-black text-xl uppercase" onClick={(e) => handleScroll(e, 'contact')}>Contato</a>
          <a href="https://wa.me/5515996485258?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20a%20equipe." target="_blank" rel="noopener noreferrer" className="w-full bg-primary text-white text-center font-display font-black text-lg uppercase py-4 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Ligar Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;