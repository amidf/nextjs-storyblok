import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import "moment/locale/ru";
import styled from "styled-components";
import { useRouter } from "next/router";
import Image from "next/image";

import Layout from "../Layout";
import Introduction from "./components/Introduction";
import Content from "./components/Content";
import ShareButtons from "./components/ShareButtons";
import * as S from "./styled";
import { sbEditable } from "@storyblok/storyblok-editable";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    margin-top: 64px;
  }

  @media (max-width: 1199px) {
    main {
      margin-top: 56px;
    }
  }

  @media (max-width: 599px) {
    main {
      margin-top: 48px;
    }
  }
`;

const PostPage = ({ blok }) => {
  const { locale } = useRouter();
  const thumbnailEl = useRef(null);
  const [isThumbnailLoaded, setIsThumbnailLoaded] = useState(false);

  useEffect(() => {
    if (!thumbnailEl.current) {
      return;
    }

    const { current } = thumbnailEl;
    const handler = () => {
      setIsThumbnailLoaded(true);
    };

    current.addEventListener("load", handler);

    return () => {
      current.removeEventListener("load", handler);
    };
  }, [setIsThumbnailLoaded]);

  moment.locale(locale);

  return (
    <Layout {...sbEditable(blok)} key={blok._uid} isPostLayout>
      <S.GlobalStyle />
      <Wrap id="layout">
        <main>
          <S.Header>
            <h1>{blok.title}</h1>
            <div className="post-info-container">
              {blok.authorPhoto && (
                <img
                  alt={blok.authorPhoto.alt}
                  src={blok.authorPhoto.filename}
                />
              )}

              <div className="post-info">
                <p className="author-name">{blok.author}</p>
                <span className="details">
                  <time dateTime={blok.date}>
                    {moment(blok.date).format(
                      locale === "en-US" ? "MMMM DD, YYYY" : "D MMMM YYYY"
                    )}
                    .
                  </time>{" "}
                  {blok.timeToRead}
                </span>
              </div>
            </div>
          </S.Header>
          <S.ThumnailBox>
            <figure>
              {blok.frontImage && (
                <img
                  ref={thumbnailEl}
                  alt={blok.frontImage.alt}
                  src={blok.frontImage.filename}
                />
              )}
            </figure>
          </S.ThumnailBox>
          <S.Text as="article" data-sticky-container>
            <Introduction body={blok.introduction} />
            <Content body={blok.body} />
            <ShareButtons
              isThumbnailLoaded={isThumbnailLoaded}
              url={`https://dasha.ai`}
            />
          </S.Text>
        </main>
      </Wrap>
    </Layout>
  );
};

export default PostPage;
