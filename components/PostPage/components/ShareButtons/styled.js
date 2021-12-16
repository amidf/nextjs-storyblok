import styled from "styled-components";

import { media } from "../../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 7px;
  left: -80px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px !important;
    margin-bottom: 4px !important;
    outline: none !important;
  }

  svg {
    path {
      fill: #142470;
    }

    :hover {
      path {
        fill: #5855f4;
      }
    }
  }

  @media (max-width: 1199px) {
    display: none;
  }

  @media ${media.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: ${(props) => (props.fixed ? "fixed" : "relative")};
    top: auto;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 64px;
    width: 100%;
    background-color: #fff;
    border-top: ${(props) =>
      props.fixed ? "1px solid rgba(222, 224, 230, 0.7)" : "none"};

    button {
      padding: 0 !important;
      width: 32px;
      height: 32px;
      color: #142470 !important;
      border-radius: 50%;
      border: 1px solid #142470 !important;
      margin: 0 20px;
    }

    button:first-child {
      margin-left: 0;
    }

    button:last-child {
      margin-right: 0;
    }

    button:hover {
      border-color: #5855f4 !important;

      svg {
        path {
          fill: #5855f4;
        }
      }
    }
  }
`;

export const Placeholder = styled.div`
  margin-top: ${(props) => (props.fixed ? "80px" : 0)};

  @media (max-width: 1199px) {
    margin-top: ${(props) => (props.fixed ? "16px" : 0)};
  }

  @media (max-width: 599px) {
    margin-top: ${(props) => (props.fixed ? "7px" : 0)};
  }
`;
