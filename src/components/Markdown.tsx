import React from "react";
import Code from "../components/Code";
import ReactMarkdown from "react-markdown/with-html";

export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <ReactMarkdown
        key="content"
        source={props.source}
        renderers={{
          code: Code,
        }}
        escapeHtml={false}
      />
    </div>
  );
};
