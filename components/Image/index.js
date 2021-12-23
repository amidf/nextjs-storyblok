import { sbEditable } from "@storyblok/storyblok-editable";

import * as S from "./styled";

const Image = ({ blok }) => {
  return (
    <S.Image
      {...sbEditable(blok)}
      key={blok._uid}
      src={blok.file.filename}
      alt={blok.file.alt}
    />
  );
};

export default Image;
