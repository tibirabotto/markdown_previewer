import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import MarkdownGuide from "./components/MarkdownGuide";
import MarkdownInput from "./components/MarkdownInput";
import MarkdownOut from "./components/MarkdownOutput";

import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState<string>(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);

  const onToggleGuide: any = () => {
    setShowGuide(!showGuide);
  };

  const onChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdown(event.target.value);
  };

  return (
    <Main>
      <Header onToggleGuide={onToggleGuide} />
      {showGuide && (
        <Guide>
          <MarkdownGuide />
        </Guide>
      )}

      <InputOut>
        <MarkdownInput value={markdown} onChange={onChangeTextArea} />
        <MarkdownOut text={markdown} />
      </InputOut>
    </Main>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Guide = styled.div`
  display: flex;
`;

const InputOut = styled.div`
  display: flex;
`;

export default App;
