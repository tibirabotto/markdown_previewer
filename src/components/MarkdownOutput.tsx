import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IMarkdownOut {
  text?: any;
}

const MarkdownOut = ({ text }: IMarkdownOut) => {
  const [content, setContent] = useState<any>("");

  useEffect(() => {
    setContent(text);
  }, [text]);
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} className="markDom">
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownOut;
