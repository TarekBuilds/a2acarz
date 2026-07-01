import { Facebook, Instagram, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import BrandLogo from './BrandLogo';
import styles from '../App.module.css';

export default function Footer() {
  const t = useTranslation();

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div>
            <BrandLogo dark />
            <p>{t.footerDescription}</p>
          </div>

          <div>
            <h3>{t.footerLinksTitle}</h3>
            <nav className={styles.footerLinks} aria-label="Footer">
              <a href="#services">{t.navServices}</a>
              <a href="#vehicules">{t.navOurVehicles}</a>
              <a href="#contact">{t.footerLegal}</a>
            </nav>
          </div>

          <div>
            <h3>{t.footerContact}</h3>
            <ul className={styles.contactList}>
              <li>
                <Phone size={17} />
                +212 668-190570
              </li>
              <li>
                <Mail size={17} />
                <a href="mailto:contact@a2acarz.com">contact@a2acarz.com</a>
              </li>
              <li>
                <MapPin size={17} />
                Casablanca, Maroc
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>
            &copy; 2026 A2A CARZ. {t.footerRights}
          </p>
          <div className={styles.socialLinks}>
            <a href="#accueil" aria-label="Facebook">
              <Facebook size={17} />
            </a>
            <a href="#accueil" aria-label="Instagram">
              <Instagram size={17} />
            </a>
            <a href="https://wa.me/212668190570" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <MessageCircle size={17} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
