const MAX_TEXT_LENGTH = 120

export const getText = parts => {
  const text = parts.reduce((acc, curr) => {
    return `${acc}${
      curr.isHighlighted
        ? `<mark>${curr.value}</mark>`
        : curr.value.replace(/^</g, "&lt;")
    }`
  }, "")

  if (text.length <= MAX_TEXT_LENGTH) {
    return text
  }

  const valueStartIndex = text.indexOf("<mark>")

  if (valueStartIndex > MAX_TEXT_LENGTH) {
    const result = text
      .slice(valueStartIndex, valueStartIndex + MAX_TEXT_LENGTH)
      .trim()

    return valueStartIndex + MAX_TEXT_LENGTH > text.length
      ? `...${result}`
      : `...${result}...`
  }

  return `${text.slice(0, MAX_TEXT_LENGTH).trim()}...`
}
