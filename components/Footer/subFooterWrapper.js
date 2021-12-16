import styled from "styled-components";

import { colors, media } from "../../styles";
import { FONT } from "../../constants";

export const FooterWrapper = styled.footer`
  width: 100%;
  flex-shrink: 1;
  margin-top: auto;
  z-index: 2;
  background-color: ${(props) => props.theme.bg || "#fff"};

  &.mobile-nav {
    .documents {
      display: none;
    }

    > div {
      border-top: none;
    }

    @media (max-width: 414px) {
      height: calc(100vh - 48px);
    }
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${(props) => props.theme.footerBorder || "#eee"};
`;

export const FooterContentBox = styled.div`
  display: grid;
  grid-template-columns:
    minmax(160px, 100%) minmax(160px, 100%) minmax(160px, 100%)
    minmax(160px, 100%) minmax(160px, 100%);
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  padding: 40px 40px 24px;

  > div:last-child {
    display: none;
  }

  .mobile-buttons-container {
    display: none;
  }

  @media (max-width: 1399px) {
    width: 1360px;
  }

  @media only screen and (max-width: 1024px) {
    &.mobile-menu {
      > div {
        &:last-child {
          order: 6;
        }

        .mobile-links {
          display: none;
        }

        &:nth-child(6) {
          order: 7;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    &.mobile-menu {
      > div {
        &:nth-last-child(2) {
          order: 4;
        }
      }
    }
  }

  @media (max-width: 959px) {
    display: grid;
    grid-template-columns:
      minmax(160px, 100%) minmax(160px, 100%) minmax(160px, 100%)
      minmax(160px, 100%);
    grid-template-rows: min-content min-content;
    grid-column-gap: 16px;
    width: 100%;

    > div {
      &.desktop-soc-icons {
        order: 5;
      }

      &:last-child {
        display: block;
        order: 6;
      }
    }
  }

  @media only screen and (max-width: 767px) {
    padding: 40px;
    grid-template-columns: minmax(160px, 100%) minmax(160px, 100%) minmax(
        160px,
        100%
      );
    grid-column-gap: 16px;

    > div {
      &:first-child {
        order: 4;
      }

      &:nth-last-child(2) {
        order: 6;
      }

      &:last-child {
        display: block;
        order: 5;
      }
    }
  }

  @media only screen and (max-width: 599px) {
    padding: 16px;
    grid-column-gap: 28px;

    &.mobile-menu {
      > div {
        &:nth-child(1) {
          order: 1;
        }
      }
    }

    > div {
      &:nth-child(1) {
        order: 4;
      }

      &.mobile-links {
        display: flex;
      }

      &:nth-child(5) {
        order: 6;
      }

      &:last-child {
        order: 5;
      }
    }
  }

  @media (max-width: 590px) {
    grid-template-columns: minmax(160px, 100%) minmax(160px, 100%);
    grid-template-rows: min-content min-content min-content;
    grid-column-gap: 28px;
    grid-row-gap: 0;

    > div {
      &:nth-child(1) {
        order: 1;
      }

      &:nth-child(5) {
        order: 4;
      }

      &:last-child {
        order: 6;
      }
    }
  }

  @media (max-width: 599px) {
    &.mobile-menu {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(auto-fill, min-content);

      > div {
        &.desktop-soc-icons,
        &:nth-last-child(2) {
          > div > span {
            display: block;
          }

          li {
            margin-bottom: 16px;
          }
        }

        :nth-child(3) {
          order: 4;
        }

        :nth-child(6) {
          order: 5;
        }

        :nth-child(4),
        :nth-child(5),
        :nth-child(6),
        :nth-child(8) {
          display: none;
        }

        & {
          > div > span {
            display: none;
          }

          li {
            margin-bottom: 8px;
          }
        }

        &:last-child {
          order: 5;
        }
      }

      .mobile-buttons-container {
        order: 3;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 24px;
        margin-bottom: 24px;

        button {
          width: 288px;
          margin-bottom: 16px;
        }
      }
    }
  }

  @media only screen and (max-width: 413px) {
    padding: 16px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);

    &:not(.mobile-menu) {
      > div {
        &:nth-child(2) {
          order: 6;
        }

        &:last-child {
          order: 5;
        }
      }
    }

    &.mobile-menu {
      flex-direction: column;

      .mobile-buttons-container {
        display: block;
        margin-top: 24px;

        a,
        button {
          display: flex;
          align-items: center;
          width: 100%;
          height: 40px;
          margin-bottom: 16px;
        }
      }

      .desktop-soc-icons {
        display: block !important;
      }

      > div {
        :nth-child(5),
        :nth-child(4),
        :nth-child(6) {
          margin: 0;

          li {
            min-height: 24px;
            margin-bottom: 8px;
          }

          span {
            display: ${(props) => (props.$isEn ? "none" : "block")};
          }
        }

        :last-child {
          order: 2;
          margin: 0;

          > span {
            display: none;
          }
        }

        :nth-child(2) {
          order: 4;
        }

        :nth-child(4) {
          order: 2;
        }

        :nth-child(5) {
          order: 1;
        }

        :nth-child(6) {
          order: 3;
        }

        :nth-child(7) {
          order: 6;
        }
      }
    }
  }
`;

export const SubFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 40px;

  @media only screen and (max-width: 1024px) {
    padding: 40px;
    padding-top: 0;
  }

  @media ${media.tablet} {
    padding: 0;
  }
`;

export const SubFooterSubWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 24px 0;
  width: 1264px;
  border-top: 1px solid
    ${(props) => props.theme.subFooterTopBorder || "#EAEBEF"};

  &.mobile-subfooter {
    border-top: none;
    padding: 0;

    .skolkovo-logo {
      display: none;
    }
  }

  @media (max-width: 991px) {
    padding: 24px 40px;

    &.mobile-subfooter {
      padding: 24px 40px 24px 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 40px 24px 40px;
    border-top: none;

    .documents {
      display: none !important;
    }

    &.mobile-subfooter {
      .mobile-soc-icons {
        display: none;
      }
    }
  }

  @media (max-width: 599px) {
    padding: 0 16px 40px 16px;

    &.mobile-subfooter {
      padding: 0 16px 40px 16px;
    }
  }

  @media only screen and (max-width: 414px) {
    padding: 0 16px 16px 16px;

    &.mobile-subfooter {
      .mobile-soc-icons {
        display: none;
      }
    }
  }
`;

export const MailUnderlay = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 12px;
  right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  padding-bottom: 6px;
  border-radius: 100px;
  box-shadow: 0 3px 8px -1px rgba(31, 42, 77, 0.15);
  background-color: ${colors.yellow.darken};
  cursor: pointer;

  &:hover {
    background-color: ${colors.yellow["700"]};
    box-shadow: 0 3px 8px -1px rgba(31, 42, 77, 0.25);
  }

  &:active {
    box-shadow: 0 3px 8px -1px rgba(31, 42, 77, 0.15);
    background-color: ${colors.yellow.darken};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubFooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .documents {
    display: flex;
    align-items: center;

    a:not(:last-child) {
      margin-right: 24px;
    }
  }

  span {
    margin-right: 32px;
  }

  @media (max-width: 959px) {
    .documents {
      display: none;
    }
  }

  @media (max-width: 768px) {
    justify-content: space-between;

    > div {
      flex-direction: column;
    }

    span {
      margin: 0 0 32px 0;
    }

    span:last-child {
      margin: 0 0 22px 0;
    }
  }

  @media (max-width: 413px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const SkolkovoBox = styled.div`
  width: 222px;
  display: flex;
  flex-direction: row !important;
  align-items: center;

  svg {
    min-width: 50px;
    min-height: 36px;
  }

  @media (max-width: 413px) {
    margin-top: 24px;
    width: 100%;
  }
`;

export const SkolkovoText = styled.p`
  font-family: ${FONT.PRIMARY};
  font-size: 9px;
  line-height: 12px;
  color: ${(props) => props.theme.text || "#001553"};
  margin: 0;
  margin-left: 12px;
`;
