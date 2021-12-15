import styled from "styled-components"

export const SocIcons = styled.div`
  display: flex;
  margin-top: 24px;

  a {
    margin-right: 24px;

    svg {
      path {
        transition: 0.3s;
      }
    }

    :last-child {
      margin-right: 0;
    }

    :hover {
      svg {
        path {
          fill: ${props => props.theme.socLinkHover};
        }
      }
    }
  }

  svg {
    path {
      transition: 0.3s;
      fill: ${props => props.theme.text};
    }
  }
`
