import { createContext, useContext, useEffect, useState } from "react";
import { getBuildings } from "../services/buildings_service";

const BuildingsContext = createContext();

function BuildingsProvider({ children }) {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    getBuildings()
      .then((data) => {
        return setBuildings(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <BuildingsContext.Provider
      value={{
        buildings,
      }}
    >
      {children}
    </BuildingsContext.Provider>
  );
}

function useBuildings() {
  return useContext(BuildingsContext);
}

export { BuildingsProvider, useBuildings };
