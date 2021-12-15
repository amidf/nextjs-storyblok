import styled from "styled-components"

export const Mark = styled.mark`
  color: ${props => props.theme.highlight};
  background-color: transparent;
`

export const MarkText = styled.span`
  mark {
    color: ${props => props.theme.highlight};
    background-color: transparent;
  }
`
