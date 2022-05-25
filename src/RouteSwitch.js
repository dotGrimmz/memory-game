import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import App from "./App";
import { StartGameComponent } from "./components/startGame/StartGame";

export const RouteSwitch = () => {
  const [difficulty, setDifficulty] = useState(5);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<StartGameComponent setDifficulty={setDifficulty} />}
        />
        <Route path="/memory-game" element={<App difficulty={difficulty} />} />
      </Routes>
    </BrowserRouter>
  );
};
