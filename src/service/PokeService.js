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

  const options = {
    method: "GET",
    url: "https://unogs-unogs-v1.p.rapidapi.com/search/deleted",
    headers: {
      "X-RapidAPI-Host": "unogs-unogs-v1.p.rapidapi.com",
      "X-RapidAPI-Key": "536dbfe084msha7cb4cc7f42921fp15a7d9jsnd25d21dce7bd",
    },
  };
  const getMovieData = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const useMockData = false;

  return { getData, getMockData, useMockData, getMovieData };
};
