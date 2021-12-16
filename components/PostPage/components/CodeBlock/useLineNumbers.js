import { useEffect } from "react";

import { addLineNumbers } from "./utils";

const useLineNumbers = (el) => {
  useEffect(() => {
    if (!el.current || !el.current.querySelector("code")) {
      return;
    }

    const withLineNumbers = addLineNumbers(el.current.querySelector("code"));
    el.current.innerHTML = "";
    el.current.append(withLineNumbers);
  }, [el]);
};

export default useLineNumbers;
