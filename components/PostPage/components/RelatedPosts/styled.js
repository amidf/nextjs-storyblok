import styled from "styled-components"

import { Section, Title } from "src/uikit"

export const Container = styled(Section)`
  max-width: 1440px;
  padding-bottom: 0 !important;
  margin-top: 40px;
  margin-bottom: 80px;

  ${Title} {
    font-weight: bold;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #001553;
    margin-bottom: 40px;
  }

  .posts-list {
    list-style: none;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    text-align: left;
  }

  .posts-list-item {
    padding: 20px;
    flex-basis: 373px;
  }

  @media (max-width: 1199px) {
    padding-left: 22px;
    padding-right: 22px;
    margin-bottom: 56px;

    .posts-list {
      flex-wrap: nowrap;
    }

    .posts-list-item:first-child {
      display: none;
    }

    .posts-list-item {
      padding: 10px;
      flex-basis: 468px;
    }
  }

  @media (max-width: 1023px) {
    padding-left: 14px;
    padding-right: 14px;
  }

  @media (max-width: 767px) {
    .posts-list-item {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 599px) {
    margin-bottom: 48px;

    .posts-list {
      flex-direction: column;
    }

    ${Title} {
      font-size: 24px;
      line-height: 32px;
      margin-bottom: 16px;
      text-align: left;
      width: 100%;
    }

    .posts-list-item {
      padding: 0 !important;
      margin-bottom: 24px;
    }

    .posts-list-item:last-child {
      margin-bottom: 0;
    }
  }
`
