import axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";
import PokeCard from "../src/components/pokeCard/PokeCard";

const App = () => {
  const [pokeImg, setPokeImg] = useState({});
  const [pokeName, setPokeName] = useState("");

  useEffect(() => {
    // async function called to fetch then setState
    const getData = async () => {
      let res = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
      console.log(res.data);
      setPokeImg({
        frontImg: res?.data?.sprites?.front_default,
        backImg: res?.data?.sprites?.back_default,
      });
      setPokeName(res?.data?.name);
      // Parses Response if needed - possibly optional
    };

    // Now call the method to be run after you create it.
    getData();
  }, []);

  return (
    <>
      <PokeCard
        frontImg={pokeImg.frontImg}
        backImg={pokeImg.backImg}
        name={pokeName}
      />
      <PokeCard
        frontImg={pokeImg.frontImg}
        backImg={pokeImg.backImg}
        name={pokeName}
      />
      <PokeCard
        frontImg={pokeImg.frontImg}
        backImg={pokeImg.backImg}
        name={pokeName}
      />
      <PokeCard
        frontImg={pokeImg.frontImg}
        backImg={pokeImg.backImg}
        name={pokeName}
      />
    </>
  );
};

export default App;
