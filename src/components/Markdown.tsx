import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Code from "../components/Code";

/**
 * Renders a post body.
 *
 * react-markdown v10 replaced the v4 API this used to call: `source` became
 * `children`, `renderers` became `components`, and `escapeHtml={false}` (plus
 * the `react-markdown/with-html` entry point) is now the `rehype-raw` plugin.
 *
 * rehype-raw is required, not cosmetic: the docs in `docs/` are authored with
 * a lot of literal HTML (<figure>, <details>, <div class="cols-2">, <img>),
 * and without it that markup would be escaped and shown as text.
 *
 * remark-gfm is required for the same reason. v4 parsed GitHub-flavored
 * markdown implicitly; remark-parse v11 is CommonMark-only, so without this
 * plugin the 35 pipe tables in `docs/` silently render as paragraphs.
 */
export const Markdown: React.FC<{ source: string }> = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <ReactMarkdown
        key="content"
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: Code,
        }}
      >
        {props.source}
      </ReactMarkdown>
    </div>
  );
};
