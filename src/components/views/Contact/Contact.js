import styles  from './Contact.module.scss';
import {FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const location = window.location.href.split('/')[3];


  if(location === 'de') {
    return(
      <div className={styles.root}>
      <div className={styles.root__image}>
        <img src="/images/stairs-better.jpg"/>
        <div className={styles.root__text}>
          <div className={styles.root__text_description}>
          <h1>BERÜHRUNG</h1>
            <h2>EIN KLEID:</h2>
            <h4> 93-640 Łódź
              <br/>Ul. Czternastu Straconych 34L
              <br/>POLAND
              <br/>Steuer-ID: 7712747093
              <br/>Telefonnummer: +48 791 806 594
              <br/><a href="https://www.facebook.com/profile.php?id=100085400524786" target='_blank'><FaFacebook/></a>
              </h4>
          </div>
        </div>
      </div>
    </div>
    )
  } else if(location === 'pl') {
    return(
      <div className={styles.root}>
      <div className={styles.root__image}>
        <img src="/images/stairs-better.jpg"/>
        <div className={styles.root__text}>
          <div className={styles.root__text_description}>
          <h1>KONTAKT</h1>
            <h2>ADRES:</h2>
            <h4> 93-640 Łódź
              <br/>Ul. Czternastu Straconych 34L
              <br/>POLSKA
              <br/>NIP: 7712747093
              <br/>TELEFON: +48 791 806 594
              <br/><a href="https://www.facebook.com/profile.php?id=100085400524786" target='_blank'><FaFacebook/></a>
              </h4>
          </div>
        </div>
      </div>
    </div>
    )
  } else if (location === 'gb') {
    return(
      <div className={styles.root}>
      <div className={styles.root__image}>
        <img src="/images/stairs-better.jpg"/>
        <div className={styles.root__text}>
          <div className={styles.root__text_description}>
          <h1>CONTACT</h1>
            <h2>ADRESS:</h2>
            <h4> 93-640 Łódź
              <br/>Ul. Czternastu Straconych 34L
              <br/>POLAND
              <br/>TIN: 7712747093
              <br/>TELEFON: +48 791 806 594
              <br/><a href="https://www.facebook.com/profile.php?id=100085400524786" target='_blank'><FaFacebook/></a>
              </h4>
          </div>
        </div>
      </div>
    </div>
    )
  }

};

export default Contact;