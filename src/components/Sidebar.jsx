import React, { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <Wrapper>
      <ul className="list">
        <li className="item">Home</li>
        <li className="item">Services</li>
        <li className="item">News</li>
        <li className="item">Blog</li>
        <li className="item">Contact</li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  margin: 0;
  padding: 0;
  top: 0;
  height: 100%;
  background: #191718;
  .list {
    padding: 0;
    list-style-type: none;
  }
  .item {
    color: #fff;
    padding: 14px 16px;
  }
  .item:not(:last-child) {
    border-bottom: 1px solid #5c5c5c;
  }
  .item:hover {
    background: #5c5c5c;
  }
`;
export default Sidebar;
