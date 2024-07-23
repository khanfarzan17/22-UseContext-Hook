import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {
  const [username, setUserName] = useState("");
  const [finalvalue, setFinalValue] = useState("Noob Master 69");

  const handleFinalvalue = (event) => {
    event.preventDefault();
    setFinalValue(username);
    setUserName("");
  };
  const handleusername = (event) => {
    setUserName(event.target.value);
  };
  return (
    <GlobalContext.Provider
      value={{
        handleusername,
        username,
        setUserName,
        handleFinalvalue,
        finalvalue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
