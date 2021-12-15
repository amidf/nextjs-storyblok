import React from "react"
import { Link } from "gatsby"

import Button from "../../../../newUikit/Button"
import Search from "../../../Search"
import ThemeSwitch from "../../../ThemeSwitch"

import DashaLogo from "../../assets/dasha-logo.inline.svg"
import DashaLogoWhite from "../../assets/dasha-logo-white.inline.svg"
import TwitterLogo from "../../assets/twitter-logo.inline.svg"
import GitHubLogo from "../../assets/github-logo.inline.svg"
import SlackLogo from "../../assets/slack-logo.inline.svg"
import * as S from "./styled"

const DesktopHeader = ({
  theme,
  isSearchFocused,
  content,
  setIsSearchFocused,
  openModal,
  changeTheme,
}) => {
  return (
    <S.Container className="inner">
      <S.LogoContainer>
        <Link to={content.logoLink}>
          {theme === "dark" ? <DashaLogoWhite /> : <DashaLogo />}
        </Link>
      </S.LogoContainer>
      <S.Nav>
        <Search theme={theme} changeIsFocused={setIsSearchFocused} />
        <S.Box searchFocused={isSearchFocused}>
          {content.links.map(item =>
            item.link.includes("http") ? (
              <S.Link
                id="Documentation"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </S.Link>
            ) : (
              <S.InnerLink to={item.link}>{item.label}</S.InnerLink>
            )
          )}

          <div className="soc-container">
            <S.SocLink
              className="u-url"
              id="Twitter"
              href={content.twitterLink}
              target="_blank"
              rel="noopener noreferrer me"
            >
              <TwitterLogo />
            </S.SocLink>
            <S.SocLink
              className="u-url"
              id="Github"
              href={content.gitHubLink}
              target="_blank"
              rel="noopener noreferrer me"
            >
              <GitHubLogo />
            </S.SocLink>
            <S.SocLink
              className="u-url"
              id="Slack"
              href={content.slackLink}
              target="_blank"
              rel="noopener noreferrer me"
            >
              <SlackLogo />
            </S.SocLink>
          </div>
          <div className="buttons-container h-card">
            <Button
              size="sm"
              url={content.signUpLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.signUp}
            </Button>
            <Button id="ContactSales" size="sm" inverse onClick={openModal}>
              {content.contactSales}
            </Button>
          </div>
          {changeTheme && (
            <ThemeSwitch currentTheme={theme} onChange={changeTheme} />
          )}
        </S.Box>
      </S.Nav>
    </S.Container>
  )
}

export default DesktopHeader
