import styles from './NotFound.module.scss'

const NotFound = () => {
  return(
    <div className={styles.root}>
      <div className={styles.root__header}>
        <h2>404</h2>
        <h6>NOT FOUND</h6>
      </div>
      <div className={styles.root__img}>
        <img src='/images/404.png'></img>
      </div>
      
    </div>
  )
};

export default NotFound;