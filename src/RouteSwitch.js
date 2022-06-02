import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { StartGameComponent } from "./components/startGame/StartGame";
import { PokeContextProvider } from "./context/PokeContext";
export const RouteSwitch = () => {
  return (
    <PokeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartGameComponent />} />
          <Route path="/memory-game" element={<App />} />
        </Routes>
      </BrowserRouter>
    </PokeContextProvider>
  );
};
