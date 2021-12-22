import styled from "styled-components";

import { FONT } from "../../constants";

export const Title = styled.h1`
  font-family: ${FONT.SECONDARY};
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 80px;
  text-align: ${(p) => p.$align};
  color: ${(p) => p.theme.text};
  margin: 0;

  margin-bottom: 16px;

  @media (max-width: 1199px) {
    font-size: 48px;
    margin-top: 40px;
    line-height: 64px;
  }

  @media (max-width: 599px) {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: left;
    margin-top: 0;
    margin-bottom: 8px;
  }
`;
