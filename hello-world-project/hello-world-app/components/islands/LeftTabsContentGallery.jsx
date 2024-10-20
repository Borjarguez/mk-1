import { useState } from 'react';

import Menu from '../partials/Menu';
import CentralPanel from '../partials/CentralPanel';

import styles from '../../styles/leftTabContentGallery.module.css';

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

      <CentralPanel
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