import './App.css';
import AboutPage from './About';

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

function LandingPage() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span /> FINANÇAS COM MAIS CLAREZA</p>
            <h1 id="hero-title">Seu dinheiro tem uma história. <em>Entenda cada capítulo.</em></h1>
            <p className="hero-description">Imposto de renda e gestão financeira no mesmo lugar. O Minha Cifra nasceu para deixar a organização do seu dinheiro mais simples e próxima da sua rotina.</p>
            <div className="hero-actions">
              <a className="button button-yellow" href="#produto">Descubra o Minha Cifra <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="/sobre-nos">Conheça a equipe <span aria-hidden="true">→</span></a>
            </div>
            <div className="hero-note"><span className="note-symbol" aria-hidden="true">✳</span><span>Um projeto feito para aproximar<br />organização financeira do dia a dia.</span></div>
          </div>
          <div className="hero-art" role="img" aria-label="Ilustração de um resumo financeiro com receitas, despesas e saldo">
            <div className="art-topline"><span>VISÃO DO MÊS</span><span className="art-period">OUT 2026⌄</span></div>
            <div className="balance-label">Seu saldo organizado</div>
            <div className="balance-value">R$ 4.280<span>,50</span></div>
            <div className="balance-change"><span>↗ 12,8%</span> em relação ao mês passado</div>
            <div className="chart-area">
              <div className="chart-y-labels"><span>5 mil</span><span>3 mil</span><span>1 mil</span><span>0</span></div>
              <div className="chart">
                <div className="chart-grid"><i /><i /><i /><i /></div>
                <svg viewBox="0 0 420 150" preserveAspectRatio="none" aria-hidden="true">
                  <path className="chart-fill" d="M0 118 C32 110 36 94 68 103 S112 112 140 76 S185 89 211 70 S258 79 280 48 S325 66 350 42 S393 38 420 14 V150 H0Z" />
                  <path className="chart-line" d="M0 118 C32 110 36 94 68 103 S112 112 140 76 S185 89 211 70 S258 79 280 48 S325 66 350 42 S393 38 420 14" />
                  <circle cx="350" cy="42" r="5" />
                </svg>
                <div className="chart-x-labels"><span>01</span><span>07</span><span>14</span><span>21</span><span>31</span></div>
              </div>
            </div>
            <div className="art-legend"><span><i className="legend-income" /> Receitas</span><span><i className="legend-expense" /> Despesas</span></div>
            <div className="floating-note"><span>✓</span><div><strong>Imposto de renda</strong><small>Organizado com mais clareza</small></div></div>
            <span className="art-stamp" aria-hidden="true">MC<br />✳</span>
          </div>
          <span className="hero-index" aria-hidden="true">01 / 03</span>
        </section>

        <section className="intro-section" id="produto">
          <div className="section-kicker">01 — O PROJETO</div>
          <div className="intro-content">
            <h2>Mais clareza para cuidar do que é <em>seu.</em></h2>
            <div className="intro-copy"><p>O Minha Cifra reúne gestão financeira e imposto de renda em uma experiência pensada para trazer mais organização às suas decisões.</p><a className="underlined-link" href="/sobre-nos">Saiba quem está por trás <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <section className="features-section" aria-label="Frentes do projeto">
          <article className="feature-item"><span className="feature-number">01</span><div className="feature-icon icon-ledger" aria-hidden="true"><span /><span /><span /></div><h3>Gestão financeira</h3><p>Uma visão mais organizada das suas finanças para acompanhar o que entra e o que sai.</p><span className="feature-arrow" aria-hidden="true">↗</span></article>
          <article className="feature-item feature-highlight"><span className="feature-number">02</span><div className="feature-icon icon-tax" aria-hidden="true">%</div><h3>Imposto de renda</h3><p>Informações e organização do imposto de renda reunidas em um só projeto.</p><span className="feature-arrow" aria-hidden="true">↗</span></article>
          <article className="feature-item"><span className="feature-number">03</span><div className="feature-icon icon-focus" aria-hidden="true"><span>↗</span></div><h3>Decisões com contexto</h3><p>Mais clareza para entender sua vida financeira e planejar os próximos passos.</p><span className="feature-arrow" aria-hidden="true">↗</span></article>
        </section>

        <section className="manifesto-section">
          <p className="eyebrow"><span /> NOSSA IDEIA</p>
          <blockquote>“Cuidar do dinheiro fica mais leve quando você entende o que está acontecendo.”</blockquote>
          <a href="/sobre-nos" className="manifesto-link">Um projeto de TCC, feito em equipe <span aria-hidden="true">↗</span></a>
          <span className="manifesto-mark" aria-hidden="true">mc</span>
        </section>

        <section className="closing-section">
          <div><p className="eyebrow">MINHA CIFRA · PROJETO DE TCC</p><h2>Conheça as pessoas<br />por trás do projeto.</h2></div>
          <a className="button button-dark" href="/sobre-nos">Sobre nós <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return <footer className="site-footer"><a className="brand" href="/"><span className="brand-mark" aria-hidden="true">mc</span><span>minha cifra</span></a><span>Projeto de TCC · 2026</span><a href="/sobre-nos">Sobre nós <span aria-hidden="true">↗</span></a></footer>;
}

function App() {
  return window.location.pathname.replace(/\/$/, '') === '/sobre-nos' ? <AboutPage /> : <LandingPage />;
}

export default App;
