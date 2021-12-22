import styled from "styled-components";

import { FONT } from "../../constants";

export const Title = styled.h2`
  font-family: ${FONT.SECONDARY};
  font-style: normal;
  font-weight: 800;
  font-size: 48px;
  line-height: 64px;
  text-align: ${(p) => p.$align};
  color: ${(p) => p.theme.text};
  margin: 0;

  @media (max-width: 1199px) {
    font-size: 40px;
    line-height: 48px;
  }

  @media (max-width: 600px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    text-align: left;
  }
`;
