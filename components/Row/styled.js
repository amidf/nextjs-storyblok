import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  justify-content: ${(p) => p.$align};
  align-items: center;

  padding-top: ${(p) => p.$spaceTopAndBottom};
  padding-bottom: ${(p) => p.$spaceTopAndBottom};

  * {
    margin-right: ${(p) => p.$spaceBetween};

    :first-child {
      margin-left: 0;
    }

    :last-child {
      margin-right: 0;
    }
  }

  @media (max-width: 599px) {
    flex-direction: column;

    * {
      margin: 0;
      margin-bottom: 16px;

      :last-child {
        margin-bottom: 0;
      }
    }
  }
`;
