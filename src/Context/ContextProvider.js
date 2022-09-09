import React, { useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

const ContextProvider = ({ children }) => {
  const [users, setUsers] = useState([
    { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },
  ]);
  return (
    <userContext.Provider value={[users, setUsers]}>
      {children}
    </userContext.Provider>
  );
};

export default ContextProvider;
