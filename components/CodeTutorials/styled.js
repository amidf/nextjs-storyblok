import styled from "styled-components";

import { FONT } from "../../constants";

export const Section = styled.div`
  width: 1200px;
  margin-bottom: 144px;
  padding-top: 0;
  padding-bottom: 0;

  @media (max-width: 1439px) {
    width: 100%;
  }

  @media (max-width: 1200px) {
    padding: 40px 24px;
  }

  @media (max-width: 1199px) {
    width: auto;
    padding: 0;
    margin-left: 32px;
    margin-right: 32px;
    margin-bottom: 56px;
  }

  @media (max-width: 1023px) {
    margin-left: 24px;
    margin-right: 24px;
  }

  @media (max-width: 599px) {
    margin-bottom: 48px;
    margin-left: 12px;
    margin-right: 12px;
  }
`;

export const Tabs = styled.div`
  display: flex;
  background: #21254b;
  border-radius: 16px 16px 0px 0px;
`;

export const Tab = styled.div`
  width: 50%;
  background: ${(p) => (p.isActive ? "#2E3361" : "transparent")};
  border-radius: 16px 16px 0px 0px;
  text-align: center !important;
  padding: 8px 0;
  font-size: 13px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 4px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 1167px;
  position: relative;

  @media (max-width: 1439px) {
    &::before {
      display: none;
    }
  }

  @media (max-width: 1200px) {
    width: 100%;
    display: block;
  }

  &::before {
    content: "";
    position: absolute;
    left: -20px;
    right: -20px;
    top: 50px;
    bottom: 50px;
    z-index: -1;
    background-color: #2fd6d3;
    border-radius: 16px;
    @media (max-width: 1200px) {
      display: none;
    }
  }
`;

export const TextBlock = styled.div`
  width: 534px;
  height: 456px;
  overflow-y: hidden;
  padding: 24px 0 0 24px;

  @media (max-width: 1200px) {
    background: #2e3361;
    border-radius: 0 0 16px 16px;
    display: block;
    width: 100%;
  }

  @media (max-width: 599px) {
    padding-top: 16px;
    padding-left: 8px;
  }

  background-color: #21254b;
  border-radius: 16px 0 0 16px;

  .top {
    padding: 24px 24px 15px 24px;
  }

  h3 {
    text-align: left;
    font-weight: 800;
    font-size: 32px;
    line-height: 32px;
    letter-spacing: 0.5px;
    margin: 0 0 16px 0;
    color: #fff;

    @media (max-width: 1199px) {
      margin-bottom: 24px;
    }

    @media (max-width: 599px) {
      font-size: 18px;
      line-height: 24px;
      font-weight: bold;
      margin-bottom: 8px;
    }
  }

  p:first-child {
    margin-top: 0;
  }

  .text {
    width: 100%;
    white-space: break-spaces;
    text-align: left;
  }

  .text-box {
    overflow-y: scroll;
    height: calc(100% - 104px);
    width: 100%;
    font-family: ${FONT.PRIMARY};
    font-weight: normal;
    font-size: 15px;
    line-height: 28px;
    color: #ffffff;

    @media (max-width: 1200px) {
      width: 100%;
    }

    @media (max-width: 600px) {
      font-size: 13px;
      line-height: 24px;
    }
  }
`;

export const CodeBlock = styled.div`
  width: 585px;
  height: 494px;
  border-radius: 16px;

  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    border-radius: 0 0 16px 16px;
    display: block;
    width: 100%;

    > div {
      border-radius: 0 0 16px 16px;
    }
  }

  ::before {
    content: "";
    display: block;
    background: #1d2042;
    filter: blur(16px);
    border-radius: 16px;
    z-index: -1;

    position: absolute;
    left: -12px;

    width: 12px;
    height: 100%;
  }

  > div:not(.shadow) {
    height: 100%;
    min-width: 421px;
    @media (max-width: 1200px) {
      min-width: 100%;
    }
  }
`;

export const ImgBlock = styled(CodeBlock)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2e3361;

  padding: 8px;

  img {
    border-radius: 16px;
    max-width: 100%;
  }
`;
