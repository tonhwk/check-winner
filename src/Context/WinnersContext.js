import React from "react";

const WinnersContext = React.createContext({
  searchTerm: "",
  setSearchTerm: () => {},
  found: false,
  setFound: () => {},
});

export default WinnersContext;
