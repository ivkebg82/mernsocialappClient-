import React from "react";
import { createContext, useContext, useState } from "react";
const appContext = createContext();
export function Context({ children }) {
  const [user, setUser] = useState({});

  return (
    <appContext.Provider value={{ user, setUser }}>
      {children}
    </appContext.Provider>
  );
}
export const useUserState = () => useContext(appContext);
