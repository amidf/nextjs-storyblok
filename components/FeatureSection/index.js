import { sbEditable } from "@storyblok/storyblok-editable";

import DynamicComponent from "../DynamicComponent";
import * as S from "./styled";

const FeatureSection = ({ blok }) => {
  console.log({ blok });

  return (
    <S.Container {...sbEditable(blok)} key={blok._uid}>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </S.Container>
  );
};

export default FeatureSection;
