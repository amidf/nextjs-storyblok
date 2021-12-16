import React from "react";
import { connectHits } from "react-instantsearch-dom";

import ArrowLeftIcon from "../../assets/arrow-right.inline.svg";
import Highlight from "../Highlight";

import { normalizeHits, isAttrHighlight } from "./utils";
import * as S from "./styled";

const Hits = ({
  hits,
  currentRefinement,
  isRefinementEmpty,
  isHideHits,
  isLoading,
  isFocused,
  setIsEmpty,
}) => {
  const normalizedHits = React.useMemo(() => normalizeHits(hits), [hits]);

  React.useEffect(() => {
    setIsEmpty(!isRefinementEmpty && !isLoading && isFocused);
  }, [normalizedHits, isRefinementEmpty, isLoading, isFocused, setIsEmpty]);

  if (
    !isRefinementEmpty &&
    isFocused &&
    !isHideHits &&
    normalizedHits.length > 0
  ) {
    return (
      <S.List id="hits-box">
        {normalizedHits.map((hit, index) => (
          <S.ListItem key={`${hit.objectID || hit.path}-${index}`}>
            <a
              href={`https://docs.dasha.ai${hit.path}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="hover-bg"></div>
              <div className="title-container">
                {hit.higherParentSectionTitle &&
                  hit.higherParentSectionTitle !== hit.title &&
                  hit.higherParentSectionTitle !== hit.parentSectionTitle && (
                    <>
                      <span className="title">
                        {hit.higherParentSectionTitle}
                      </span>
                      <ArrowLeftIcon />
                    </>
                  )}
                {hit.title === hit.parentSectionTitle ? (
                  <span className="title">
                    <Highlight hit={hit} attribute="title" />
                  </span>
                ) : (
                  <>
                    <span className="title">
                      {isAttrHighlight(hit, "title") ? (
                        hit.parentSectionTitle
                      ) : (
                        <Highlight hit={hit} attribute="parentSectionTitle" />
                      )}
                    </span>
                    <ArrowLeftIcon />
                    <span className="title">
                      <Highlight hit={hit} attribute="title" />
                    </span>
                  </>
                )}
              </div>
              {hit.text && (
                <div className="text-container">
                  <span className="text">
                    <Highlight hit={hit} attribute="text" />
                  </span>
                </div>
              )}
            </a>
          </S.ListItem>
        ))}
      </S.List>
    );
  }

  if (
    !isRefinementEmpty &&
    isFocused &&
    !isLoading &&
    !isHideHits &&
    normalizedHits.length === 0
  ) {
    return (
      <S.List as="div" empty={1}>
        <span className="empty-msg">Not found</span>
      </S.List>
    );
  }

  return null;
};

export default connectHits(Hits);
