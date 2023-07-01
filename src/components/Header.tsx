import styled from "styled-components";
import React from "react";


interface IHeader {
  onToggleGuide: React.FC;
}


const Header = ({ onToggleGuide }: IHeader) => {
 

  return (
    <Main>
      <H1>Markdown Previewer</H1>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background-color: rgb(40, 44, 52);
  color: white;
`;

const H1 = styled.h1`
  display: block;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const Button = styled.button`
  padding: 10px;
  background-color: rgb(97, 218, 251);
  color: rgb(40, 44, 52);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #35a8d4;
  }
`;

export default Header;
