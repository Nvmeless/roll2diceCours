import styled from "styled-components";

const Footer = styled.footer`
  padding: 0.5rem 0;
  background-color: ${(props) => props.theme.container.primary};
  color: ${(props) => props.theme.color};
  font-size: 0.8rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  z-index: 1;
`;

export default Footer;
