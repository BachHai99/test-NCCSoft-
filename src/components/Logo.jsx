import React from "react";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <img
        className="img-logo"
        src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-de-thuong.jpg"
        alt=""
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .img-logo {
    width: 90px;
    height: 90px;
  }
`;

export default Logo;
