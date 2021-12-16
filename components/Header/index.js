import React, { useState } from "react";

import { useBreakpoint } from "../../hooks";

import DesktopHeader from "./components/DesktopHeader";
import MobileHeader from "./components/MobileHeader";
import * as S from "./styled";

const Header = ({ content, theme, openModal = () => {}, changeTheme }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const isMobile = useBreakpoint(1199);

  const headerProps = {
    theme,
    content: content.header,
    openModal,
    changeTheme,
    isSearchFocused,
    setIsSearchFocused,
  };

  return (
    <S.Container id="header">
      {isMobile ? (
        <MobileHeader {...headerProps} footerContent={content.footer} />
      ) : (
        <DesktopHeader {...headerProps} />
      )}
    </S.Container>
  );
};

export default Header;
