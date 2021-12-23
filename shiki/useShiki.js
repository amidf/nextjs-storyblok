import { useState, useEffect } from "react";
import * as shiki from "shiki";

import dslGrammar from "./dslGrammar";
import defaultLangs from "./defaultLanguages";

const useShiki = () => {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    const init = async () => {
      const newInstance = await shiki.getHighlighter({
        theme: "/code-theme",
        langs: [
          ...defaultLangs,
          {
            id: `dsl`,
            scopeName: `source.dashaScriptingLanguage`,
            grammar: dslGrammar,
          },
        ],
      });

      setInstance(newInstance);
    };

    init();
  }, []);

  return instance;
};

export default useShiki;
