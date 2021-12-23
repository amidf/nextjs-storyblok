import { sbEditable } from "@storyblok/storyblok-editable";

import * as S from "./styled";

const Card = ({ blok, ...props }) => {
  return (
    <S.Container {...props} {...sbEditable(blok)} key={blok._uid}>
      <S.Category>{blok.category}</S.Category>
      <S.Title>{blok.title}</S.Title>
      <S.Text>{blok.text}</S.Text>
      <S.Lang>{blok.lang}</S.Lang>
    </S.Container>
  );
};

export default Card;
