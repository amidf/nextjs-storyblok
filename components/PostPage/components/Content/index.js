/* eslint-disable react/display-name */

import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { useHighlighter } from "../../../../hooks";
import * as S from "./styled";
import CodeBlock from "../CodeBlock";

const renderLinkMd = (props) => {
  const { children, href, ...rest } = props;

  if (
    children.includes !== undefined &&
    children.includes("Embedded content")
  ) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  if (href.indexOf("mailto") !== -1) {
    return (
      <S.Link href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </S.Link>
    );
  }

  return href.indexOf("http") === -1 ? (
    <S.InnerLink to={`/${href}`}>{children}</S.InnerLink>
  ) : (
    <S.Link href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </S.Link>
  );
};

export const mdOptions = (highlighter) => ({
  a: renderLinkMd,
  p: ({ children }) => <S.Paragraph>{children}</S.Paragraph>,
  h1: ({ children }) => <S.Title as="h1">{children}</S.Title>,
  h2: ({ children }) => <S.Title as="h2">{children}</S.Title>,
  h3: ({ children }) => <S.Title as="h3">{children}</S.Title>,
  h4: ({ children }) => <S.Title as="h4">{children}</S.Title>,
  h5: ({ children }) => <S.Title as="h5">{children}</S.Title>,
  h6: ({ children }) => <S.Title as="h6">{children}</S.Title>,
  code: ({ children }) => <S.Code>{children}</S.Code>,
  // inlineCode: ({ children }) => <S.Code>{children}</S.Code>,
  pre: ({ children }) => (
    <CodeBlock highlighter={highlighter}>{children}</CodeBlock>
  ),
  quote: ({ children }) => <S.Quote>{children}</S.Quote>,
  img: ({ src, title, alt }) => {
    return (
      <S.Asset>
        <Image width="100%" height="100%" src={src} alt={title} />
        <figcaption>{title}</figcaption>
      </S.Asset>
    );
  },
  ul: ({ children }) => <S.UnorderedList>{children}</S.UnorderedList>,
  ol: ({ children }) => <S.OrderedList>{children}</S.OrderedList>,
  li: ({ children }) => (
    <S.ListItem>
      <span className="circle"></span>
      {children}
    </S.ListItem>
  ),
});

const Content = ({ body }) => {
  const highlighter = useHighlighter();

  return (
    <ReactMarkdown components={mdOptions(highlighter)}>{body}</ReactMarkdown>
  );
};

export default Content;
