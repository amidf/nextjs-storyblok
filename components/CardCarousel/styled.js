import styled from "styled-components";

export const Container = styled.div`
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 599px) {
    overflow-x: hidden;
  }

  .splide__slide {
    display: flex;
    justify-content: center;
  }

  .splide__pagination {
    bottom: -40px;
  }

  .splide__arrow {
    display: none;
  }

  .splide__pagination__page {
    width: 16px;
    height: 16px;
    margin: 0 8px;
    background: ${(p) => p.theme.carauselDot};
  }

  .splide__pagination__page.is-active {
    background: ${(p) => p.theme.carauselDotActive};
    transform: scale(1);
  }
`;
