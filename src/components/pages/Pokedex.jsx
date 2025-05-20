import React, { useEffect, useState } from "react";
import { Container } from "../atoms";
import axios from "axios";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);
  const [pokeName, setPokeName] = useState("ditto");
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://pokeapi.co/api/v2/pokemon/" + pokeName,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log("Response");
        setPokemon(response.data.sprites.front_default);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [pokeName]);

  return (
    <Container.Base>
      {pokemon ? <img src={pokemon} /> : "J'ai pas de pokemon"}
      <input
        onChange={(x) => {
          setPokeName(x.target.value);
        }}
      />
    </Container.Base>
  );
};

export default Pokedex;
