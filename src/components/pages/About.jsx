import React from "react";
import { Container, Typography } from "../atoms";

const About = () => {
  return (
    <Container.Flex>
      <Container.Base>
        <Typography.Title>About</Typography.Title>
        <Typography.Paragraph>This is the about page.</Typography.Paragraph>
      </Container.Base>
    </Container.Flex>
  );
};

export default About;
