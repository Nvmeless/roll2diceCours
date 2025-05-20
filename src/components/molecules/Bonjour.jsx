import React, { useContext } from "react";
import { Container, Typography } from "../atoms";
import { NightModeContext } from "../../context/NigthModeContext";

const Bonjour = (props) => {
  const nightModeContext = useContext(NightModeContext);
  return (
    <Container.Base>
      <Typography.Title>Hello</Typography.Title>
      <Typography.SubTitle>Hello</Typography.SubTitle>
      <Typography.Link>Hello</Typography.Link>
      <Typography.Paragraph>Hello</Typography.Paragraph>
    </Container.Base>
  );
};

export default Bonjour;
