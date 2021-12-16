import React from "react";

import * as S from "./styled";

const Button = ({ type, children, url, onClick, ...props }) => {
  if (type === "stroke" && url) {
    return (
      <S.StrokeButton as="a" href={url} {...props}>
        <span>{children}</span>
      </S.StrokeButton>
    );
  }

  if (type === "stroke") {
    return (
      <S.StrokeButton type="button" onClick={onClick} {...props}>
        <span>{children}</span>
      </S.StrokeButton>
    );
  }

  if (props.inverse && url) {
    return (
      <S.InversedButton as="a" href={url} {...props}>
        <span>{children}</span>
      </S.InversedButton>
    );
  }

  if (props.inverse) {
    return (
      <S.InversedButton type="button" onClick={onClick} {...props}>
        <span>{children}</span>
      </S.InversedButton>
    );
  }

  if (url) {
    return (
      <S.Button as="a" href={url} {...props}>
        <span>{children}</span>
      </S.Button>
    );
  }

  return (
    <S.Button type="button" onClick={onClick} {...props}>
      <span>{children}</span>
    </S.Button>
  );
};

export default Button;
