import React from "react";
import { Container, Typography } from "../atoms";

const Classique = () => {
  return (
    <Container.Flex>
      <Container.Explain>
        <Typography.Title>Classique</Typography.Title>
        <Typography.Paragraph>
          Dans le mode classique, touver le personnage SNK du jour.
        </Typography.Paragraph>
      </Container.Explain>
    </Container.Flex>
  );
};

export default Classique;
