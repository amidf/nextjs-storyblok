import styled from "styled-components";

export const Container = styled.div`
  height: ${(p) => p.$desktop}px;

  @media (max-width: 1199px) {
    height: ${(p) => p.$tablet}px;
  }

  @media (max-width: 599px) {
    height: ${(p) => p.$mobile}px;
  }
`;
