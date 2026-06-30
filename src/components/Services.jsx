import { Headphones, PlaneLanding, ReceiptText, Route } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';
import styles from '../App.module.css';

const iconMap = {
  Headphones,
  Plane: PlaneLanding,
  Route,
  Receipt: ReceiptText,
};

export default function Services() {
  const t = useTranslation();

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesGrid}>
        {t.services.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <article key={item.title} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                <Icon size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
