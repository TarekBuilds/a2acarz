import { useTranslation } from '../context/LanguageContext';
import styles from '../App.module.css';

export default function MapContact() {
  const t = useTranslation();

  return (
    <section id="agences" className={styles.mapSection}>
      <div className={styles.container}>
        <div className={styles.mapCard}>
          <div className={styles.mapFrame}>
            <iframe
              title="Agadir map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.2737020035584!2d-7.496618700000001!3d33.6241446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cbd105d49049%3A0x155555959d9355f4!2sA2A%20CARZ!5e0!3m2!1sen!2sma!4v1782743300442!5m2!1sen!2sma"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className={styles.mapCopy}>
            <h2>{t.mapHeader}</h2>
            <p>{t.mapDescription}</p>
            <a href="#hero-booking" className={styles.mapButton}>
              {t.mapButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
