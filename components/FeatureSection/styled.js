import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 56px;
  text-align: left;

  :last-child {
    margin-bottom: 0;
  }

  > div:first-child {
    max-width: 454px;
    min-width: 454px;
    flex-shrink: 0;
  }

  > div:last-child {
    max-width: 664px;
    min-width: 664px;
    flex-shrink: 0;
  }

  @media (max-width: 1439px) {
    > div:last-child {
      max-width: 616px;
      min-width: 616px;
    }
  }

  @media (max-width: 1199px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 100%;
    width: 100%;
    margin-bottom: 56px;

    > div:first-child {
      margin-bottom: 16px;
      max-width: 916px;
    }

    > div:last-child {
      max-width: 100%;
      min-width: 100%;
    }

    & > div > * {
      text-align: center;
    }
  }

  @media (max-width: 600px) {
    & > div > * {
      text-align: left;
    }
  }

  @media (max-width: 599px) {
    align-items: flex-start;
    margin-bottom: 48px;

    > div:first-child {
      width: 100%;
      min-width: 100%;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: ${(p) => (p.isLeft ? "row" : "row-reverse")};
    margin-bottom: 120px;

    > div:first-child {
      margin: ${(p) => (p.isLeft ? "0 48px 0 0" : "0 0 0 48px")};
    }
  }
`;
