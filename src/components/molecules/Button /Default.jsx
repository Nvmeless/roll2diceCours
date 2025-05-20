import React from "react";
import { Container, Typography } from "../../atoms";
const Default = ({ callBack, ...props }) => {
  return (
    <Container.Base onClick={callBack}>
      <Typography.Paragraph {...props}></Typography.Paragraph>
    </Container.Base>
  );
};

export default Default;
