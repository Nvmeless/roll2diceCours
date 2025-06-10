import React, { useState } from "react";
import { keyframes, styled } from "styled-components";

const FadeInAnimation = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(-360deg);
}
`;

const FadinComponent = styled.div`
  animation: ${FadeInAnimation} 2s linear infinite;
`;

const FadeIn = (props) => {
  const [state, setState] = useState(true);

  return (
    <div
      onClick={() => {
        setState(!state);
      }}
    >
      {state ? (
        <div>{props.children}</div>
      ) : (
        <FadinComponent>{props.children}</FadinComponent>
      )}
    </div>
  );
};
export default FadeIn;
