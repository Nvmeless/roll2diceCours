import React from "react";
import { Container } from "../../atoms";

const SousMenu = ({ children }) => {
  return (
    <Container.Footer>
      <Container.Flex>{children}</Container.Flex>
    </Container.Footer>
  );
};

export default SousMenu;
