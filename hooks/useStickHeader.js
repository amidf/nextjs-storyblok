import { useState, useEffect } from "react"

const useStickHeader = offset => {
  const [isStick, setIsStick] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (window.pageYOffset > offset) {
        setIsStick(true)
      } else {
        setIsStick(false)
      }
    }

    handler()

    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [isStick, setIsStick])

  return isStick
}

export default useStickHeader
