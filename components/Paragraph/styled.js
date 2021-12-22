import styled from "styled-components";

import { FONT } from "../../constants";

export const Container = styled.p`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: ${(p) => p.theme.text};
  margin: 0;

  @media (max-width: 600px) {
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 0;
  }
`;
