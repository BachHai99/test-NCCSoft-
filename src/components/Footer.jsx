import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Wrapper>Copyright &copy;{new Date().getFullYear()}</Wrapper>;
};

const Wrapper = styled.div`
  background: yellow;
  height: 50px;
  background: #191718;
  color: #fff;
  text-align: center;
  top: 20px;
`;

export default Footer;
