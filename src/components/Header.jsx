import { useState } from 'react';
import { ChevronDown, Globe2, Menu, X } from 'lucide-react';
import { useTranslation, useLanguage } from '../context/LanguageContext';
import BrandLogo from './BrandLogo';
import styles from '../App.module.css';

export default function Header() {
  const t = useTranslation();
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <BrandLogo />

        <nav className={styles.navLinks} aria-label="Primary">
          <a href="#vehicules">{t.navOurVehicles}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#hero-booking" className={styles.headerBookButton}>
            {t.bookNow}
          </a>
          <label className={styles.languageSwitch} aria-label={t.languageSelectLabel}>
            <Globe2 size={16} />
            <select value={lang} onChange={(event) => setLang(event.target.value)} aria-label={t.languageSelectLabel}>
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="ar">AR</option>
            </select>
            <ChevronDown size={14} />
          </label>
        </nav>

        <button
          type="button"
          className={styles.mobileMenuButton}
          onClick={() => setMenuOpen((current) => !current)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <a href="#vehicules" onClick={closeMenu}>
          {t.navOurVehicles}
        </a>
        <a href="#services" onClick={closeMenu}>
          {t.navServices}
        </a>
        <a href="#hero-booking" className={styles.mobileBookLink} onClick={closeMenu}>
          {t.navBookMobile}
        </a>
        <label className={styles.mobileLanguageSwitch} aria-label={t.languageSelectLabel}>
          <Globe2 size={18} />
          <span>{t.languageSelectLabel}</span>
          <select value={lang} onChange={(event) => setLang(event.target.value)}>
            <option value="fr">FR</option>
            <option value="en">EN</option>
            <option value="ar">AR</option>
          </select>
        </label>
      </div>
    </header>
  );
}
