import styled from "styled-components";

import { FONT } from "../../constants";

export const Title = styled.h3`
  text-transform: uppercase;
  color: ${(p) => p.theme.caption};
  font-family: ${FONT.PRIMARY};
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  text-align: ${(p) => p.$align};
  letter-spacing: 0px;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 28px;
    text-align: left !important;
  }
`;
