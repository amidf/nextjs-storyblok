import React from "react"
import styled from "styled-components"

import { FONT } from "src/developers/constants"

export const Text = styled.small`
  font-family: ${FONT.PRIMARY};
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: ${props => props.theme.text};
`

export const AHref = styled.a`
  text-decoration: none;
  font-family: ${FONT.PRIMARY};
  font-weight: normal;
  font-size: 13px;
  line-height: 24px;
  color: ${props => props.theme.text};
  cursor: pointer;
`

const Copyright = () => <Text>© {new Date().getFullYear()}, Dasha.AI</Text>

export default Copyright
