import styles from './Offert.module.scss';
import { getOffertMenu } from '../../../redux/offertRedux';
import { useSelector } from 'react-redux';
import shortid from 'shortid';
import { useNavigate } from 'react-router-dom';

const Offert = () => {
  const location = window.location.href.split('/')[3];
  const data = useSelector(getOffertMenu);
  const navigate = useNavigate();

  const pl = data.map(e => e.pl)[0];
  const gb = data.map(e => e.gb)[0];
  const de = data.map(e => e.de)[0];

  const clickHandler = (e) => {
    const target = e.target.getAttribute('value');
    const data = location + target;
    console.log(data)
    
    switch(data) {
      case 'pl0':
        navigate('/pl/offert/shelfstairs')
        break
      case 'pl1':
        navigate('/pl/offert/loftfurniture')
        break
      case 'pl2': 
        navigate('/pl/offert/balustrades')
        break
      case 'pl3':
        navigate('/pl/offert/weldingservices')
        break
      case 'de0':
        navigate('/de/offert/shelfstairs')
        break
      case 'de1':
        navigate('/de/offert/loftfurniture')
        break
      case 'de2': 
        navigate('/de/offert/balustrades')
        break
      case 'de3':
        navigate('/de/offert/weldingservices')
        break
      case 'gb0':
        navigate('/gb/offert/shelfstairs')
        break
      case 'gb1':
        navigate('/gb/offert/loftfurniture')
        break
      case 'gb2': 
        navigate('/gb/offert/balustrades')
        break
      case 'gb3':
        navigate('/gb/offert/weldingservices')
        break
      default:
        return data;
    }
  }



  if(location === 'pl') {
    return (
      <div className={styles.root}>
        <div className={styles.root__image}>
          <img src="/images/stairs-better.jpg"/>
          <div className={styles.root__card}>
            <div><h1>OFERTA</h1></div>
            {pl.map(p => <div onClick={e => clickHandler(e)} key={shortid()} className={styles.root__card_single}>
              <h3 value={pl.indexOf(p, 0)}>{p.toUpperCase()}</h3>
            </div>)}
          </div>
        </div>
      </div>
    );
  } else if (location === 'de') {
    return (
      <div className={styles.root}>
        <div className={styles.root__image}>
          <img src="/images/stairs-better.jpg"/>
          <div className={styles.root__card}>
            <div><h1>ANGEBOTEN</h1></div>
            {de.map(p => <div onClick={e => clickHandler(e)} key={shortid()} className={styles.root__card_single}>
              <h3 value={de.indexOf(p, 0)}>{p.toUpperCase()}</h3>
            </div>)}
          </div>
        </div>
      </div>
    );
  } else if (location === 'gb') {
    return (
      <div className={styles.root}>
        <div className={styles.root__image}>
          <img src="/images/stairs-better.jpg"/>
          <div className={styles.root__card}>
            <div><h1>OFFERT</h1></div>
            {gb.map(p => <div onClick={e => clickHandler(e)} key={shortid()} className={styles.root__card_single}>
              <h3 value={gb.indexOf(p, 0)}>{p.toUpperCase()}</h3>
            </div>)}
          </div>
        </div>
      </div>
    );
  }
  
};

export default Offert;