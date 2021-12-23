import styled, { css } from "styled-components"
import CodeBlock from "../CodeBlock"

export const Container = styled.div`
  background: #2e3361;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
`

export const FilesWrap = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  min-height: 56px;

  @media (max-width: 600px) {
    min-height: 40px;
  }
`

export const Files = styled.ul`
  margin: 0;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 16px 16px 8px 8px;

  @media (max-width: 600px) {
    padding: 8px 8px 8px 0;
  }
`

export const fileActive = css`
  color: #fff;
  svg {
    fill: #fff;
  }
`

export const fileHover = css`
  color: #d9dae5;
  svg {
    fill: #d9dae5;
  }
`

export const File = styled.li`
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a1a1bd;
  font-size: 13px;
  font-weight: normal;
  letter-spacing: 0.4px;
  margin: 0 8px 8px 8px;
  height: 24px;

  @media (max-width: 600px) {
    margin: 0 0 0 8px;
  }

  svg {
    margin-right: 6px;
    fill: #a1a1bd;
  }

  &:hover {
    ${({ isActive }) => !isActive && fileHover}
  }

  ${({ isActive }) => isActive && fileActive}
`

export const Code = styled(CodeBlock)`
  overflow-y: auto;
  background: #2e3361;
  padding-top: 10px;
  margin: 0;
  height: calc(100% - 57px);

  @media (max-width: 600px) {
    height: calc(100% - 40px);
  }

  * {
    font-size: 16px;
    @media (max-width: 600px) {
      font-size: 14px;
      line-height: 18px;
    }
    background: #2e3361;
  }
`
