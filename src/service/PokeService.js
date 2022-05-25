import axios from "axios";
import { MockPokeData } from "../__data__/MOCK_POKE_DATA";

import { rndInt } from "../utils";

export const PokeService = () => {
  const getData = async (amount) => {
    let pokemonCardData = [];

    for (let i = 1; i <= amount; i++) {
      let randomNumber = rndInt();
      let res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randomNumber}`
      );
      pokemonCardData.push({
        frontImg: res?.data?.sprites?.front_default,
        backImg: res?.data?.sprites?.back_default,
        name: res?.data?.name,
        type: res?.data?.types[0]?.type?.name,
      });
    }
    return pokemonCardData;
  };

  const getMockData = () => {
    return MockPokeData;
  };

  const useMockData = false;

  return { getData, getMockData, useMockData };
};
