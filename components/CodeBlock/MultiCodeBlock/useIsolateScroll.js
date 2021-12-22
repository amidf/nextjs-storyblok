import { useRef, useEffect } from "react"
import isolatedScroll from "isolated-scroll"

const useIsolateScroll = () => {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref) {
      return
    }

    const unbindHandlers = isolatedScroll(ref.current)
    return () => unbindHandlers()
  }, [ref])

  return ref
}

export default useIsolateScroll
