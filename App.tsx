import React, { useEffect, useMemo, useState } from 'react';
import { ASSETS } from './siteAssets';

type PageKey = 'inicio' | 'servicos' | 'pecas' | 'frotas' | 'contato';

const WA = '5515996485258';
const waHref = (message: string) => `https://wa.me/${WA}?text=${encodeURIComponent(message)}`;

const pages: { key: PageKey; label: string }[] = [
  { key: 'inicio', label: 'Início' },
  { key: 'servicos', label: 'Serviços' },
  { key: 'pecas', label: 'Peças' },
  { key: 'frotas', label: 'Frotas' },
  { key: 'contato', label: 'Contato' },
];

function WhatsIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.74.46 3.44 1.32 4.94L2 22l5.36-1.4a9.86 9.86 0 0 0 4.68 1.19h.01c5.43 0 9.84-4.4 9.84-9.84C21.89 6.4 17.48 2 12.04 2zm5.76 14.03c-.24.68-1.4 1.3-1.93 1.35-.53.05-1.02.24-3.48-.72-2.96-1.16-4.8-4.22-4.94-4.42-.14-.2-1.16-1.55-1.16-2.96 0-1.4.73-2.09.99-2.38.26-.29.56-.36.75-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.8 1.98.87 2.12.07.15.12.32.02.51-.1.2-.36.5-.55.72-.14.16-.3.24-.12.55.19.31.83 1.31 1.77 2.13 1.21 1.05 2.06 1.31 2.35 1.46.29.15.46.12.64-.07.19-.19.79-.87.99-1.17.19-.29.4-.24.66-.15.26.1 1.66.79 1.94.94.29.14.48.22.55.34.07.13.07.75-.17 1.44z" />
    </svg>
  );
}

function Button({ children, onClick, href, accent = false, whatsapp = false, className = '' }: {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  accent?: boolean;
  whatsapp?: boolean;
  className?: string;
}) {
  const cn = `pg-button ${accent ? 'pg-button--accent' : ''} ${whatsapp ? 'pg-button--whatsapp' : ''} ${className}`;
  if (href) {
    return <a className={cn} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>{whatsapp && <WhatsIcon />}{children}<span aria-hidden="true">→</span></a>;
  }
  return <button className={cn} onClick={onClick}>{children}<span aria-hidden="true">→</span></button>;
}

function Meta({ items, accentIndex = -1, light = false }: { items: string[]; accentIndex?: number; light?: boolean }) {
  return <div className={`meta-line ${light ? 'meta-line--light' : ''}`}>{items.map((item, i) => <React.Fragment key={item}><span className={i === accentIndex ? 'meta-accent' : ''}>{item}</span>{i < items.length - 1 && <b>•</b>}</React.Fragment>)}</div>;
}

function SectionMarker({ number, label, light = false }: { number: string; label: string; light?: boolean }) {
  return <div className={`section-marker ${light ? 'section-marker--light' : ''}`}><span /> <small>{number}</small><b>{label}</b></div>;
}

function Display({ children, accent, as: Tag = 'h2', light = false, size = 'lg' }: { children: string; accent?: string; as?: 'h1' | 'h2' | 'h3'; light?: boolean; size?: 'xl' | 'lg' | 'md' }) {
  const parts = useMemo(() => {
    if (!accent) return [children];
    const re = new RegExp(`(${accent.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig');
    return children.split(re);
  }, [children, accent]);
  return <Tag className={`display display--${size} ${light ? 'display--light' : ''}`}>{parts.map((part, i) => accent && part.toLowerCase() === accent.toLowerCase() ? <em key={i}>{part}</em> : <React.Fragment key={i}>{part}</React.Fragment>)}</Tag>;
}

function Photo({ src, alt, className = '', note }: { src: string; alt: string; className?: string; note?: string }) {
  return <figure className={`photo ${className}`}><img src={src} alt={alt} loading="lazy" />{note && <figcaption>{note}</figcaption>}</figure>;
}

function IndexRow({ number, title, summary, meta, onClick, active = false }: { number: string; title: string; summary?: string; meta?: string; onClick?: () => void; active?: boolean }) {
  return <button className={`index-row ${active ? 'index-row--active' : ''}`} onClick={onClick}><span className="index-row__number">{number}</span><span className="index-row__copy"><strong>{title}</strong>{summary && <small>{summary}</small>}</span><span className="index-row__meta">{active ? '→' : meta}</span></button>;
}

function Marquee() {
  const text = ['Pangaré Automotivo', 'Tatuí SP', 'Mais de meio século', 'Serviço linha leve · Peças toda linha'];
  return <div className="marquee"><div>{[...text, ...text, ...text].map((x, i) => <React.Fragment key={`${x}-${i}`}><span>{x}</span><b>/</b></React.Fragment>)}</div></div>;
}

function Navbar({ page, go }: { page: PageKey; go: (p: PageKey) => void }) {
  const [open, setOpen] = useState(false);
  return <header className="navbar">
    <button className="navbar__logo" onClick={() => go('inicio')} aria-label="Ir para o início"><img src={ASSETS.logoFull} alt="Pangaré Automotivo" /></button>
    <nav className={open ? 'navbar__nav navbar__nav--open' : 'navbar__nav'}>
      {pages.map((p, i) => <button key={p.key} className={page === p.key ? 'active' : ''} onClick={() => { go(p.key); setOpen(false); }}><span>{String(i + 1).padStart(2, '0')}</span>{p.label}</button>)}
    </nav>
    <Button href={waHref('Olá! Vim pelo site da Pangaré Automotivo.')} className="navbar__cta">WhatsApp</Button>
    <button className="navbar__menu" onClick={() => setOpen(v => !v)} aria-label="Abrir menu">{open ? '×' : '☰'}</button>
  </header>;
}

function Home({ go }: { go: (p: PageKey) => void }) {
  const services = [
    ['01', 'Manutenção preventiva', 'Plano por quilometragem, revisão completa e relatório do que foi feito.', 'Carros e utilitários'],
    ['02', 'Mecânica geral', 'Motor, suspensão, freios e embreagem. Diagnóstico antes do orçamento.', 'Linha leve'],
    ['03', 'Atendimento a frotas', 'Hora marcada, atendimento sob demanda e orçamento serviço por serviço.', 'Sem mensalidade'],
    ['04', 'Peças — linha leve', 'Cotamos com vários fornecedores e trazemos pelo melhor preço.', 'Sob consulta'],
    ['05', 'Peças — linha pesada', 'Caminhões e pesados: trabalhamos somente com peças.', 'Só peças'],
  ];
  return <>
    <section className="home-hero split split--hero">
      <div className="hero-copy">
        <Meta items={['Pangaré Automotivo', 'Tatuí · SP', 'Mais de 50 anos']} accentIndex={2} />
        <Display as="h1" size="xl" accent="50 anos">Mais de 50 anos de confiança</Display>
        <div className="hero-bottom">
          <p>Potência e confiança para ir mais longe. Mais de meio século atendendo motoristas e empresas — serviços na linha leve e peças para linha leve e pesada.</p>
          <div className="button-row"><Button href={waHref('Olá! Quero agendar um serviço na Pangaré.')} whatsapp>Agendar no WhatsApp</Button><Button onClick={() => go('servicos')}>Serviços</Button></div>
        </div>
      </div>
      <Photo src={ASSETS.motor} alt="Detalhe técnico de componente automotivo" className="hero-photo" />
    </section>

    <Marquee />

    <section className="stats-grid page-pad">
      <div><strong>50+</strong><small>anos</small><p>Mais de meio século de atuação em Tatuí.</p></div>
      <div><strong>LEVE</strong><small>serviços</small><p>Mecânica e manutenção para linha leve.</p></div>
      <div><strong>02</strong><small>linhas</small><p>Peças para linha leve e linha pesada.</p></div>
      <div><strong>SEG–SEX</strong><small>08–18h</small><p>Atendimento em horário comercial.</p></div>
    </section>

    <section className="services-index page-pad section-space">
      <aside className="sticky-copy">
        <SectionMarker number="01 / 04" label="Serviços" />
        <Display size="md">O que entra na oficina</Display>
        <p>Serviço na linha leve, feito aqui dentro. Para linha pesada, somente peças.</p>
        <Photo src={ASSETS.oficina} alt="Mecânico trabalhando em um motor" className="index-photo" />
        <button className="text-link" onClick={() => go('servicos')}>Ver todos os serviços →</button>
      </aside>
      <div>{services.map(s => <IndexRow key={s[0]} number={s[0]} title={s[1]} summary={s[2]} meta={s[3]} onClick={() => go('servicos')} />)}</div>
    </section>

    <section className="split split--ink fleet-feature">
      <Photo src={ASSETS.frotaFila} alt="Frota de veículos comerciais" className="fleet-photo" note="FIG. 01" />
      <div className="feature-copy">
        <SectionMarker number="02 / 04" label="Frotas" light />
        <Display size="lg" accent="parada" light>Frota parada custa mais que manutenção</Display>
        <div className="feature-bottom"><p>Sem mensalidade e sem contrato de fidelidade. Você chama quando precisa, combinamos o atendimento e orçamos serviço por serviço.</p><Button href={waHref('Olá! Tenho uma frota e quero falar sobre atendimento.')} accent>Falar sobre frota</Button></div>
      </div>
    </section>

    <section className="parts-feature page-pad section-space">
      <div>
        <SectionMarker number="03 / 04" label="Peças" />
        <Display size="lg" accent="qualquer">Conseguimos qualquer peça</Display>
        <div className="tag-row">{['Filtros','Freios','Suspensão','Embreagem','Elétrica','Motor','Linha leve','Linha pesada'].map(x => <span key={x}>{x}</span>)}</div>
        <p>Trabalhamos com o estoque de vários fornecedores e cotamos cada pedido para buscar o melhor preço. Mande o número original, a placa ou uma foto da peça pelo WhatsApp e respondemos com preço e prazo.</p>
        <div className="button-row"><Button href={waHref('Olá! Preciso de uma peça: ')} whatsapp>Cotar peça no WhatsApp</Button><Button onClick={() => go('pecas')}>Como funciona</Button></div>
      </div>
      <Photo src={ASSETS.pecasConjunto} alt="Conjunto de peças automotivas" className="parts-photo" note="FIG. 02" />
    </section>
  </>;
}

function ServicesPage({ go }: { go: (p: PageKey) => void }) {
  const rows = [
    { number:'01', title:'Manutenção preventiva', meta:'Linha leve', summary:'Plano por quilometragem com checklist.', details:['Troca de óleo e filtros','Freios: disco, pastilha e fluido','Suspensão e alinhamento','Revisão completa'] },
    { number:'02', title:'Mecânica geral', meta:'Sob diagnóstico', summary:'Motor, câmbio, embreagem e elétrica.', details:['Diagnóstico eletrônico','Motor e arrefecimento','Correias e bombas','Orçamento antes do reparo'] },
    { number:'03', title:'Atendimento a frotas', meta:'Sem mensalidade', summary:'Atendimento sob demanda e orçamento por serviço.', details:['Contato direto pelo WhatsApp','Atendimento combinado','Orçamento serviço por serviço','Histórico de intervenções por placa'] },
    { number:'04', title:'Peças — linha leve', meta:'Sob consulta', summary:'Cotação com vários fornecedores.', details:['Filtros, freios e suspensão','Elétrica e ignição','Consulta por número original ou placa'] },
    { number:'05', title:'Peças — linha pesada', meta:'Só peças', summary:'Caminhões e pesados: peças, não serviço.', details:['Freio, embreagem e motor diesel','Cotação de preço e prazo','Não realizamos mecânica na linha pesada'] },
  ];
  const [open, setOpen] = useState(0);
  return <>
    <section className="page-title page-pad"><div><SectionMarker number="Índice 01" label="Serviços" /><Display as="h1" size="lg" accent="oficina">Tudo que a oficina resolve</Display></div><Meta items={['05 frentes','Tatuí SP']} /></section>
    <section className="index-list page-pad">{rows.map((r,i) => <div key={r.number} className="expand-wrap"><IndexRow {...r} active={open === i} onClick={() => setOpen(open === i ? -1 : i)} />{open === i && <div className="expand-panel"><div /> <ul>{r.details.map(d => <li key={d}>{d}</li>)}</ul><div><span className="tag tag--accent">{r.meta}</span><Button href={waHref(`Olá! Quero falar sobre: ${r.title}`)} whatsapp>Falar no WhatsApp</Button></div></div>}</div>)}</section>
    <section className="split final-cta"><div className="page-pad"><Display size="md">Não sabe qual serviço pedir?</Display><p>Mande o sintoma pelo WhatsApp. A gente orienta o próximo passo e o orçamento é combinado antes do serviço.</p><div className="button-row"><Button href={waHref('Olá! Meu carro está com o seguinte sintoma: ')} whatsapp>Descrever sintoma</Button><Button onClick={() => go('contato')}>Ver contato</Button></div></div><Photo src={ASSETS.marca} alt="Silhueta da marca Pangaré" /></section>
  </>;
}

function PartsPage({ go }: { go: (p: PageKey) => void }) {
  const categories = ['Filtros','Freios','Suspensão','Embreagem','Motor','Elétrica e ignição','Arrefecimento','Transmissão','Freio a ar','Injeção diesel'];
  const steps = [
    ['01','Você manda o que precisa','Número original, placa, modelo ou uma foto da peça no WhatsApp.'],
    ['02','Cotamos com a rede','Consultamos vários fornecedores para encontrar disponibilidade e preço.'],
    ['03','Respondemos preço e prazo','Você recebe a cotação com preço e prazo informados pela equipe.'],
    ['04','Retirada em Tatuí','A peça fica separada no balcão e avisamos quando estiver disponível.'],
  ];
  return <>
    <section className="parts-hero page-pad"><div><SectionMarker number="Índice 02" label="Peças" /><Display as="h1" size="lg" accent="qualquer">Conseguimos qualquer peça</Display><p>Linha leve e linha pesada. Cada pedido é cotado com vários fornecedores, por isso preço e disponibilidade são informados após a consulta.</p><div className="button-row"><Button href={waHref('Olá! Preciso de uma peça: ')} whatsapp>Cotar peça no WhatsApp</Button><Meta items={['Resposta no horário comercial']} /></div></div><Photo src={ASSETS.pecasFlatlay} alt="Peças automotivas organizadas para cotação" note="FIG. 01" /></section>
    <section className="quote-categories page-pad"><div><Display size="md">O que a gente cota</Display><p>A lista é só uma referência. Se não estiver nela, pergunte igual.</p></div><div className="tag-row">{categories.map(c => <span key={c}>{c}</span>)}<span className="tag-accent">E o que você precisar</span></div></section>
    <section className="process page-pad section-space"><div><SectionMarker number="Processo" label="Como funciona" /><Display size="md">Do pedido ao balcão</Display><Photo src={ASSETS.balcaoPecas} alt="Peça sendo conferida no balcão" className="process-photo" /></div><div className="process-steps">{steps.map(([n,t,d]) => <div key={n}><strong>{n}</strong><section><h3>{t}</h3><p>{d}</p></section></div>)}<div className="button-row process-actions"><Button href={waHref('Olá! Preciso de uma peça: ')} whatsapp>Pedir cotação</Button><Button onClick={() => go('contato')}>Endereço e horário</Button></div></div></section>
  </>;
}

function FleetsPage() {
  return <>
    <section className="fleet-hero split split--ink"><div className="feature-copy"><SectionMarker number="Índice 03" label="Frotas" light /><Display as="h1" size="lg" accent="pare" light>Sua frota não pare por surpresa</Display><p>Sem mensalidade e sem contrato de fidelidade. Você chama quando precisa, combinamos o atendimento e orçamos serviço por serviço.</p><Button href={waHref('Olá! Tenho uma frota e quero falar sobre atendimento.')} whatsapp>Falar sobre minha frota</Button></div><Photo src={ASSETS.checklistFrota} alt="Checklist de manutenção de frota" className="fleet-hero-photo" /></section>
    <section className="fleet-values page-pad"><div><strong>SEM</strong><small>mensalidade</small><p>Você paga pelo serviço que autorizar.</p></div><div><strong>01</strong><small>canal direto</small><p>Atendimento centralizado pelo WhatsApp.</p></div><div><strong>POR PLACA</strong><small>histórico</small><p>Intervenções organizadas por veículo.</p></div></section>
    <section className="fleet-process page-pad section-space"><div><Display size="md">Como funciona</Display><Meta items={['Chamada','Atendimento','Registro']} accentIndex={0}/><p>Sem plano fechado: cada veículo entra pelo WhatsApp, com atendimento combinado e orçamento aprovado antes do serviço.</p><Photo src={ASSETS.frotaPatio} alt="Veículos comerciais de uma frota" className="process-photo" /></div><div className="process-steps">{[['01','Você chama','Pelo WhatsApp: placa, veículo e o que está acontecendo.'],['02','Combinamos o atendimento','Organizamos a entrada do veículo de acordo com a necessidade.'],['03','Orçamento por serviço','Diagnóstico primeiro, valor aprovado depois. Nada de mensalidade.'],['04','Registro por placa','Cada intervenção fica organizada por veículo.']].map(([n,t,d]) => <div key={n}><strong>{n}</strong><section><h3>{t}</h3><p>{d}</p></section></div>)}<Button href={waHref('Olá! Quero atendimento para a frota da minha empresa.')} whatsapp>Solicitar atendimento</Button></div></section>
  </>;
}

function ContactPage() {
  return <>
    <section className="contact-grid"><div className="contact-copy page-pad"><SectionMarker number="Índice 04" label="Contato" /><Display as="h1" size="lg" accent="hora">Prazo dito na hora</Display><p>Agendamento, orçamento e cotação de peça: tudo pelo WhatsApp da loja, direto com quem atende.</p><div className="contact-meta"><div><Meta items={['Endereço']} /><p>Rua 11 de Agosto, 2993<br/>Tatuí — SP</p></div><div><Meta items={['Horário']} /><p>Seg–Sex 08:00–18:00<br/>Sábado e domingo fechado</p></div><Meta items={['Mais de 50 anos']} accentIndex={0}/></div></div><div className="contact-actions page-pad"><span className="tag tag--accent">Atendimento por WhatsApp</span><Display size="md">Escolha o assunto</Display>{[['Agendar serviço','Olá! Quero agendar um serviço na Pangaré.'],['Cotar uma peça','Olá! Preciso de uma peça: '],['Atendimento a frota','Olá! Tenho uma frota e quero falar sobre atendimento.'],['Outro assunto','Olá! Vim pelo site da Pangaré Automotivo.']].map(([label,msg]) => <Button key={label} href={waHref(msg)} whatsapp>{label}</Button>)}<div className="contact-phones"><span>Ou ligue</span><a href="tel:+5515996485258">(15) 99648-5258</a><a href="tel:+551530224063">(15) 3022-4063</a><small>luiz@pangareautomotivo.com.br</small></div></div></section>
    <section className="contact-bottom split split--ink"><Photo src={ASSETS.fachada} alt="Letreiro Pangaré Automotivo em fachada escura" note="FIG. 01" /><div className="feature-copy"><Meta items={['Tatuí · SP','Mais de meio século']} accentIndex={1} light/><Display size="md" light>A gente atende no WhatsApp e na porta da oficina</Display><Button href={waHref('Olá! Vim pelo site da Pangaré Automotivo.')} whatsapp>Chamar agora</Button></div></section>
  </>;
}

function Footer({ go }: { go: (p: PageKey) => void }) {
  return <><Marquee /><footer className="footer page-pad">
    <div className="footer-grid">
      <div>
        <button className="footer-brand" onClick={() => go('inicio')} aria-label="Ir para o início"><img src={ASSETS.logoWhite} alt="Pangaré Automotivo"/></button>
        <a className="footer-link" href="https://www.google.com/maps/search/?api=1&query=Rua+11+de+Agosto+2993+Tatu%C3%AD+SP" target="_blank" rel="noopener noreferrer">Rua 11 de Agosto, 2993 — Tatuí/SP</a>
        <a className="footer-link" href="tel:+5515996485258">(15) 99648-5258</a>
        <a className="footer-link" href="tel:+551530224063">(15) 3022-4063</a>
        <a className="footer-link" href="mailto:luiz@pangareautomotivo.com.br">luiz@pangareautomotivo.com.br</a>
      </div>
      <div>
        <b>Serviços</b>
        <button className="footer-link" onClick={() => go('servicos')}>Manutenção preventiva</button>
        <button className="footer-link" onClick={() => go('servicos')}>Mecânica geral</button>
        <button className="footer-link" onClick={() => go('frotas')}>Frotas</button>
      </div>
      <div>
        <b>Peças</b>
        <button className="footer-link" onClick={() => go('pecas')}>Linha leve</button>
        <button className="footer-link" onClick={() => go('pecas')}>Linha pesada</button>
        <a className="footer-link" href={waHref('Olá! Preciso de uma peça: ')} target="_blank" rel="noopener noreferrer">Cotação por WhatsApp</a>
      </div>
      <div>
        <b>Pangaré</b>
        <button className="footer-link" onClick={() => go('inicio')}>Mais de 50 anos</button>
        <a className="footer-link" href="https://www.instagram.com/pangareauto/" target="_blank" rel="noopener noreferrer">@pangareauto</a>
        <button className="footer-link" onClick={() => go('contato')}>Tatuí · SP</button>
      </div>
    </div>
    <button className="footer-word" onClick={() => go('inicio')} aria-label="Voltar ao início">Pangaré</button>
    <div className="footer-meta"><span>Seg–Sex 08:00–18:00 · Sáb e Dom fechado</span><span>© {new Date().getFullYear()} Pangaré Automotivo</span></div>
  </footer></>;
}

function App() {
  const initial = (window.location.hash.replace('#/','').replace('#','') as PageKey) || 'inicio';
  const [page, setPage] = useState<PageKey>(pages.some(p => p.key === initial) ? initial : 'inicio');
  const go = (next: PageKey) => {
    setPage(next);
    window.location.hash = `/${next}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const onHash = () => {
      const key = window.location.hash.replace('#/','').replace('#','') as PageKey;
      if (pages.some(p => p.key === key)) setPage(key);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return <div className="site-shell"><Navbar page={page} go={go}/><main>{page === 'inicio' && <Home go={go}/>} {page === 'servicos' && <ServicesPage go={go}/>} {page === 'pecas' && <PartsPage go={go}/>} {page === 'frotas' && <FleetsPage/>} {page === 'contato' && <ContactPage/>}</main><a className="whatsapp-float" href={waHref('Olá! Vim pelo site da Pangaré Automotivo.')} target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp"><WhatsIcon size={26}/><span>WhatsApp</span></a><Footer go={go}/></div>;
}

export default App;