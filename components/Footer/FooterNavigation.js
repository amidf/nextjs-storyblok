import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex: 2;
  max-width: 160px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const Caption = styled.span`
  font-size: 11.5px;
  font-weight: 500;
  line-height: 1.22;
  color: ${(props) => props.theme.footerCaption || "rgba(0, 21, 83, 0.5)"};
  text-transform: uppercase;
  margin-bottom: 24px;
`;

const Navigation = styled.nav``;

const List = styled.ul`
  margin: 24px 0 0;
  list-style: none;
`;

const Item = styled.li`
  margin-top: 16px;
  font-size: 13px;
  line-height: 1.85;
  letter-spacing: 0.4px;
  color: ${(props) => props.theme.text || "#001553"};
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-weight: bold;

  &:hover {
    color: ${(props) => props.theme.socLinkHover || "#5855f4"};
  }
`;

const FooterNavigation = ({ title, items }) => (
  <Wrapper>
    <Caption>{title}</Caption>
    <Navigation>
      <List>
        {items.map((item) => (
          <Item key={item.title}>
            {item.url ? (
              <Link to={item.url}>{item.title}</Link>
            ) : (
              <span>{item.title}</span>
            )}
          </Item>
        ))}
      </List>
    </Navigation>
  </Wrapper>
);

export default FooterNavigation;
