import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";

import { useContent } from "../../hooks";
import themes from "../../styles/theme.json";
import Header from "../Header";
import Footer from "../Footer";
import * as S from "./styled";

const Layout = ({ children, isPostLayout = false }) => {
  const [theme, setTheme] = useState(isPostLayout ? "light" : "dark");
  const content = useContent();

  const handleChangeTheme = () =>
    setTheme((prevValue) =>
      prevValue === "light" && !isPostLayout ? "dark" : "light"
    );

  return (
    <ThemeProvider theme={themes[theme]}>
      <S.GlobalStyles />
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-214983354-1"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
  
              gtag('config', 'UA-214983354-1');
            `,
          }}
        ></script>
        <script
          async
          src="https://www.googleoptimize.com/optimize.js?id=OPT-T9CBT3Z"
        ></script>
      </Head>
      <Header content={content} theme={theme} changeTheme={handleChangeTheme} />
      {children}
      <Footer content={content} />
    </ThemeProvider>
  );
};

export default Layout;
