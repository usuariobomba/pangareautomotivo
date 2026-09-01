import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Onde encontrar um bom mecânico em Tatuí?",
      answer: "A Pangaré Automotivo está localizada na Rua 11 de Agosto, 2993, e atua há mais de 50 anos oferecendo mecânica geral, manutenção preventiva e peças em Tatuí e região."
    },
    {
      question: "Vocês atendem frotas de empresas?",
      answer: "Sim. O atendimento a frotas é feito sem mensalidade e sem contrato: a empresa chama pelo WhatsApp, encaixamos com hora marcada e orçamos serviço por serviço, com registro de cada intervenção por placa."
    },
    {
      question: "Quais peças automotivas vocês vendem?",
      answer: "Conseguimos qualquer peça de linha leve e linha pesada. Não mantemos catálogo nem tabela de preço no site porque cada pedido é cotado com vários fornecedores para chegar no menor preço — envie o número original, a placa ou uma foto da peça pelo WhatsApp e respondemos com preço e prazo reais."
    },
    {
      question: "A oficina faz serviço em caminhões e veículos pesados?",
      answer: "Não. Na linha pesada trabalhamos apenas com o fornecimento de peças. O serviço de oficina é feito na linha leve: carros, utilitários e vans."
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