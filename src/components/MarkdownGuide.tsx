import styled from "styled-components";

const MarkdownGuide = () => {
  return (
    <Main>
      <H2>Markdown Cheat Sheet</H2>
      <UL>
        <LI># H1</LI>
        <LI>## H2</LI>
        <LI>### H3</LI>
        <LI>**bold**</LI>
        <LI>[Link](http://a.com)</LI>
        <LI>![Image](http://url/a.png)</LI>
        <LI>```block code```</LI>
        <LI>- list item</LI>
      </UL>
    </Main>
  );
};

const Main = styled.div`
  background-color: rgb(249, 249, 249);
  padding: 20px;
  margin: 10px;
  border: 1px solid rgb(221, 221, 221);
  width: 100%;

  display: flex;
  flex-direction: column;
`;

const H2 = styled.div`
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const UL = styled.ul`
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
`;

const LI = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
`;

export default MarkdownGuide;
