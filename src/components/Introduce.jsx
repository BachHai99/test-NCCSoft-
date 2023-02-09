import React from "react";
import styled from "styled-components";

const Introduce = () => {
  return (
    <Wrapper>
      <div className="introduce-container">
        <h5 className="title">
          NCC is a network of connected, young and passionate software engineers
        </h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque
          vitae eius sed eos obcaecati harum quisquam totam! Vero id quas
          dolore, qui modi ad? Itaque, sed exercitationem? Excepturi, suscipit.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #efefef;
  .introduce-container {
    padding: 10px 130px
  }
  .title {
  }
`;

export default Introduce;
