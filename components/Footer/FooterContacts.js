import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  flex: 2;
  @media (max-width: 767px) {
    padding: 24px 0;
    text-align: center;
  }
`

const Caption = styled.span`
  font-size: 11.5px;
  font-weight: 500;
  line-height: 1.22;
  color: rgba(0, 21, 83, 0.5);
  text-transform: uppercase;
  margin-bottom: 24px;
`

const List = styled.ul`
  margin: 24px 0 0;
  list-style: none;
`

const Item = styled.li`
  margin-top: 16px;
  font-size: 13px;
  line-height: 1.85;
  letter-spacing: 0.4px;
  color: #001553;
`

const Link = styled(Item)`
  text-decoration: none;
`

const FooterContacts = () => (
  <Wrapper>
    <Caption>Contacts</Caption>
    <List>
      <Item>
        The Lipstick Building, 885 Third Ave, 24th floor, New York, NY
      </Item>
      <Item>
        <Link as="a" href="tel:973.358.8889" rel="noopener noreferrer">
          973.358.8889
        </Link>
      </Item>
    </List>
  </Wrapper>
)

export default FooterContacts
