import axios from "axios";
import React, { useEffect, useState } from "react";
import ViewAgeCharacter from "./ViewAgeCharacter";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { withTranslation } from 'react-i18next';
import MenuFoot from "../../components/Menu/MenuFoot";
import MenuHead from "../../components/Menu/MenuHead";

function ChronologyPage() {
  const [infoApi, setInfoApi] = useState([])
  const [characters, setCharacters] = useState([]);
  const [isOrder, setIsOrder] = useState(false)
  const [textoBoton, setTextoBoton] = useState('O');
  const [arrowState, setArrowState] = useState(true);


  const cambiarTexto = (edad) => {
    setIsOrder(!isOrder);
    setTextoBoton(`${edad}`);
  };

  const orderAges = () => {
    
    toggleArrowState();
    setIsOrder(!isOrder);
    const copyCharacter = [...characters];
    if (!isOrder) {
      copyCharacter.sort((a, b) => a.age - b.age);
      cambiarTexto(copyCharacter[1]?.age);
    } else {
      copyCharacter.sort((a, b) => b.age - a.age);
      cambiarTexto(copyCharacter[0]?.age);
    }
     

    setCharacters(copyCharacter);

  };

  const toggleArrowState = () => {
    setArrowState(!arrowState);

   };


  const getCharacter = async () => {
    const res = await axios("http://localhost:3000/characters");
    const ParesImpares = res.data.map((item, index) => ({
      ...item,
      isEven: index % 2 === 0,
    }));;
   
    console.log(ParesImpares);
    
    setInfoApi(res.data);
    setCharacters(res.data);
    cambiarTexto(res.data='O');
    setCharacters(ParesImpares);


    
  };




  useEffect(() => {
    getCharacter();
    cambiarTexto('');
  }, []);






  return (
    <div className='c__chronology'>
      <MenuHead />
      <button onClick={orderAges}>{textoBoton}</button>

      <SimpleBar style={{ maxHeight: 700, width: '90%' }} autoHide={false}>
        <label id='flecha' onClick={toggleArrowState}>
  <img
    id='flec'
    src={arrowState ? '../../../assets/flechaArriba.png' : '../../../assets/flechaAbajo.png'}
    alt=''
  />
</label>
        <section className='escalonados character-container'>
        
          {characters?.map((item, index) => (
            <div
          key={item.id}
      className={`character-box ${item.isEven ? 'even' : 'character-box'}`}
        >

              <ViewAgeCharacter
                age={item?.age}
                name={item?.name}
                img={item?.image}/>
            </div>

          ))}
        </section>
      </SimpleBar>
      <MenuFoot />
    </div>
  );
}


export default withTranslation()(ChronologyPage);
