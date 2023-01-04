import { getLangData } from "../../../redux/langDataRedux";
import { useSelector } from "react-redux";
import { getLangMenu } from "../../../redux/langMenuRedux";
import { useNavigate } from "react-router-dom";


import Flag from 'react-world-flags'
import styles from './Navigation.module.scss';
import shortid from "shortid";

const Navigation = ({locate}) => {
  const currentLocation = locate.split('/')[3];
  const data = useSelector(getLangData);
  const menu = useSelector(getLangMenu);
  const navigate = useNavigate();

  const gb = menu.map(gb => gb.gb);
  const de = menu.map(de => de.de);
  const pl = menu.map(pl => pl.pl)

  const clickHandler = (e) => {
    e.preventDefault();
    const lang = e.target.getAttribute('value')
    navigate('/' + lang)
  };

  const hrefHandler = (e) => {
    e.preventDefault();
    const target = e.target.innerHTML.toLowerCase();

    switch(target) {
      case 'strona główna':
        navigate('/pl/')
        break
      case 'oferta':
        navigate('/pl/offert')
        break
      case 'kontakt':
        navigate('/pl/contact')
        break
      case 'home':
        navigate('/gb/')
        break
      case 'offert':
        navigate('/gb/offert')
        break
      case 'contact':
        navigate('/gb/contact')
        break
      case 'startseite':
        navigate('/de/')
        break
      case 'angeboten': 
        navigate('/de/offert')
        break
      case 'berührung':
        navigate('/de/contact')
        break
      default:
        return target
    }
    
  }


  if(currentLocation === 'pl' || currentLocation === '') {
    return (
      <div className={styles.root}>
        <div className={styles.root__menu}>
          <ul>
            {pl[0].map(g => <li key={shortid()}><a onClick={e => hrefHandler(e)}>{g.toUpperCase()}</a></li>)}
          </ul>
        </div>
        <div className={styles.root__list}>
          <ul>
          {data.map(d => <li key={d.id}><a href={'/' + d.lang} onClick={(e) => clickHandler(e)}><Flag value={d.lang} code={d.lang.toUpperCase()} height="16" width="24"/></a></li>)}
          </ul>
        </div>
      </div>
    )
  } else if (currentLocation === 'gb') {
    return (
      <div className={styles.root}>
        <div className={styles.root__menu}>
          <ul>
            {gb[0].map(g => <li key={shortid()}><a onClick={e => hrefHandler(e)}>{g.toUpperCase()}</a></li>)}
          </ul>
        </div>
        <div className={styles.root__list}>
          <ul>
          {data.map(d => <li key={d.id}><a href={'/' + d.lang} onClick={(e) => clickHandler(e)}><Flag value={d.lang} code={d.lang.toUpperCase()} height="16" width="24"/></a></li>)}
          </ul>
        </div>
      </div>
    )
  } else if (currentLocation === 'de') {
    return (
      <div className={styles.root}>
        <div className={styles.root__menu}>
          <ul>
            {de[0].map(g => <li key={shortid()}><a onClick={e => hrefHandler(e)}>{g.toUpperCase()}</a></li>)}
          </ul>
        </div>
        <div className={styles.root__list}>
          <ul>
          {data.map(d => <li key={d.id} value={d.lang}><a href={'/' + d.lang} value={d.lang} onClick={(e) => clickHandler(e)}><Flag value={d.lang} code={d.lang.toUpperCase()} height="16" width="24"/></a></li>)}
          </ul>
        </div>
      </div>
    )
  }
  
};

export default Navigation;