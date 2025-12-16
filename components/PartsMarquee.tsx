import React from 'react';

const PartsMarquee: React.FC = () => {
  const items = [
    '• PANGARÉ AUTOMOTIVO',
    '• 50 ANOS DE TRADIÇÃO',
    '• PEÇAS ORIGINAIS',
    '• ATENDIMENTO FROTAS',
    '• QUALIDADE GARANTIDA',
    '• TATUÍ - SP'
  ];

  // Duplicate the array enough times to fill width + scroll buffer
  const repeatedItems = [...items, ...items, ...items, ...items, ...items];

  return (
    <div className="bg-primary py-6 overflow-hidden border-y-4 border-black relative z-20 shadow-inner">
      <div className="flex whitespace-nowrap gap-12 animate-marquee font-display font-black text-2xl md:text-3xl uppercase text-white tracking-widest w-max">
        {repeatedItems.map((item, index) => (
          <span key={index} className="flex items-center gap-12">
            {item}
            <span className="size-3 bg-black transform rotate-45 block"></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default PartsMarquee;