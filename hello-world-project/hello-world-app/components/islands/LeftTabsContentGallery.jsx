import { useState } from 'react';

import styles from '../../styles/leftTabContentGallery.module.css';
import arrow_icon from '../../assets/arrow_icon.svg';

function Menu({ module_items, onSelect, selected }) {
  return (
    <div className={styles.sidebar}>
      {module_items.map((item, index) => (
        <div
          key={index}
          onClick={() => onSelect(index)}
          className={`${styles.menuItem} ${selected === index ? styles.selected : ''}`}
        >
          <div className={styles.item}>
            <img src={arrow_icon} alt={""} className={styles.itemArrow} />
            {item.tabTitle}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContentDisplay({ module_items }) {
  return (
    <div className={styles.content}>
      <p className={styles.labelText}>{module_items.field_group.labelText}</p>
      <h2 className={styles.contentTitle}>{module_items.field_group.contentTitle}</h2>
      <p>{module_items.field_group.paragraphText}</p>
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

export default function LeftTabsContentGallery({ module_items }) {
  const [selected, setSelected] = useState(0);

  const handlePrevious = () => {
    setSelected((prevSelected) => (prevSelected > 0 ? prevSelected - 1 : module_items.length - 1));
  };

  const handleNext = () => {
    setSelected((prevSelected) => (prevSelected < module_items.length - 1 ? prevSelected + 1 : 0));
  };

  return (
    <div className={styles.container}>
      <Menu module_items={module_items} onSelect={setSelected} selected={selected} />

      <ContentDisplay
        module_items={{
          ...module_items[selected],
          onPrevious: handlePrevious,
          onNext: handleNext,
          isFirst: selected === 0,
          isLast: selected === module_items.length - 1,
        }}
      />
    </div>
  );
}