import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 80px;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1000px;
`;

export const Video = styled.div`
  position: relative;
  padding-top: 56.25%;
  width: 100%;

  @media (max-width: 1199px) {
    ::before {
      display: none;
    }
  }

  iframe {
    background: #edf0ff;
    position: absolute;
    border-radius: 32px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;

    @media (max-width: 1199px) {
      border-radius: 24px;
    }

    @media (max-width: 599px) {
      border-radius: 16px;
    }
  }

  svg {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -48px;
    z-index: 1;
    transition: 0.5s all;

    &:hover {
      transform: scale(1.1);
    }

    &.hide {
      pointer-events: none;
      transform: scale(0.9);
      opacity: 0;
    }

    @media (max-width: 600px) {
      width: 60px;
      height: 60px;
      margin: -30px;
    }
  }

  ::before {
    content: "";
    position: absolute;
    background: #716ff6;
    border-radius: 16px;
    top: 40px;
    bottom: 40px;
    left: -20px;
    right: -20px;
    z-index: -1;

    @media (max-width: 600px) {
      display: none;
    }
  }
`;
