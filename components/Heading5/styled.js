import styled from "styled-components";

import { FONT } from "../../constants";

export const Title = styled.h5`
  font-family: ${FONT.SECONDARY};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: ${(p) => p.$align} !important;
  color: ${(p) => p.theme.text};
  margin: 0;

  @media (max-width: 599px) {
    font-size: 24px;
    line-height: 32px;
  }
`;
