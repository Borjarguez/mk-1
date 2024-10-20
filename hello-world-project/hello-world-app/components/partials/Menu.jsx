import styles from '../../styles/leftTabContentGallery.module.css';

export default function Menu({ module_items, onSelect, selected }) {
  return (
    <div className={styles.sidebar}>
      {module_items.map((item, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={`${styles.menuItem} ${selected === index ? styles.selected : ''}`}
        >
          <div className={styles.item}>
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" className={styles.itemArrow}
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1.07709 15.2559C0.751649 14.9305 0.751649 14.4028 1.07709 14.0774L7.1545 8L1.07708 1.92259C0.751648 1.59715 0.751648 1.06952 1.07708 0.744078C1.40252 0.418641 1.93016 0.418641 2.2556 0.744078L8.92226 7.41074C9.2477 7.73618 9.2477 8.26382 8.92226 8.58926L2.2556 15.2559C1.93016 15.5814 1.40252 15.5814 1.07709 15.2559Z"/>
            </svg>

            {item.tabTitle}
          </div>
        </div>
      ))}
    </div>
  );
}