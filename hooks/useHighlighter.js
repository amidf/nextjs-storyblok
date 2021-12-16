import { useState, useEffect } from "react";
import * as shiki from "shiki";

import dslGrammar from "../components/PostPage/components/CodeBlock/dslGrammar";

const useHighlighter = () => {
  const [highlighter, setHighlighter] = useState(null);

  useEffect(() => {
    console.log("use effect");

    (async () => {
      console.log("getting");

      const newHighlighter = await shiki.getHighlighter({
        theme: "/code-theme",
        langs: [
          {
            id: `dsl`,
            scopeName: `source.dashaScriptingLanguage`,
            grammar: dslGrammar,
          },
        ],
      });

      console.log({ newHighlighter });

      setHighlighter(newHighlighter);
    })();
  }, []);

  return highlighter;
};

export default useHighlighter;
