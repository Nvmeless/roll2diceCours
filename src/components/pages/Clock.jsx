import React, { useEffect, useState } from "react";
import { Container } from "../atoms";

const Clock = () => {
  const [clock, setClock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(clock);
      setClock(clock + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    console.log("Monté");
    return () => {
      console.log("Démonté");
    };
  }, [clock]);

  return (
    <Container.Base
      onClick={() => {
        setClock(clock + 1);
      }}
    >
      {clock}
    </Container.Base>
  );
};

export default Clock;
