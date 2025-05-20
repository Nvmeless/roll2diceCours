import React from "react";
import { Container } from "../atoms";
import { Bonjour, Button } from "../molecules";
const Test = () => {
  return (
    <Container.Base>
      {" "}
      <Bonjour></Bonjour>
      <Button.Switch
        callBack={() => {
          alert("Bonjour");
        }}
      >
        BOUTTON
      </Button.Switch>
    </Container.Base>
  );
};

export default Test;
