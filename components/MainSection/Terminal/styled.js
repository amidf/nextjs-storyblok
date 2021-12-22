import styled, { keyframes } from 'styled-components';

export const Terminal = styled.ul`
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding: 24px 18px;
`

const getColor = ({ type }) => {
    if (type === 'log') return '#E3CA71';
    if (type === 'error') return '#ff2e2e';
    return '#fff';
}

export const Line = styled.li`
    color: ${getColor};
    font-family: 'Consolas', monospace;
    list-style-type: none;
    width: 100%;
    text-align: left;

    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    white-space: pre-line;
`

export const Root = styled.span`
    white-space: pre;
    font-weight: bold;
`

export const blink = keyframes`
    0% { opacity: 0 }
    50% { opacity: 0 }
    51% { opacity: 1 }
    100% { opacity: 1 }
`

export const Input = styled.span`
    outline: none;
    border: none;
    min-width: 50%;
    display: inline-block;
    
    :focus {
        outline: none;
    }

    /* ::after {
        content: "█";
        margin-left: 2px;
        animation: ${blink} 3s infinite;
    } */
`