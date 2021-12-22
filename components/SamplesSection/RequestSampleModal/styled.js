import styled from "styled-components"

import { media, Textarea } from "src/uikit"

export const Title = styled.h3`
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.4px;
  color: #142470;
  margin-top: 0;
  margin-bottom: 32px;

  @media ${media.mobile} {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.2px;
    margin-bottom: 16px;
  }
`

export const FormContainer = styled.form`
  margin-top: 32px;

  text-align: left;

  .message-field {
    margin-bottom: 20px;

    label {
      font-weight: 500;
      font-size: 15px;
      line-height: 24px;
      letter-spacing: 0.4px;
      color: rgba(0, 21, 83, 0.5);
      margin-bottom: 3px;
      display: inline-block;
    }

    ${Textarea} {
      max-width: 512px;
      max-height: 120px;
      min-height: 120px;
      width: 512px;
      height: 120px;
    }
  }

  @media (max-width: 599px) {
    .message-field {
      ${Textarea} {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  @media (max-width: 480px) {
    margin-top: 16px;
  }

  @media (max-width: 480px) {
    > div:last-child {
      margin-bottom: 14px;
    }
  }
`

export const SuccessText = styled.div`
  h1 {
    font-weight: bold;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #142470;
    margin: 0;
    margin-top: 10px;
    margin-bottom: 16px;
  }

  p {
    font-size: 15px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.4px;
    color: #0a1c61;
    margin: 0;
    margin-bottom: 12px;
  }
`
