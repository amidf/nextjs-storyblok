import styled from "styled-components";

import { FONT } from "../../constants";

export const Container = styled.div`
  margin-bottom: 56px;
  text-align: left;
`;

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

export const Title = styled.h4`
  font-family: ${FONT.SECONDARY};
  color: ${(p) => p.theme.text};
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0px;
  text-align: left;
  margin: 24px 0 16px 0;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 1199px) {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    font-weight: bold;
    font-size: 24px;
    line-height: 32px;
    margin: 4px 0 8px 0;
  }
`;

export const Text = styled.p`
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

export const Link = styled.a`
  display: block;
  font-family: ${FONT.PRIMARY};
  font-weight: 600;
  font-size: 17px;
  line-height: 32px;
  text-align: left;
  text-decoration: none;
  color: ${(p) => p.theme.link};
  margin-top: 16px;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  > svg {
    margin-left: 8px;
    fill: ${(p) => p.theme.link};
  }

  @media (max-width: 1199px) {
    justify-content: center;
  }

  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;
