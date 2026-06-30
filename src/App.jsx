import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Reviews from './components/Reviews';
import MapContact from './components/MapContact';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import styles from './App.module.css';

function AppContent() {
  const { lang } = useLanguage();

  return (
    <div className={styles.app} lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Header />
      <main>
        <Hero />
        <Fleet />
        <Services />
        <Reviews />
        <MapContact />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
