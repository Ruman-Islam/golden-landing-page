import { createContext, useState } from "react";
import Home from "./pages/Home";

export const useBackground = createContext();

function App() {
  const [background, setBackground] = useState(true);
  return (
    <useBackground.Provider value={{ background, setBackground }}>
      <Home />
    </useBackground.Provider>
  );
}

export default App;
