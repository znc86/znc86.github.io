import React from "react";
import darcula from "react-syntax-highlighter/dist/cjs/styles/prism/darcula";
import { PrismLight, PrismAsyncLight } from "react-syntax-highlighter";
import type { ExtraProps } from "react-markdown";

const SyntaxHighlighter =
  typeof window === "undefined" ? PrismLight : PrismAsyncLight;

type CodeProps = React.ComponentPropsWithoutRef<"code"> & ExtraProps;

/**
 * `code` renderer for react-markdown.
 *
 * react-markdown v10 routes both inline code and fenced blocks through this one
 * component; v4 had a separate `inlineCode` renderer that this never saw. Only
 * fenced blocks carry a `language-*` class, so inline code has to fall through
 * to a plain <code> — otherwise every `inline span` in the docs would render as
 * a full syntax-highlighted block.
 *
 * `node` comes from react-markdown and is not a DOM attribute, so it is peeled
 * off rather than spread onto the element.
 */
const Code = ({ node: _node, className, children, ...rest }: CodeProps) => {
  const language = /language-(\w+)/.exec(className ?? "")?.[1];

  if (!language) {
    return (
      <code className={className} {...rest}>
        {children}
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      language={language === "ts" ? "typescript" : language}
      style={darcula}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
};

export default Code;
