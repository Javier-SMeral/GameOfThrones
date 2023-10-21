import axios from "axios";
import React, { useEffect, useState } from "react";
import ViewAgeCharacter from "./ViewAgeCharacter";
<<<<<<< HEAD
// import OrderAge from "../../components/OrderAge";
=======
>>>>>>> 1df835e685a7f43b9924ff979630938cba74c78f

function ChronologyPage() {
  const [infoApi, setInfoApi] = useState([])
  const [characters, setCharacters] = useState([]);
  const [isOrder, setIsOrder] = useState(false)

  useEffect(() => {
    const getCharacter = async () => {
      const res = await axios("http://localhost:3000/characters");

      setInfoApi(res.data);
      setCharacters(res.data)
    };

    getCharacter();
  }, []);

  const orderAges = () => {

    setIsOrder(!isOrder)
    const copyCharacter = [...infoApi]
    if (isOrder) {
      const orderCharacter = copyCharacter.sort((a, b) => {
        return a.age - b.age
      })

      return setCharacters(orderCharacter)
    }

    const orderCharacter = copyCharacter.sort((a, b) => {
      return b.age - a.age
    })
    return setCharacters(orderCharacter)
  }

  return (
    <div>
      <button onClick={orderAges}>ordenar</button>
      {characters?.map((item) => {
        return (
          <div id="c2__chronology">
            <ViewAgeCharacter
              age={item?.age}
              name={item?.name}
              img={item?.image}
            />
          </div>
        );
      })}
    </div>
  );
}

export default ChronologyPage;
