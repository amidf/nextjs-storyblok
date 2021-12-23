import { useMemo } from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

import Card from "../Card";
import Slider from "./components/Slider";
import * as S from "./styled";

const colors = ["#21D3B3", "#3F9FF8", "#5855F4", "#02CCCB", "#313C9D"];
const hovers = ["#4DDCC2", "#65B2F9", "#6F6CFA", "#2FD6D3", "#545FB1"];

const CardCarousel = ({ blok }) => {
  console.log({ carouselBlok: blok });
  const dotsNumber = useMemo(() => blok.cards.length, [blok]);

  return (
    <S.Container {...sbEditable(blok)} key={blok._uid}>
      <Slider dotsNumber={dotsNumber}>
        {blok.cards.map((item, i) => (
          <li key={i} className="splide__slide">
            <Card
              href={item.link.url}
              hover={hovers[i % 5]}
              style={{ background: colors[i % 5] }}
              target="_blank"
              rel="noopener noreferrer"
              blok={item}
            />
          </li>
        ))}
      </Slider>
    </S.Container>
  );
};

export default CardCarousel;
