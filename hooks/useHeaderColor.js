import { useState, useEffect } from "react"

const useHeaderColor = options => {
  const [inverse, setInverse] = useState(options.defaultInverse)
  const [isChangeColor, setIsChangeColor] = useState(false)

  useEffect(() => {
    const handler = () => {
      const el = document.querySelector(options.elem.selector) || {}
      const headerEl = document.getElementById("header") || {}

      if (window.pageYOffset + headerEl.clientHeight >= el.offsetTop) {
        setInverse(el.inverse || false)
        setIsChangeColor(true)
      } else {
        setInverse(options.defaultInverse)
        setIsChangeColor(false)
      }
    }

    handler()

    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [options, setInverse])

  return { inverse, isChangeColor }
}

export default useHeaderColor
