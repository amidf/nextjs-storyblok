export const isAttrHighlight = (hit, attribute) =>
  hit._highlightResult[attribute] &&
  hit._highlightResult[attribute].matchLevel !== "none"

export const normalizeHits = hits => {
  const allHits = []

  hits.forEach(hit => {
    if (
      isAttrHighlight(hit, "parentSectionTitle") &&
      !isAttrHighlight(hit, "title")
    ) {
      return
    }

    if (
      (isAttrHighlight(hit, "parentSectionTitle") ||
        isAttrHighlight(hit, "title") ||
        isAttrHighlight(hit, "higherParentSectionTitle")) &&
      hit.text &&
      !isAttrHighlight(hit, "text")
    ) {
      return
    }

    if (
      isAttrHighlight(hit, "parentSectionTitle") ||
      isAttrHighlight(hit, "title") ||
      isAttrHighlight(hit, "higherParentSectionTitle") ||
      isAttrHighlight(hit, "text")
    ) {
      allHits.push(hit)

      return
    }
  })

  return allHits
}
