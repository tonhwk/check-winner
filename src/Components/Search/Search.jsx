import React, { useContext } from "react";
import {
  Input,
  Loser,
  Winner,
  Container,
  CheckerInfo,
  Anchor,
} from "./Search.styles";
import WinnersContext from "../../Context/WinnersContext";
import { checker } from "../../Utils/AdressChecker";

function Search() {
  const { searchTerm, setSearchTerm, found, setFound } = useContext(
    WinnersContext
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleOnClick = () => {
    if (checker(searchTerm)) {
      setFound(true);
    } else {
      setFound(false);
    }
  };
  return (
    <Container>
      <Input
        onChange={handleChange}
        placeholder="Paste your address here!"
      ></Input>

      <CheckerInfo>
        <Anchor
          className="waves-effect waves-light btn"
          onClick={handleOnClick}
        >
          Check!
        </Anchor>
        {found ? <Winner>Winner!</Winner> : <Loser>Not so lucky...</Loser>}
      </CheckerInfo>
    </Container>
  );
}

export default Search;
