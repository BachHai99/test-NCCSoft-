import React, { useState } from "react";
import styled from "styled-components";
import { information } from "../fake-data/information";
import InfoItem from "./InfoItem";

const Information = () => {
  const [infoData, setInfoData] = useState(information);
  return (
    <Wrapper>
      {infoData.map((info) => {
        return <InfoItem {...info} key={info.id} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: left;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export default Information;
