import React from "react";

import * as S from "./styled";

const Col = ({ className = "", title, items }) => {
  return (
    <S.Container className={className}>
      <S.InnerContainer>
        <S.Caption>{title}</S.Caption>
        <S.Navigation>
          <S.List>
            {items.map((item) => (
              <S.Item key={item.url || item.title}>
                {item.url ? (
                  <S.Link
                    target={
                      item.url.indexOf("http") === -1 ? "_self" : "_blank"
                    }
                    onClick={(e) => handleOnClick(e, item)}
                    to={item.url}
                  >
                    {item.title}
                  </S.Link>
                ) : (
                  <span>{item.title}</span>
                )}
              </S.Item>
            ))}
          </S.List>
        </S.Navigation>
      </S.InnerContainer>
    </S.Container>
  );
};

export default Col;
