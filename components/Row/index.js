import { sbEditable } from "@storyblok/storyblok-editable";

import DynamicComponent from "../DynamicComponent";
import * as S from "./styled";

const Row = ({ blok }) => {
  return (
    <S.Container
      $spaceBetween={blok.spaceBetween}
      $spaceTopAndBottom={blok.spaceTopAndBottom}
      $align={blok.align}
      {...sbEditable(blok)}
      key={blok._uid}
    >
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </S.Container>
  );
};

export default Row;
