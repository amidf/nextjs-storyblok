import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 56px;
  text-align: left;

  :last-child {
    margin-bottom: 0;
  }

  > [data-component="feature-paragraph"] {
    max-width: 454px;
    min-width: 454px;
    flex-shrink: 0;
  }

  > :not([data-component="feature-paragraph"]) {
    max-width: 664px;
    min-width: 664px;
    flex-shrink: 0;
  }

  @media (max-width: 1439px) {
    > :not([data-component="feature-paragraph"]) {
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

    > [data-component="feature-paragraph"] {
      margin-bottom: 16px;
      max-width: 916px;
    }

    > :not([data-component="feature-paragraph"]) {
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

    > [data-component="feature-paragraph"] {
      width: 100%;
      min-width: 100%;
      margin-bottom: 8px;
    }
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: center;
    margin-bottom: 120px;

    > :first-child {
      margin-right: 48px;
    }
  }
`;
