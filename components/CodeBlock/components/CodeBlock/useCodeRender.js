import { useEffect } from "react"

export const addLineNumbers = block => {
  const lines = [...block.querySelectorAll(".line")]

  const tableEl = document.createElement("table")
  tableEl.classList.add("code-block")

  lines.forEach((line, i) => {
    const trEl = document.createElement("tr")
    const numberCell = document.createElement("td")
    const codeCell = document.createElement("td")

    numberCell.textContent = i + 1
    codeCell.append(line)
    trEl.appendChild(numberCell)
    trEl.appendChild(codeCell)
    tableEl.appendChild(trEl)
  })

  return tableEl
}

const useCodeRender = (el, deps, inline) => {
  useEffect(() => {
    if (!el.current) {
      return
    }

    if (inline) {
      el.current.innerHTML = inline
    }

    const withLineNumbers = addLineNumbers(el.current)
    el.current.innerHTML = ""
    el.current.append(withLineNumbers)
  }, [el, inline, deps])
}

export default useCodeRender
