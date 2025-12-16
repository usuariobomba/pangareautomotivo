import React from 'react';
import { PartCategory } from '../types';

const categories: PartCategory[] = [
  {
    tag: 'Linha Pesada',
    title: 'Peças de Caminhão',
    subtitle: 'Pesados',
    description: 'Distribuidora de peças para caminhões: freios a ar, transmissão, embreagem, motores diesel e filtros.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC464MlfIljRhgjWoHMrJzpVdn0q6dPnar9S8CI8HCjqkKLPMeqfR8VOiF3gqkmg323JWk8s8emI8qX26a-iVOWLDD3pY9lSnEMy1vVvaF_7qyW8iKkSYhvDLJF-p9b4qDseiB8t2OlkLJwAgSWE4HFpVHK9AQiWmkm8GkNJReEZ7MdLzoXgKbLUAt8v__4A_V_n7Ba0LDT6lY7l7csaEbj0QXi_klIIlRWDtTWggMxTyBvF4WJ8J2tz75D_v-8BFriUoBnSJ04lsc'
  },
  {
    tag: 'Linha Leve',
    title: 'Peças Automotivas',
    subtitle: 'Leves',
    description: 'Auto peças em Tatuí para carros nacionais e importados: Injeção, ignição, correias, freios e suspensão.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA6PtH_6cA9URyG_IwJb03Uho3tS2pNDrpNFFjZ281vfb9Le7-T6yGnAOZnFcvIUV9-LrE8oKRendMd0OFjjOM6uBzNo8GdT3F_rAoHJhyQndP-r-rb7rSq5NiOlNq9sN3EpYO8Luo4AX1XC_WAYnLxTdLdE-RVWCtPIdIyDuiYJ339FP_SLSyLo_CyuFiC734V5qBJLh8wQMU1qsBdCd6e4lQ5dr255Z_Ids0PZ8y5jIVKefUxLoENfUh6YZXNjZJWkvgBlMAqCM'
  },
  {
    tag: 'Rodagem',
    title: 'Loja de Pneus',
    subtitle: 'Rodagem',
    description: 'Pneus em Tatuí para linha leve, pesada e agrícola. Trabalhamos com as melhores marcas do mercado (Michelin, Pirelli, Bridgestone).',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDv12sdFkD1zk_ehq2aMIZ3SRGR0CvSad2E1-jhwoZBneCznbIt8j3pUAomRGzXLyBkycRysHS8TwoyoUVFo43L6o_JdQG_9j4zOr3pluVXSPUibuOefYNXXzt6vea4V8sWHZsodnBoYl3oi7H9jMK2eRVxmcgEN9Kkudp3yJg9fvJL8xljPDN1s2Fu9MUisQ6Nu4stW6VYXPbfkLaCdJiJESuUrHyGTurY05pxrJhYvu-JOAD1-BV_WbgQzdx_CAYHPaqodoYVM4Q'
  }
];

const PartsCatalog: React.FC = () => {
  return (
    <section id="parts" className="py-20 px-4 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Autopeças Tatuí</span>
          <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight mb-4 border-l-[12px] border-primary pl-4 text-accent-dark">
            Catálogo de Peças <br/>e Componentes
          </h3>
          <p className="text-xl text-gray-700 font-medium max-w-3xl leading-relaxed">
            Sua melhor opção de <span className="text-primary font-bold">Autopeças em Tatuí</span>. Oferecemos TODOS os tipos de peças para manutenção de carros e caminhões. Trabalhamos apenas com as marcas originais para garantir sua segurança.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((item, index) => {
            return (
              <a 
                href="https://wa.me/5515996485258?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20estou%20procurando%20uma%20pe%C3%A7a." 
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] border-2 border-transparent hover:border-primary transition-all shadow-lg hover:shadow-2xl"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  title={`Peças automotivas: ${item.title}`}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className={`bg-primary text-white text-xs font-bold px-3 py-1 inline-block rounded mb-3 uppercase tracking-wider`}>
                    {item.tag}
                  </div>
                  <h2 className="text-white font-display text-3xl font-bold uppercase leading-none mb-3 drop-shadow-md">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-sm font-medium leading-snug mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Solicitar Cotação</span>
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
            <a href="https://wa.me/5515996485258?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20consultar%20o%20estoque%20de%20pe%C3%A7as." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-accent-dark text-white px-8 py-4 rounded-lg font-bold uppercase hover:bg-primary transition-colors border-2 border-transparent hover:border-black shadow-lg">
                <span>Consultar Estoque no WhatsApp</span>
                <span className="material-symbols-outlined text-green-400">chat</span>
            </a>
            <p className="mt-4 text-sm text-gray-500 font-medium">Atendemos Tatuí, Itapetininga, Sorocaba e região.</p>
        </div>
      </div>
    </section>
  );
};

export default PartsCatalog;