import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"
import { useIntl } from "gatsby-plugin-intl"

import SearchIcon from "../../assets/search.inline.svg"
import ResetIcon from "../../assets/close.inline.svg"
import ShortcutIcon from "../../assets/shortcut.inline.svg"
import ShortcutDarkIcon from "../../assets/shortcut-dark.inline.svg"
import { useGetOS, useBreakpoint } from "../../../../common/hooks"

import * as S from "./styled"

const SearchBox = ({
  theme,
  currentRefinement,
  refine,
  isFocused,
  isSearchStalled,
  setIsLoading,
  setIsHitsHide,
  setIsFocused,
  onChangeRefinment,
  onFocus,
}) => {
  const { formatMessage } = useIntl()
  const inputEl = React.useRef(null)
  const isMobile = useBreakpoint(1199)

  const handleChange = e => {
    const value = e.target.value
    refine(value)
    onChangeRefinment(value)
  }

  const handleFocus = () => setIsHitsHide(false)
  const handleClick = () => {
    onFocus()

    if (!inputEl.current) {
      return
    }

    inputEl.current.focus()
  }

  const handleReset = e => {
    if (isMobile && currentRefinement === "" && inputEl.current) {
      e.stopPropagation()

      inputEl.current.blur()
      setIsFocused(false)
    }

    refine("")
    onChangeRefinment("")
  }

  React.useEffect(() => {
    setIsLoading(isSearchStalled)
  }, [isSearchStalled, setIsLoading])

  React.useEffect(() => {
    if (!inputEl.current) {
      return
    }

    const handler = event => {
      if (event.keyCode === 191 && !isFocused) {
        event.preventDefault()
        onFocus()
        inputEl.current.focus()
      }
    }

    document.addEventListener("keydown", handler)
    return () => document.removeEventListener("keydown", handler)
  }, [isFocused, onFocus])

  const os = useGetOS()

  return (
    <S.Container os={os} $isFocused={isFocused} onClick={handleClick}>
      <button
        type="button"
        title="Search docs"
        className="btn"
        onClick={handleClick}
      >
        <SearchIcon className="search-icon" />
      </button>
      <S.Label
        $isFocused={isFocused}
        onClick={() => {
          handleFocus()
          inputEl.current.focus()
        }}
      >
        {formatMessage({ id: "searchDocs" })}
      </S.Label>
      <S.Input
        ref={inputEl}
        $isFocused={isFocused}
        type="search"
        value={currentRefinement}
        placeholder={formatMessage({ id: "searchDocs" })}
        onChange={handleChange}
        onFocus={handleFocus}
      />
      {(currentRefinement !== "" || (isMobile && isFocused)) && (
        <button type="button" className="btn" onClick={handleReset}>
          <ResetIcon className="reset-icon" />
        </button>
      )}
      {!isFocused && (
        <span className="shortcut-icon">
          {theme === "light" && <ShortcutIcon />}
          {theme === "dark" && <ShortcutDarkIcon />}
          {!theme && <ShortcutIcon />}
        </span>
      )}
    </S.Container>
  )
}

export default connectSearchBox(SearchBox)
