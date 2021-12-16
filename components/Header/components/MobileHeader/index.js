import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import Button from "../../../Button";
import Search from "../../../Search";
import ThemeSwitch from "../../../ThemeSwitch";
import Footer from "../../../Footer";

import DashaLogo from "../../assets/dasha-logo.inline.svg";
import DashaLogoWhite from "../../assets/dasha-logo-white.inline.svg";
import TwitterLogo from "../../assets/twitter-logo.inline.svg";
import GitHubLogo from "../../assets/github-logo.inline.svg";
import SlackLogo from "../../assets/slack-logo.inline.svg";
import MenuIcon from "../../assets/menu.inline.svg";
import CloseIcon from "../../assets/close.inline.svg";

import * as S from "./styled";

const MobileHeader = ({
  theme,
  isSearchFocused,
  footerContent,
  content,
  setIsSearchFocused,
  openModal,
  changeTheme,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navOffset, setNavOffset] = useState(0);
  const menuEl = useRef(null);

  const handleClick = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    if (isMenuOpen) {
      const bannerEl = document.getElementById("top-banner");

      if (!bannerEl || bannerEl.clientHeight <= window.pageYOffset) {
        setNavOffset(0);
        return;
      }

      setNavOffset(bannerEl.clientHeight - window.pageYOffset);
    }
  }, [isMenuOpen, setNavOffset]);

  useEffect(() => {
    const headerEl = document.getElementById("header");
    const scrollWidth = 16;

    if (isMenuOpen) {
      headerEl.style.width = `calc(100% - ${scrollWidth}px)`;
      document.body.style.paddingRight = `${scrollWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      headerEl.style.width = "100%";
      document.body.style.paddingRight = "0";
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.paddingRight = "0";
      headerEl.style.width = "100%";
    };
  }, [isMenuOpen]);

  return (
    <S.Container className="inner">
      <S.LogoContainer>
        <S.MenuBtn title="Menu" onClick={handleClick}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </S.MenuBtn>
        <Link href={content.logoLink}>
          <a>{theme === "dark" ? <DashaLogoWhite /> : <DashaLogo />}</a>
        </Link>
      </S.LogoContainer>
      <S.Nav>
        <Search theme={theme} changeIsFocused={setIsSearchFocused} />
        <S.Box searchFocused={isSearchFocused ? 1 : 0}>
          {content.links.map((item) =>
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
              <Link href={item.link} passHref>
                <S.InnerLink>{item.label}</S.InnerLink>
              </Link>
            )
          )}
          <S.SocIcons>
            <S.SocLink id="Twitter" href={content.twitterLink} target="_blank">
              <TwitterLogo />
            </S.SocLink>
            <S.SocLink id="Github" href={content.gitHubLink} target="_blank">
              <GitHubLogo />
            </S.SocLink>
            <S.SocLink id="Slack" href={content.slackLink} target="_blank">
              <SlackLogo />
            </S.SocLink>
          </S.SocIcons>
          <S.ButtonsContainer>
            <Button size="sm" url={content.signUpLink} target="_blank">
              {content.signUp}
            </Button>
            <Button id="ContactSales" size="sm" inverse onClick={openModal}>
              {content.contactSales}
            </Button>
          </S.ButtonsContainer>
          {changeTheme && (
            <ThemeSwitch currentTheme={theme} onChange={changeTheme} />
          )}
        </S.Box>
      </S.Nav>
      <S.HiddenMenu $offset={navOffset} $isOpened={isMenuOpen}>
        <nav ref={menuEl}>
          <Footer
            content={{ ...footerContent, header: content }}
            isMobileMenu
            openModal={openModal}
          />
        </nav>
        <S.Overlay onClick={handleClick}></S.Overlay>
      </S.HiddenMenu>
    </S.Container>
  );
};

export default MobileHeader;
