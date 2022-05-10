import axios from "axios";
import { MockPokeData } from "../__data__/MOCK_POKE_DATA";

export const PokeService = () => {
  const getData = async (amount = 5) => {
    let pokemonCardData = [];
    for (let i = 1; i <= amount; i++) {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
      pokemonCardData.push({
        frontImg: res?.data?.sprites?.front_default,
        backImg: res?.data?.sprites?.back_default,
        name: res?.data?.name,
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
