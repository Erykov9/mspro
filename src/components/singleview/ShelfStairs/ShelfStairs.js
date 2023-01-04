import styles from './ShelfStairs.module.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {SlArrowDown,SlArrowUp} from 'react-icons/sl';


const ShelfStairs = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(false);
  const [activePrice, setActivePrice] = useState(false);

  const activeTextHover = () => {
    switch(active) {
      case true:
        setActive(false)
        break
      case false:
        setActive(true);
        break
    }
  };

  const activePriceHover  = () => {
    switch(activePrice) {
      case true: 
        setActivePrice(false)
        break
      case false: 
        setActivePrice(true)
        break
    }
  }

  return (
    <div className={styles.root}>
      <div className={styles.root__image}>
        {/* <img src="/images/stairs-better.jpg"/> */}
        <div className={styles.root__card}>
          <h1>SCHODY PÓŁKOWE</h1>
          <p className={styles.active}>Schody półkowe to stopnie mocowane do jednej ze ścian, niewymagające stawiania dodatkowych instalacji i stelaży, zatem są jednym z ciekawszych rozwiązań i rozstrzygnięciem dylematów najbardziej wymagających klientów. Mogą spodobać się przede wszystkim właścicielom domów w stylu nowoczesnym.</p>
          <div className={styles.root__gallery}>
            <a href='http://localhost:3000/images/ShelfStairs/schody1.jpg'><img src="/images/ShelfStairs/schody1.jpg" alt='stairs'></img></a>
            <a href='http://localhost:3000/images/ShelfStairs/schody2.jpg'><img src="/images/ShelfStairs/schody2.jpg" alt='stairs'></img></a>
            <a href='http://localhost:3000/images/ShelfStairs/schody3.jpg'><img src="/images/ShelfStairs/schody3.jpg" alt='stairs'></img></a>
          </div>
          <h3 className={styles.root__card_text} onClick={activeTextHover}>INSTRUKCJA SAMODZIELNEGO MONTAŻU<br/>{active ? <SlArrowUp/> : <SlArrowDown/>}</h3>
          <div className={active ? styles.active : styles.notActive}>
            <p>
            Oferujemy stopnie stalowe do wykonania konstrukcji
            schodów półkowych. Stopnie te montuje się pojedynczo za
            pomocą prętów gwintowanych (kl. 8.8). Konstrukcję taką
            najlepiej zamontować przed tynkami/ płytami gk.

            Zamówienie odbywa się według schematu:

            Przysyłasz rzuty pięter/ szkic/ zdjęcia z wymiarami klatki
            schodowej.

            Wyliczamy ilość stopni, podajemy ich parametry
            (wysokość x głębokość x szerokość).

            Akceptacja oferty -&gt; zaliczka -&gt; czas produkcji około 10
            dni roboczych.

            Wysyłka razem z instrukcją montażu pod wskazany
            adres.

            Ściana do której można zamocować stopnie musi mieć
            grubość co najmniej:

            Materiały typu pustak ceramiczny, silikat, gazobeton-
            24cm - w tym przypadku konieczne jest przewiercenie
            ściany na wylot i zastosowanie po drugiej stronie
            podkładek o dużej powierzchni które zmniejszą nacisk
            jednostkowy na ścianę. Posiadamy w ofercie również
            płyty montażowe z otworami pokrywającymi się z tymi w
            stopniach.

            Żelbet- 18cm- w tym przypadku możemy zamocować
            stopnień przy pomocy kotwy chemicznej. Głębokość
            zakotwienia wg zaleceń producenta kotwy.

            Bloczek fundamentowy- 24cm- jest to najbardziej
            optymalne rozwiązanie. W materiale tym można również
            jak w przypadku żelbetu zamocować stopnie przy pomocy
            kotwy chemicznej. Ma on jednak tą zaletę, że jest
            łatwiejszy do wiercenia- nie ma ryzyka natrafienia na
            pręty zbrojeniowe. W takiej ścianie można również
            wykonać bruzdy pod stopnie aby zakrycie elementów
            konstrukcji było łatwiejsze.</p>
          </div>
          <h3 className={styles.root__card_text} onClick={activePriceHover}>CENNIK USŁUG<br/>{activePrice ? <SlArrowUp/> : <SlArrowDown/>}</h3>
          <div className={activePrice ? styles.active : styles.notActive}>
            <div className={styles.root__singlePrice}>
              <img src='/images/ShelfStairs/schody3.jpg'></img>
              <h4>Stopień prosty - 400zl</h4>
            </div>
            <div className={styles.root__singlePrice}>
              <img src='/images/ShelfStairs/schody3.jpg'></img>
              <h4>Stopień zabiegowy - 520zl</h4>
            </div>
            <div className={styles.root__singlePrice}>
              <img src='/images/ShelfStairs/schody3.jpg'></img>
              <h4>Podest/spocznik - 800-1000zl</h4>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  )
};

export default ShelfStairs;