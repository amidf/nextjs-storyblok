import { sbEditable } from "@storyblok/storyblok-editable";

import * as S from "./styled";

const SpaceDivider = ({ blok }) => {
  return (
    <S.Container
      {...sbEditable(blok)}
      key={blok._uid}
      $desktop={blok.desktop}
      $tablet={blok.tablet}
      $mobile={blok.mobile}
    />
  );
};

export default SpaceDivider;
