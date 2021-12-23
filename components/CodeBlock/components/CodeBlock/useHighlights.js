import { useEffect } from "react"

const isSomeRange = (index, highlights) => {
  return highlights.some(range => {
    if (Array.isArray(range)) {
      return range[0] <= index && index <= range[1]
    }

    return range === index
  })
}

const useHighlights = (el, highlights, deps) => {
  useEffect(() => {
    if (!el.current) {
      return
    }

    let activeLines = [...el.current.querySelectorAll("tr")].filter((line, i) => {
      if (!highlights || !highlights.length) {
        return line.classList.remove("disable-line", "active-line")
      }

      const isActive = isSomeRange(i + 1, highlights)
      line.classList.toggle("disable-line", !isActive)
      line.classList.toggle("active-line", isActive)

      return isActive;
    });

    const last = activeLines.pop();
    if (last && last.scrollIntoView) {
      last.scrollIntoView(false)
    }
  }, [el, highlights, deps])
}

export default useHighlights
