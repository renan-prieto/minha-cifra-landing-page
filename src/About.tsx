import './App.css';

const team = [
  {
    name: 'Kauê Cardoso dos Santos',
    role: 'Liderança do projeto',
    initials: 'KC',
    tasks: ['Liderança do projeto', 'Desenvolvimento front-end', 'Estrutura de dados'],
    linkedin: 'https://www.linkedin.com/in/kau%C3%AA-cardoso-684633437',
    whatsapp: 'https://wa.me/5519999516829?text=Ol%C3%A1%21%20Vi%20o%20site%20do%20Minha%20Cifra%20e%20queria%20conversar.',
  },
  {
    name: 'Vitória Franco de Oliveira',
    role: 'Documentação e organização',
    initials: 'VF',
    tasks: ['Documentação do projeto', 'Gerenciamento e organização das etapas', 'Designer de marketing'],
    linkedin: 'https://www.linkedin.com/in/vit%C3%B3ria-undefined-49b741426',
    whatsapp: 'https://wa.me/5519998836973?text=Ol%C3%A1%21%20Vi%20o%20site%20do%20Minha%20Cifra%20e%20queria%20conversar.',
  },
  {
    name: 'Renan Prieto da Silva',
    role: 'Desenvolvimento e regras de negócio',
    initials: 'RP',
    tasks: ['Desenvolvimento de backend e frontend', 'Aplicação e gerenciamento das regras de negócio'],
    linkedin: 'https://www.linkedin.com/in/renan-prieto-543a48398/',
    whatsapp: 'https://wa.me/5519983190323?text=Ol%C3%A1%21%20Vi%20o%20site%20do%20Minha%20Cifra%20e%20queria%20conversar.',
  },
  {
    name: 'Tobias Augusto Rodrigues da Conceição',
    role: 'Diário de bordo e apoio',
    initials: 'TC',
    tasks: ['Diário de bordo', 'Apoio nas demais funções'],
    linkedin: 'https://www.linkedin.com/in/tobias-concei%C3%A7%C3%A3o-3b14aa437',
    whatsapp: 'https://wa.me/5519996871541?text=Ol%C3%A1%21%20Vi%20o%20site%20do%20Minha%20Cifra%20e%20queria%20conversar.',
  },
];

function Header({ about = false }: { about?: boolean }) {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Minha Cifra, início">
        <span className="brand-mark" aria-hidden="true">mc</span>
        <span>minha cifra</span>
      </a>
      <nav aria-label="Navegação principal">
        <a className={!about ? 'nav-active' : ''} href="/">Início</a>
        <a className={about ? 'nav-active' : ''} href="/sobre-nos">Sobre nós</a>
      </nav>
      <a className="header-cta" href={about ? '/#produto' : '#produto'}>Conheça o projeto <span aria-hidden="true">↗</span></a>
    </header>
  );
}

function AboutPage() {
  return (
    <div className="about-page">
      <Header about />
      <main>
        <section className="about-hero">
          <p className="eyebrow"><span /> QUEM FAZ ACONTECER</p>
          <h1>Um projeto construído <em>em conjunto.</em></h1>
          <div className="about-hero-bottom"><p>O Minha Cifra é um projeto de TCC que aproxima imposto de renda e gestão financeira. Conheça as pessoas e as frentes de trabalho que dão vida a essa ideia.</p><span className="about-count">04 <small>INTEGRANTES</small></span></div>
          <span className="about-doodle" aria-hidden="true">✳</span>
        </section>
        <section className="team-section">
          <div className="team-heading"><div><p className="section-kicker">02 — NOSSA EQUIPE</p><h2>Quatro pessoas.<br /><em>Uma cifra de ideias.</em></h2></div><p className="team-aside">Cada pessoa contribui com um olhar e uma habilidade para transformar o projeto em realidade.</p></div>
          <div className="team-grid">
            {team.map((member, index) => (
              <article className={`team-card team-card-${index + 1}`} key={member.name}>
                <div className="team-card-top"><span className="member-number">0{index + 1} / 04</span><span className="member-initials" aria-hidden="true">{member.initials}</span></div>
                <div className="member-info"><p className="member-role">{member.role}</p><h3>{member.name}</h3><ul>{member.tasks.map((task) => <li key={task}>{task}</li>)}</ul></div>
                <div className="member-links"><a href={member.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a><a href={member.whatsapp} target="_blank" rel="noreferrer">WhatsApp <span aria-hidden="true">↗</span></a></div>
              </article>
            ))}
          </div>
        </section>
        <section className="about-note"><span className="note-symbol" aria-hidden="true">✳</span><p>Minha Cifra<br /><em>Imposto de renda e gestão financeira no mesmo lugar.</em></p><a className="underlined-link" href="/">Voltar ao início <span aria-hidden="true">↗</span></a></section>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return <footer className="site-footer"><a className="brand" href="/"><span className="brand-mark" aria-hidden="true">mc</span><span>minha cifra</span></a><span>Projeto de TCC · 2026</span><a href="/sobre-nos">Sobre nós <span aria-hidden="true">↗</span></a></footer>;
}

export default AboutPage;