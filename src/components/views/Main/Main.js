import styles from './Main.module.scss';


const Main = () => {
  return (
      <div className={styles.root}>
        <div className={styles.root__image}>
          <img src="/images/stairs-better.jpg"/>
          <div className={styles.root__image_logo}>
            <img src="/images/logo.jpg"/>
          </div>
        </div>
      </div>
  );
}

export default Main;
