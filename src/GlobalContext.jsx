import { createContext, useState } from "react";

const GlobalContext = createContext();
// const filteredData = lamps.filter((lamp) => lamp.toLowerCase().includes(searchTerm.toLowerCase()));
function GlobalProvider({children}) {
  
  const [searchTerm, setSearchTerm] = useState()
  return ( 
    <GlobalContext.Provider 
    value={{
      searchTerm, 
      setSearchTerm,
      }}
    >
      {children}
    </GlobalContext.Provider>

   );
}
 
export {GlobalContext, GlobalProvider}
