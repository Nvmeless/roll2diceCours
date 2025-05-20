import React from "react";
import { styled } from "styled-components";

const Padded = styled.div`
  background-color: ${(props) => {
    return props.blocked ? "red" : props.theme.bgColor;
  }};
  padding: 50px;
`;

export default Padded;
