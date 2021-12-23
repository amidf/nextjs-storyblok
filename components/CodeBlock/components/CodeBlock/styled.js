import styled from "styled-components"

export const Code = styled.div`
  margin-top: -2px;
  counter-reset: line;

  pre {
    background-color: #2e3361 !important;
    margin: 0;
  }

  code {
    font-family: "Consolas";
  }

  .line::before {
    counter-increment: line;
    content: counter(line);
    font-size: 14px;
    line-height: 20px;
    user-select: none;
    background-color: #2e3361;
    text-align: right;
    color: #a1a1bd;
    display: inline-block;

    min-width: 38px;
    padding-right: 8px;
    margin-right: 16px;

    position: sticky;
    left: 0;

    @media (max-width: 600px) {
      margin: 0;
      min-width: 24px;
    }
  }
`

export const Container = styled.div`
  overflow: auto;
  border-radius: 16px;
  display: flex;
  margin-bottom: 4px;

  :hover {
    .copybtn {
      visibility: visible;
      opacity: 1;
    }
  }

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
`

export const Lines = styled.ul`
  font-family: "Consolas";
  user-select: none;
  flex-shrink: 0;
  margin: 0;

  position: sticky;
  left: 0;
`

export const Line = styled.li`
  background-color: #2e3361;
  min-width: 48px;
  padding-right: 10px;
  text-align: right;
  color: #898aab;
  list-style-type: none;
`
