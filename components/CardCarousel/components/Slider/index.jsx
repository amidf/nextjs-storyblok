import React, { useState, useRef, useEffect } from "react";
import Splide from "@splidejs/splide";

import * as S from "./styled";

const Slider = ({ children, dotsNumber = 0 }) => {
  const [instance, setInstance] = useState(null);
  const [index, setIndex] = useState(0);
  const sliderEl = useRef(null);
  const carouselEl = useRef(null);

  useEffect(() => {
    if (!sliderEl.current) {
      return;
    }

    const newInstance = new Splide(sliderEl.current, {
      type: "loop",
      focus: "center",
      perPage: 1,
      perMove: 1,
      interval: 3000,
      speed: 600,
      rewind: true,
      trimSpace: false,
      autoplay: true,
      pauseOnHover: true,
      fixedWidth: 389,
      width: "100vw",
      gap: 16,
      drag: true,
      pagination: false,
      waitForTransition: true,
      breakpoints: {
        600: {
          fixedWidth: 288,
        },
      },
    });

    newInstance.mount();

    if (dotsNumber === 0) {
      return;
    }

    const handleMove = (newIndex) => {
      setIndex(newIndex);
    };

    newInstance.on("move", handleMove);
    newInstance.on("drag", handleMove);

    setInstance(newInstance);

    return () => {
      newInstance.destroy();
    };
  }, [setInstance, setIndex]);

  const handleClick = (i) => () => {
    instance.go(i);
  };

  return (
    <S.Box>
      <S.Container ref={sliderEl} className="splide">
        <div className="splide__track">
          <ul className="splide__list" ref={carouselEl}>
            {children}
          </ul>
        </div>
      </S.Container>
    </S.Box>
  );
};

export default Slider;
