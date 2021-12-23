import styled from "styled-components";

import { FONT } from "../../constants";

export const Caption = styled.h3`
  text-transform: uppercase;
  color: ${(p) => p.theme.caption};
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0px;
  text-align: left;
  margin: 0;

  @media (max-width: 1199px) {
    margin-bottom: 16px;
  }

  @media (max-width: 600px) {
    font-weight: 600;
    margin: 0;

    font-size: 15px;
    line-height: 28px;
  }
`;
