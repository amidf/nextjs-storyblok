import { useState, useEffect } from "react"

const useMedia = (lg, md, sm) => {
  const [width, setWidth] = useState(1920)

  useEffect(() => {
    const handler = () => setWidth(window.innerWidth)
    handler()
    window.addEventListener("resize", handler)
    return () => window.removeEventListener("resize", handler)
  }, [])

  if (width < 476) return sm
  if (width < 769) return md
  return lg
}

export default useMedia
