import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 0 80px 0;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1199px) {
    max-width: 100%;
    padding: 40px 32px 56px 32px;
  }

  @media (max-width: 599px) {
    max-width: 100%;
    padding: 24px 16px 48px 16px;
    align-items: inherit;

    * {
      text-align: left;
    }
  }
`;
