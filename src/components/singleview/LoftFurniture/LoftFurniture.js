import styles from './LoftFurniture.module.scss';

const LoftFurniture = () => {
  return (
    <div className={styles.root}>
      <div className={styles.root__page}>
        <div className={styles.root__page_card}>
          <div className={styles.root__page_cardHeader}>
            <h1>Meble Loft</h1>
          </div>
          <div className={styles.root__page_cardBody}>
            <p>Example text</p>
            <p>Example text</p>
            <p>Example text</p>
            <p>Example text</p>
            <p>Example text</p>
            <p>Example text</p>
            
          </div>
        </div>
      </div>
    </div>
  )
};

export default LoftFurniture