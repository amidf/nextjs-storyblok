import React, { useEffect } from "react"
import { useIntl } from "gatsby-plugin-intl"
import algoliaSearch from "algoliasearch/lite"
import { InstantSearch, Configure } from "react-instantsearch-dom"
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock"

import * as S from "./styled"
import SearchBox from "./components/SearchBox"
import Hits from "./components/Hits"
import useOutside from "./useOutside"
import { useGetOS } from "../../common/hooks"

const algoliaClient = algoliaSearch(
  process.env.ALGOLIA_APP_ID ?? "WWULEGDQ5B",
  process.env.ALGOLIA_SEARCH_APIKEY ?? "000a8e67b848c18736a9e8ec3dfc28db"
)

const searchClient = {
  ...algoliaClient,
  search(requests) {
    if (requests.every(({ params }) => !params.query)) {
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          nbHits: 0,
          nbPages: 0,
          page: 0,
          processingTimeMS: 0,
        })),
      })
    }

    return algoliaClient.search(requests)
  },
}

const MAX_HITS_PER_PAGE = 30

const Search = ({ theme, changeIsFocused }) => {
  const [isRefinementEmpty, setIsRefinementEmpty] = React.useState(true)
  const [currentRefinement, setCurrentRefinement] = React.useState("")
  const [isFocused, setIsFocused] = React.useState(false)
  const [isHideHits, setIsHideHits] = React.useState(false)
  const [isEmpty, setIsEmpty] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const containerEl = React.useRef(null)
  const { locale } = useIntl()

  useOutside(containerEl, () => {
    if (!currentRefinement) {
      setIsFocused(false)
    }

    setIsHideHits(true)
  })

  useEffect(() => {
    setIsRefinementEmpty(currentRefinement === "")

    if (window.innerWidth < 1200) {
      const hitsBox = document.querySelector("#hits-box")
      const topBanner = document.querySelector("#top-banner")
      const header = document.querySelector("#header")

      if (isFocused) {
        topBanner.style.position = "static"
        header.classList.add("search-open")
        disableBodyScroll(hitsBox || document.body)
      } else {
        topBanner.style.position = "relative"
        header.classList.remove("search-open")
        enableBodyScroll(hitsBox || document.body)
      }
    }

    changeIsFocused(isFocused)

    return () => {
      clearAllBodyScrollLocks(document.body)
    }
  }, [isFocused, currentRefinement, setIsRefinementEmpty, changeIsFocused])

  const os = useGetOS()

  const handleIsRefinementEmptyChange = value => {
    setIsRefinementEmpty(value.trim() === "")
    setCurrentRefinement(value)
  }

  const handleFocus = React.useCallback(() => {
    setIsFocused(true)
    setIsHideHits(false)
  }, [currentRefinement, setIsFocused, setIsHideHits])

  return (
    <S.Container
      ref={containerEl}
      empty={isEmpty && !isHideHits ? 1 : 0}
      os={os}
      focused={isFocused ? 1 : 0}
      locale={locale}
    >
      <InstantSearch
        searchClient={searchClient}
        searchState={{ query: currentRefinement }}
        indexName={process.env.ALGOLIA_INDEX_NAME || "dev_docs"}
      >
        <SearchBox
          theme={theme}
          isFocused={isFocused}
          setIsLoading={setIsLoading}
          setIsHitsHide={setIsHideHits}
          setIsFocused={setIsFocused}
          onChangeRefinment={handleIsRefinementEmptyChange}
          onFocus={handleFocus}
        />
        <Hits
          isRefinementEmpty={isRefinementEmpty}
          isFocused={isFocused}
          isLoading={isLoading}
          currentRefinement={currentRefinement}
          isHideHits={isHideHits}
          setIsEmpty={setIsEmpty}
          setIsHideHits={setIsHideHits}
        />
        <Configure hitsPerPage={MAX_HITS_PER_PAGE} />
      </InstantSearch>
    </S.Container>
  )
}

export default Search
