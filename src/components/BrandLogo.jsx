import styles from '../App.module.css';

export default function BrandLogo({ dark = false }) {
  return (
    <a href="#accueil" className={`${styles.brandLogo} ${dark ? styles.brandLogoDark : ''}`} aria-label="a2a carz home">
      <img src="/logo.png" alt="a2a carz" />
    </a>
  );
}
