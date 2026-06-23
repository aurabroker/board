import { Nav, Hero, ShieldBand, Footer } from './sections/Shell';
import { RiskSection, CoverageSection, RolesSection, ProcessSection, FaqSection } from './sections/Sections';
import { ContactSection, StickyCTA } from './sections/Contact';

function App() {
  const goContact = () => {
    const el = document.getElementById('kontakt');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 10, behavior: 'smooth' });
  };

  return (
    <div style={{ background: 'var(--navy-800)', minHeight: '100vh' }}>
      <Nav onContact={goContact} />
      <Hero onContact={goContact} />
      <ShieldBand onContact={goContact} />
      <RiskSection />
      <CoverageSection />
      <RolesSection />
      <ProcessSection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <StickyCTA onContact={goContact} />
    </div>
  );
}

export default App;
