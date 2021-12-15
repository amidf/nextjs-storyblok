import styled from "styled-components"

export const Container = styled.div`
  @media only screen and (max-width: 1199px) {
    &.inner {
      display: none;
    }
  }
`

export { LogoContainer, SocLink, Nav, Box, Link, InnerLink } from "../../styled"
