import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import React, { useState } from "react";
import Search from "./Components/Search/Search";
import WinnersContext from "./Context/WinnersContext";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [found, setFound] = useState(false);
  return (
    <div>
      <WinnersContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          found,
          setFound,
        }}
      >
        <Search></Search>
      </WinnersContext.Provider>
    </div>
  );
}

export default App;
