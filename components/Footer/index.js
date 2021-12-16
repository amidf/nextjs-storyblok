import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterContentBox,
  SubFooterWrapper,
  SubFooterSubWrapper,
  SubFooterContainer,
  SkolkovoBox,
  SkolkovoText,
} from "./subFooterWrapper";
import Col from "./components/Col";
import { AHref } from "./Copyright";
import {
  Container,
  InnerContainer,
  Caption,
  Link,
} from "./components/Col/styled";
import * as S from "./styled";
import TwitterIcon from "../Header/assets/twitter-logo.inline.svg";
import GitHubIcon from "../Header/assets/github-logo.inline.svg";
import SlackIcon from "../Header/assets/slack-logo.inline.svg";
import SkolkovoLogo from "./assets/skolkovo.inline.svg";
import Button from "../Button";

const FooterContainer = ({ content, isMobileMenu = false, openModal }) => {
  return (
    <>
      <FooterWrapper
        as={isMobileMenu ? "div" : "footer"}
        className={isMobileMenu && "mobile-nav"}
      >
        <FooterContent>
          <FooterContentBox
            // $isEn={!locale.includes("ru")}
            className={isMobileMenu && "mobile-menu"}
          >
            {isMobileMenu && (
              <>
                <Col
                  className="mobile-links"
                  items={content.header.links.map((item) => ({
                    title: item.label,
                    url: item.link,
                  }))}
                />
                <div className="mobile-buttons-container">
                  <Button
                    id="ContactSales"
                    size="sm"
                    inverse
                    onClick={openModal}
                  >
                    {content.header.contactSales}
                  </Button>
                  <Button size="sm" url={`/sign-up`}>
                    {content.header.signUp}
                  </Button>
                </div>
              </>
            )}
            <Container className="desktop-soc-icons">
              <InnerContainer>
                <Caption>{content.footer.socIconsCaption}</Caption>
                <S.SocIcons className="h-card">
                  <a
                    className="u-url"
                    href={content.footer.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    className="u-url"
                    href={content.footer.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    className="u-url"
                    href={content.footer.slackLink}
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    <SlackIcon />
                  </a>
                </S.SocIcons>
              </InnerContainer>
            </Container>
            {content.footer.items.map((item) => (
              <Col key={item.title} title={item.title} items={item.children} />
            ))}
            <Col
              title={content.termsColTitle}
              items={[
                content.footer.terms,
                content.footer.privacy,
                content.footer.termOfUse || {},
              ]}
            />
          </FooterContentBox>
        </FooterContent>
        <SubFooterWrapper>
          <SubFooterSubWrapper className={isMobileMenu && "mobile-subfooter"}>
            <SubFooterContainer>
              <Container className="mobile-soc-icons">
                <Caption>{content.footer.socIconsCaption}</Caption>
                <S.SocIcons className="h-card">
                  <a
                    className="u-url"
                    href={content.footer.twitterLink}
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    className="u-url"
                    href={content.footer.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    className="u-url"
                    href={content.footer.slackLink}
                    target="_blank"
                    rel="noopener noreferrer me"
                  >
                    <SlackIcon />
                  </a>
                </S.SocIcons>
              </Container>
              <AHref as="span">{content.footer.copyright.title}</AHref>

              <div className="documents">
                <Link to={content.footer.terms.url}>
                  {content.footer.terms.title}
                </Link>
                <Link to={content.footer.privacy.url}>
                  {content.footer.privacy.title}
                </Link>
                {content.footer.termOfUse && (
                  <Link to={content.footer.termOfUse.url}>
                    {content.footer.termOfUse.title}
                  </Link>
                )}
              </div>

              {content.skolkovoText && (
                <SkolkovoBox className="skolkovo-logo">
                  <SkolkovoLogo />
                  <SkolkovoText>{content.skolkovoText}</SkolkovoText>
                </SkolkovoBox>
              )}
            </SubFooterContainer>
          </SubFooterSubWrapper>
        </SubFooterWrapper>
      </FooterWrapper>
    </>
  );
};

export default FooterContainer;
