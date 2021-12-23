import { sbEditable } from "@storyblok/storyblok-editable";

import * as S from "./styled";

const Heading5 = ({ blok }) => {
  return (
    <S.Title $align={blok.align} {...sbEditable(blok)} key={blok._uid}>
      {blok.text}
    </S.Title>
  );
};

export default Heading5;
