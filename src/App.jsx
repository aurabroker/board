import { Nav, Hero, ShieldBand, Footer } from './sections/Shell';
import { RiskSection, CoverageSection, RolesSection, PremiumExamples, ProcessSection, FaqSection } from './sections/Sections';
import { ContactSection, StickyCTA } from './sections/Contact';
import { Reveal } from './components/Reveal';

function App() {
  const goContact = () => {
    const el = document.getElementById('kontakt');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: 'smooth' });
  };

  return (
    <div className="layout" style={{ background: 'var(--navy-800)', minHeight: '100vh' }}>
      <Nav onContact={goContact} />
      <div className="layout-main">
        <Hero onContact={goContact} />
        <ShieldBand onContact={goContact} />
        <Reveal><RiskSection /></Reveal>
        <Reveal><CoverageSection /></Reveal>
        <Reveal><RolesSection /></Reveal>
        <Reveal><PremiumExamples /></Reveal>
        <Reveal><ProcessSection /></Reveal>
        <Reveal><FaqSection /></Reveal>
        <Reveal><ContactSection /></Reveal>
        <Footer />
      </div>
      <StickyCTA />
    </div>
  );
}

export default App;
