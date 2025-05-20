import React from "react";
import { Container, Typography } from "../../atoms";
const Default = (props) => {
  return (
    <Container.Base>
      <Typography.Paragraph {...props}></Typography.Paragraph>
    </Container.Base>
  );
};

export default Default;
