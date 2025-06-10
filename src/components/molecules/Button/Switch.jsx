import React, { useState } from "react";
import { Container, Typography } from "../../atoms";
const Switch = ({ callBack = () => {}, ...props }) => {
  const primary = "red";
  const secondary = "blue";
  const [isOn, setIsOn] = useState(true);
  return (
    <Container.Base bg={isOn ? secondary : primary}>
      <Typography.Paragraph
        onClick={() => {
          callBack();
          setIsOn(!isOn);
        }}
        color={isOn ? primary : secondary}
        {...props}
      ></Typography.Paragraph>
    </Container.Base>
  );
};

export default Switch;
