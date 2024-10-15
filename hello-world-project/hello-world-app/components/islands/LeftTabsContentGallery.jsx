import { useState } from 'react';

import styles from '../../styles/leftTabContentGallery.module.css';

function Menu({ onSelect, selected }) {
  const menuItems = [
      { id: 1, label: '1. Creating and managing appointments' },
      { id: 2, label: '2. Adding blocks' },
      { id: 3, label: '3. More items here' },
      { id: 4, label: '4. And here' },
      { id: 5, label: '5. And here' },
      { id: 6, label: '6. And here' },
      { id: 7, label: '7. And here' },
      { id: 8, label: '8. And here' },
      { id: 9, label: '9. And here' },
  ];

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          onClick={() => onSelect(index)}
          className={`${styles.menuItem} ${selected === index ? styles.selected : ''}`}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

function ContentDisplay({ content }) {
  return (
    <div className={styles.content}>
      <h2>{content.label}</h2>
      <p>{content.title}</p>
      <p>{content.text}</p>
      <img src={content.image} alt={content.title} className={styles.image} />
      <div className={styles.navigation}>
        <button onClick={content.onPrevious}>&lt;</button>
        <button onClick={content.onNext}>&gt;</button>
      </div>
    </div>
  );
}

export default function LeftTabsContentGallery() {
  const [selected, setSelected] = useState(0);

  const content = [
    {
      label: 'Creating and managing appointments',
      title: 'Appointments Title',
      text: '1Contenido para appointments...',
      image: 'ruta/a/imagen1.jpg',
    },
    {
      label: 'Adding blocks',
      title: 'Blocks Title',
      text: '2Contenido para blocks...',
      image: 'ruta/a/imagen2.jpg',
    },
    {
      label: 'More items here',
      title: 'More items here Title',
      text: '3Contenido para more items...',
      image: 'ruta/a/imagen3.jpg',
    },
    {
      label: 'And here',
      title: 'And here Title',
      text: '4Contenido para and here...',
      image: 'ruta/a/imagen4.jpg',
    },
    {
      label: 'And here',
      title: 'And here Title',
      text: '5Contenido para and here...',
      image: 'ruta/a/imagen5.jpg',
    },
    {
      label: 'And here',
      title: 'And here Title',
      text: '6Contenido para and here...',
      image: 'ruta/a/imagen6.jpg',
    },
    {
      label: 'And here',
      title: 'And here Title',
      text: '7Contenido para and here...',
      image: 'ruta/a/imagen7.jpg',
    },
    {
      label: 'And here',
      title: 'And here Title',
      text: '8Contenido para and here...',
      image: 'ruta/a/imagen8.jpg',
    },
    {
      label: 'And here',
      title: 'And here Title',
      text: '9Contenido para and here...',
      image: 'ruta/a/imagen9.jpg',
    },
  ];

  const handlePrevious = () => {
    setSelected((prevSelected) => (prevSelected > 0 ? prevSelected - 1 : content.length - 1));
  };

  const handleNext = () => {
    setSelected((prevSelected) => (prevSelected < content.length - 1 ? prevSelected + 1 : 0));
  };

  return (
    <div className={styles.container}>
      <Menu onSelect={setSelected} selected={selected} />

      <ContentDisplay
        content={{
          ...content[selected],
          onPrevious: handlePrevious,
          onNext: handleNext,
        }}
      />
    </div>
  );
}