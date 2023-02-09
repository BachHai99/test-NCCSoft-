import React from "react";
import styled from "styled-components";

const InfoItem = ({ image, title, content }) => {
  return (
    <Wrapper>
      <h4>{title}</h4>
      <img className="image" src={image} alt="" />
      <p className="content">{content}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .content {
    display: float;
    object-fit: cover;
  }
  .image {
    float: left;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }
`;

export default InfoItem;
