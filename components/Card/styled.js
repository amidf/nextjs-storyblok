import styled from "styled-components";

import { FONT } from "../../constants";

export const Container = styled.a`
  display: block;
  text-decoration: none;
  max-width: 389px;
  min-width: 389px;
  height: 355px;
  border-radius: 16px;
  padding: 16px 24px 32px 24px;
  text-align: left;
  margin: 0 8px;
  user-select: none;
  transition: 0.5s background;
  position: relative;

  @media (max-width: 600px) {
    max-width: 288px;
    min-width: 288px;
    width: 288px;
    height: 288px;
    padding: 16px;
  }

  :hover {
    background: ${(p) => p.hover} !important;
  }
`;

export const Category = styled.h2`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #ffffff;
  opacity: 0.5;
  margin: 0;
  margin-bottom: 16px;

  @media (max-width: 599px) {
    margin-bottom: 8px;
  }
`;

export const Title = styled.h3`
  font-family: ${FONT.SECONDARY};
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const Text = styled.p`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 32px;
  letter-spacing: 0.2px;
  color: #ffffff;
  overflow: hidden;
  margin: 0;
  margin-top: 4px;

  @media (max-width: 600px) {
    font-size: 13px;
    line-height: 24px;
  }
`;

export const Lang = styled.p`
  font-family: ${FONT.PRIMARY};
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 32px;
  /* identical to box height, or 188% */

  letter-spacing: 0.2px;
  color: #ffffff;
  margin: 0;
  margin-top: 23px;
  position: absolute;
  bottom: 24px;

  @media (max-width: 600px) {
    font-size: 15px;
    line-height: 28px;
    margin-top: 8px;
    bottom: 16px;
  }
`;
