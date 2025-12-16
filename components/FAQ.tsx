import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Onde encontrar um bom mecânico em Tatuí?",
      answer: "A Pangaré Automotivo está localizada na Rua 11 de Agosto, 2993, e atua há 50 anos oferecendo serviços de mecânica geral, manutenção preventiva e peças originais em Tatuí e região."
    },
    {
      question: "Vocês realizam manutenção de frotas em Tatuí?",
      answer: "Sim! Somos especialistas em atendimento corporativo e manutenção de frotas para empresas como Localiza, Movida e Unidas. Oferecemos agilidade e redução de custos operacionais."
    },
    {
      question: "Quais peças automotivas vocês vendem?",
      answer: "Temos um estoque completo de peças originais para carros (linha leve) e caminhões (linha pesada), incluindo motores, suspensão, freios, filtros, correias e pneus de diversas marcas."
    },
    {
      question: "A oficina atende caminhões e veículos pesados?",
      answer: "Sim, somos referência em mecânica diesel e manutenção de caminhões em Tatuí. Nossa equipe é capacitada para diagnósticos complexos em linha pesada."
    }
  ];

  return (
    <section className="sr-only">
      <div className="max-w-6xl mx-auto">
        <h3>Dúvidas Frequentes sobre Mecânica em Tatuí</h3>
        <div>
          {faqs.map((faq, index) => (
            <div key={index}>
              <h4>{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;