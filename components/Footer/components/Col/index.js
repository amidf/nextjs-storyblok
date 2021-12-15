import React from "react"

import * as S from "./styled"
import { getModalClickHandler } from "../../../../components/ModalsContainer/events"

const Col = ({ className = "", title, items }) => {
  const handleOnClick = (e, item) => {
    if (!item.modal) {
      return
    }

    const func = getModalClickHandler(item.modal, { title: item.title })

    if (!func) {
      return
    }

    e.preventDefault()
    func()
  }

  return (
    <S.Container className={className}>
      <S.InnerContainer>
        <S.Caption>{title}</S.Caption>
        <S.Navigation>
          <S.List>
            {items.map(item => (
              <S.Item key={item.title}>
                {item.url ? (
                  <S.Link
                    target={
                      item.url.indexOf("http") === -1 ? "_self" : "_blank"
                    }
                    onClick={e => handleOnClick(e, item)}
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
  )
}

export default Col
