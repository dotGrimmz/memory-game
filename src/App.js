import axios from "axios";
import { useEffect, useState } from "react";

const csvJSON = (csv) => {
  const lines = csv.split("\n");
  const result = [];
  const headers = lines[0]
    .split(",")
    .map((x) => x.replace(/[|&;$%@"<>()+,]/g, ""));
  for (let i = 1; i < lines.length; i++) {
    if (!lines[i]) continue;
    const obj = {};
    const currentline = lines[i].split(",");
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }
    result.push(obj);
  }
  return result;
};

const App = () => {
  const [movies, setMovie] = useState([]);

  // Used to get Data on Load - useEffect
  useEffect(() => {
    // async function called to fetch then setState
    const getData = async () => {
      // Makes request to database
      let res = await axios.get(
        "https://gist.githubusercontent.com/tiangechen/b68782efa49a16edaf07dc2cdaa855ea/raw/0c794a9717f18b094eabab2cd6a6b9a226903577/movies.csv"
      );

      // Parses Response if needed
      let parsedData = csvJSON(res?.data);

      // sets the state with the fetched data
      setMovie(parsedData);
    };

    getData();
  }, []);

  return (
    <ol>
      {movies.map((movie, index) => (
        <li key={index}>{movie.Film}</li>
      ))}
    </ol>
  );
};

export default App;
