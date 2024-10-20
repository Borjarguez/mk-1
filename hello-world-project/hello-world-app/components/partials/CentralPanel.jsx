import styles from '../../styles/leftTabContentGallery.module.css';
import arrow_icon from '../../assets/arrow_icon.svg';

export default function CentralPanel({ module_items }) {
  return (
    <div className={styles.content}>
      <p className={styles.labelText}>{module_items.field_group.labelText}</p>
      <h2 className={styles.contentTitle}>{module_items.field_group.contentTitle}</h2>
      <p className={styles.paragraphText}>{module_items.field_group.paragraphText}</p>
      <img src={module_items.field_group.image.src} alt={''} className={styles.image} />
      <div className={styles.navigation}>
        <button className="left" disabled={module_items.isFirst} onClick={module_items.onPrevious}>
          <img className={styles.icon_left} src={arrow_icon} alt="Anterior" />
        </button>

        <button onClick={module_items.onNext} disabled={module_items.isLast}>
          <img src={arrow_icon} alt="Siguiente" />
        </button>
      </div>
    </div>
  );
}