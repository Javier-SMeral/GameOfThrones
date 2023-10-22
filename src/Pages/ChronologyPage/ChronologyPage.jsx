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


  const cambiarTexto = (edad) => {
    setIsOrder(!isOrder);
    setTextoBoton(`${edad}`);
  };
  const orderAges = () => {

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

  // const orderCharacter = copyCharacter.sort((a,b) => {
  //   return b.age - a.age
  // })
  // return setCharacters(orderCharacter)


  const getCharacter = async () => {
    const res = await axios("http://localhost:3000/characters");
    console.log(res.data[0].age);
    setInfoApi(res.data);
    setCharacters(res.data);
    cambiarTexto(res.data[0]?.age);


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
        <label id='flecha'>
          <img id='flec' src='../../../assets/Arrow-down.svg.png' alt=''></img>
        </label>
        <section className='escalonados'>
          {characters?.map((item) => (
            <div id='c2__chronology' key={item.id}>
              <ViewAgeCharacter
                age={item?.age}
                name={item?.name}
                img={item?.image} />
            </div>

          ))}
        </section>
      </SimpleBar>
      <MenuFoot />
    </div>
  );
}


export default withTranslation()(ChronologyPage);
