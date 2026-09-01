import React from 'react';
import { ServiceItem } from '../types';

const services: ServiceItem[] = [
  {
    icon: 'car_repair',
    title: 'Manutenção Preventiva',
    description: 'Troca de óleo, filtros, correias e revisão completa. Aumente a vida útil do seu carro evitando problemas mecânicos graves.',
    items: ['Troca de Óleo', 'Revisão Completa', 'Alinhamento']
  },
  {
    icon: 'engineering',
    title: 'Mecânica Geral em Tatuí',
    description: 'Diagnóstico computadorizado e reparos de motores, injeção eletrônica, freios e suspensão para carros nacionais e importados.',
    items: ['Retífica de Motores', 'Suspensão', 'Injeção Eletrônica']
  },
  {
    icon: 'groups',
    title: 'Atendimento a Frotas',
    description: 'Sem mensalidade e sem contrato: você chama, a gente encaixa com hora marcada e orça serviço por serviço, com registro por placa.',
    items: ['Sem Mensalidade', 'Hora Marcada', 'Histórico por Placa']
  },
  {
    icon: 'settings_suggest',
    title: 'Peças — Leve e Pesada',
    description: 'Conseguimos qualquer peça. Cotamos com vários fornecedores para chegar no menor preço e informamos preço e prazo reais pelo WhatsApp.',
    items: ['Linha Leve', 'Linha Pesada', 'Cotação por WhatsApp']
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-20 bg-background-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Nossos Serviços Automotivos</span>
            <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-accent-dark leading-none">
              Soluções de <span className="text-primary">Mecânica</span><br/>
              Perto de Você
            </h3>
            <p className="text-gray-600 font-medium max-w-2xl text-lg border-l-4 border-gray-300 pl-4">
              Serviço de mecânica na linha leve, feito aqui dentro, com rapidez e transparência. Para linha pesada trabalhamos apenas com peças.
            </p>
          </div>
          <a
            href="https://wa.me/5515996485258?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20falar%20com%20um%20mec%C3%A2nico."
            target="_blank"
            rel="noopener noreferrer"
            className="font-display font-bold uppercase text-sm bg-black text-white px-6 py-3 rounded hover:bg-primary transition-colors flex items-center gap-2"
          >
            <span>Falar com Mecânico</span>
            <span className="material-symbols-outlined text-sm">chat</span>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const isRed = index === 1 || index === 3;

            return (
              <div
                key={index}
                className="group bg-white border-b-8 border-gray-200 hover:border-primary p-8 rounded-t-2xl hover:shadow-xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Number Watermark */}
                <div className="absolute -top-4 -right-4 text-9xl font-black text-gray-100 group-hover:text-gray-50 transition-colors pointer-events-none z-0">
                  {index + 1}
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`size-14 rounded-lg ${isRed ? 'bg-primary text-white' : 'bg-black text-white'} flex items-center justify-center mb-6 shadow-md`}>
                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                  </div>

                  <h2 className="font-display text-lg md:text-xl font-bold uppercase mb-3 text-accent-dark pr-8 leading-tight">{service.title}</h2>
                  <p className="text-sm text-gray-600 mb-6 font-medium leading-relaxed min-h-[80px]">{service.description}</p>

                  <ul className="text-xs font-bold uppercase tracking-wide space-y-2 border-t pt-4 border-gray-100">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-accent-dark">
                        <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;