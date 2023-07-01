import styled from "styled-components";
import type { ComponentPropsWithoutRef } from 'react';

interface IMarkdownOut extends ComponentPropsWithoutRef<"textarea"> {
    text?: string;
}

const MarkdownInput = ({ text, ...rest }: IMarkdownOut) => {

  

  return <MarkdownAreaIn value={text} {...rest}/>;
};

const MarkdownAreaIn = styled.textarea`
  width: 50%;
  border: none;
  border-right: 1px solid rgb(221, 221, 221);
  height: 600px;
  outline: none;
  padding-left: 32px;
  padding-top: 32px ;
  font-size: 18px;
`;

export default MarkdownInput;
