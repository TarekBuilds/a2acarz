import useFadeIn from '../hooks/useFadeIn';
import styles from '../App.module.css';

export default function SectionHeader({ title, description, inverted = false }) {
  const { ref, visible } = useFadeIn({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`${styles.sectionHeader} ${inverted ? styles.sectionHeaderInverted : ''} ${
        visible ? styles.visible : ''
      }`}
    >
      <h2>{title}</h2>
      <span className={styles.titleRule} />
      {description && <p>{description}</p>}
    </div>
  );
}
