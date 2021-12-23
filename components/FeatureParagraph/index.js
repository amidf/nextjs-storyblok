import { sbEditable } from "@storyblok/storyblok-editable";

import * as S from "./styled";
import ArrowIcon from "./assets/arrow.svg";

const FeatureParagraph = ({ blok }) => {
  return (
    <S.Container
      data-component={blok.component}
      {...sbEditable(blok)}
      key={blok._uid}
    >
      <S.Caption>{blok.caption}</S.Caption>
      <S.Title>{blok.title}</S.Title>
      <S.Text>{blok.text}</S.Text>
      <S.Link href={blok.link.url}>
        {blok.linkLabel} <ArrowIcon />
      </S.Link>
    </S.Container>
  );
};

export default FeatureParagraph;
