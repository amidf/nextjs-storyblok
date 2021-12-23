import styled, { css } from "styled-components";

import { FONT } from "../../../../constants";

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  margin-left: -8px;

  @media (max-width: 599px) {
    height: 40px;
    width: 100%;
    justify-content: space-between;

    margin-bottom: 8px;
  }
`;

const hiddenStyle = css`
  opacity: 0;
  visibility: hidden;
  height: 1px;
  overflow: hidden;
`;

export const List = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;
  ${(props) => props.hidden && hiddenStyle}

  width: ${(p) => (p.isScroll ? "calc(100% - 90px)" : "calc(100% - 40px)")};
  margin: ${(p) => (p.isScroll ? "0 10px" : "0 10px ")};

  overflow-x: hidden;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & + & {
    margin-left: 16px;
  }

  ::after {
    content: "";
    opacity: ${(props) => (props.active ? 1 : 0)};
    transition: 0.3s;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 1px 4px rgba(64, 70, 125, 0.3);
    border-radius: 4px;
    text-align: center;

    width: 100%;
    height: 2px;

    position: relative;
    display: block;
  }

  button {
    outline: none;
    background-color: transparent;
    border: none;
    cursor: pointer;

    padding: 0;
    white-space: nowrap;

    font-family: ${FONT.PRIMARY};
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    color: ${(props) => (props.active ? "#fff" : "#a1a1bd")};
  }
`;

export const ItemOption = styled.div`
  width: 100%;
  margin-left: 8px;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    color: #fff;
    display: block;
    width: 100%;
  }

  svg {
    margin-left: 4px;
    width: 24px;
    height: 24px;
  }
`;

export const NavBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const ModalMenu = styled.div`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 21, 83, 0.5);
  padding: 8px;

  ul {
    background: #ffffff;
    box-shadow: 0px 2px 4px rgba(33, 37, 75, 0.4);
    border-radius: 6px;
    width: calc(100% - 8px);
  }

  li {
    font-weight: 600;
    font-size: 15px;
    line-height: 28px;
    color: #001553;
    padding: 8px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      background: #14247047;
    }
  }
`;
