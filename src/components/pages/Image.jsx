import React, { use } from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography } from "../atoms";

const Image = () => {
  const [snkPersonal, setSnkPersonal] = useState(null);
  const randomNumber = Math.floor(Math.random() * 202) + 1;
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api.attackontitanapi.com/characters/" + randomNumber,
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setSnkPersonal(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Container.Base>
      {snkPersonal ? (
        <>
          <Typography.Title>
            {snkPersonal ? snkPersonal.name : "Loading character..."}
          </Typography.Title>
          <img
            src={snkPersonal.img.split("/revision")[0]}
            alt={snkPersonal.name}
            style={{ width: "100%", height: "auto" }}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Container.Base>
  );
};

export default Image;
