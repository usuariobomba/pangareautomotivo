import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* History Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
          <div className="flex-1">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossa História</span>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 leading-none text-accent-dark">
              Mais de <span className="text-primary">50 anos</span> de confiança e excelência.
            </h3>
            <div className="w-20 h-2 bg-black mb-8"></div>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-medium">
              <p>
                Fundada em <strong>Tatuí - SP</strong>, a <span className="text-primary font-bold">Pangaré Automotivo</span> nasceu com o propósito de entregar qualidade, segurança e durabilidade a cada veículo que passa por nossas mãos.
              </p>
              <p>
                Com mais de cinco décadas de experiência, crescemos junto com o mercado automotivo brasileiro, tornando-nos uma referência regional em manutenção, peças e soluções.
              </p>
              <p>
                Hoje, somos reconhecidos pela combinação perfeita entre tradição e inovação, atendendo desde clientes individuais até grandes empresas de frotas e locadoras.
              </p>
            </div>
            
            <div className="mt-10 flex gap-4">
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-primary">
                <p className="font-display font-black text-2xl">Tradição</p>
                <p className="text-sm">Que se renova todos os dias</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-accent-dark">
                <p className="font-display font-black text-2xl">Tecnologia</p>
                <p className="text-sm">Diagnóstico preciso</p>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-5/12 aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden relative border-2 border-black shadow-[12px_12px_0px_0px_#EF233C]">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo9Qp9PbbDON-VA3_C41sBppTVmBBWc_mgmMYIg1eLP3efkhZXga5-9rnpnfitpShJ1ajMB6C-GPS_WHwnOGVXTyqXLQOpyqz0qg5PyS1-VaLW94E2UwKHHyW0Enfn-e3jBdMW06yv5jEQSEb39Re-NLh1dGBZTtGkTZH4FG7lNdLV10Dj_y1MZoOI3rOAV-7Tkq1j-yRlKi7vXfoAZuANiPrW4yyudx3WHaJncpj0muNCk0CjKmZDiRPOpRcVVKkombat2iyDczI" 
              alt="Fachada da oficina Pangaré Automotivo em Tatuí"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-8 left-8 text-white z-10">
              <p className="font-bold text-lg mb-1">Pangaré Automotivo</p>
              <p className="text-sm text-gray-300">Rua 11 de Agosto, 2993 - Tatuí/SP</p>
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-200">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h4 className="font-display text-3xl font-black uppercase mb-4">Quem confia na nossa experiência</h4>
            <p className="text-gray-600">
              Atendemos desde clientes individuais exigentes até grandes empresas do setor automotivo e de locação, sempre com o mesmo padrão de qualidade inquestionável.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {['Localiza', 'Movida', 'Casas São José', 'Unidas', 'Grantel', 'Caetano Mat.'].map((partner, i) => (
              <div key={i} className="font-display font-bold text-xl uppercase text-gray-400 hover:text-primary transition-colors cursor-default text-center">
                {partner}
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-2">verified_user</span>
              <h5 className="font-bold uppercase">Controle Rigoroso</h5>
              <p className="text-sm text-gray-500">Inspeção detalhada e padrões certificados.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-2">update</span>
              <h5 className="font-bold uppercase">Atualização Constante</h5>
              <p className="text-sm text-gray-500">Equipamentos de última geração.</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-4xl text-primary mb-2">handshake</span>
              <h5 className="font-bold uppercase">Parceria Sólida</h5>
              <p className="text-sm text-gray-500">Foco no sucesso da sua operação.</p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;