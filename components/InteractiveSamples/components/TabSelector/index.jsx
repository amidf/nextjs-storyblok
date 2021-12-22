import React, { useState, useEffect, useRef } from "react"

import * as S from "./styled"
import ArrowLeft from "./assets/arrow-left.svg"
import ArrowRight from "./assets/arrow-right.svg"
import { useBreakpoint } from "../../../../common/hooks"

let savedPos = 0
const useSlider = ref => {
  const slider = ref.current

  const scroll = (pos, isSet) => {
    if (!slider) return
    if (isSet) slider.scrollLeft = pos
    else slider.scrollLeft += pos
    savedPos = slider.scrollLeft
  }

  useEffect(() => {
    if (!slider) return

    slider.scrollLeft = savedPos
    let isDown = false
    let startX
    let scrollLeft

    slider.addEventListener("mousedown", e => {
      isDown = true
      slider.classList.add("active")
      startX = e.pageX - slider.offsetLeft
      scrollLeft = slider.scrollLeft
    })

    slider.addEventListener("mouseleave", () => {
      isDown = false
      slider.classList.remove("active")
    })

    slider.addEventListener("mouseup", () => {
      isDown = false
      slider.classList.remove("active")
    })

    slider.addEventListener("mousemove", e => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - slider.offsetLeft
      const walk = (x - startX) * 1.5
      scroll(scrollLeft - walk, true)
    })
  }, [ref])

  return {
    scrollLeft: () => scroll(-5),
    scrollRight: () => scroll(5),
  }
}

const useHold = (cb, time = 20) => {
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return

    let timer
    const button = ref.current
    const clear = () => clearInterval(timer)
    const mousedown = () => {
      timer = setInterval(cb, time)
    }

    button.addEventListener("mousedown", mousedown)
    button.addEventListener("mouseleave", clear)
    button.addEventListener("mouseup", clear)

    return () => {
      clear(timer)
      button.removeEventListener("mousedown", mousedown)
      button.removeEventListener("mouseleave", clear)
      button.addEventListener("mouseup", clear)
    }
  }, [ref, cb, time])
  return ref
}

const TabSelector = ({ items, activeItemIndex, onChange }) => {
  const isMobile = useBreakpoint(600)
  const [isOpen, setOpen] = useState(false)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"
    const handler = e => e.preventDefault()
    window.addEventListener("touchmove", handler)
    return () => window.removeEventListener("touchmove", handler)
  }, [isOpen])

  const choose = i => {
    onChange(i)()
    setOpen(false)
  }

  const ref = useRef()
  const { scrollLeft, scrollRight } = useSlider(ref)
  const leftBtn = useHold(scrollLeft)
  const rightBtn = useHold(scrollRight)
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
    
      const totalWidth = Array.from(ref.current.children)
        .reduce((acc, curr) => acc + curr.clientWidth, 0)

      setIsScroll(ref.current.clientWidth < totalWidth)
    }

    handler()
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [ref])

  if (isMobile) {
    return (
      <S.Container>
        <S.ItemOption onClick={() => setOpen(true)}>
          <span>{items[activeItemIndex]?.tabName}</span>
          <ArrowRight style={{ transform: "rotate(90deg)" }} />
        </S.ItemOption>

        {isOpen && (
          <S.ModalMenu onClick={() => setOpen(false)}>
            <ul onClick={e => e.stopPropagation()}>
              {items.map((item, i) => (
                <li key={i} onClick={() => choose(i)}>
                  {item.tabName}
                </li>
              ))}
            </ul>
          </S.ModalMenu>
        )}
      </S.Container>
    )
  }

  return (
    <S.Container>
      {isScroll && (
        <S.NavBtn type="button" ref={leftBtn}>
          <ArrowLeft />
        </S.NavBtn>
      )}
      <S.List isScroll={isScroll} ref={ref}>
        {items.map((item, i) => (
          <S.ListItem active={activeItemIndex === i ? 1 : 0} key={i}>
            <button onClick={onChange(i)} type="button">
              {item.tabName}
            </button>
          </S.ListItem>
        ))}
      </S.List>
      {isScroll && (
        <S.NavBtn type="button" ref={rightBtn}>
          <ArrowRight />
        </S.NavBtn>
      )}
    </S.Container>
  )
}

export default TabSelector
