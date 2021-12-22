import React, { useState, useEffect } from "react"

import { useBreakpoint } from "../../common/hooks"
import { Heading } from "../uikit/Typographic"
import ExampleCode from "../uikit/ExampleCode"
import TabSelector from "./components/TabSelector"
import TextIcon from "./assets/text.svg"
import CodeIcon from "./assets/code.svg"
import * as S from "./styled"

const InteractiveSamples = ({ content }) => {
  const isMobile = useBreakpoint(1200)
  const [isCodeOpen, setCodeOpen] = useState(0)
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const [activeTab, setActiveTab] = useState(null)

  useEffect(() => {
    if (content.tabs[activeTabIndex]) {
      setActiveTab(content.tabs[activeTabIndex])
    }
  }, [content, activeTabIndex, setActiveTab])

  const handleTabChange = i => () => setActiveTabIndex(i)

  return activeTab ? (
    <S.Section id="CodeSamples">
      <Heading>{content.title}</Heading>
      <S.Container>
        {isMobile && (
          <S.Tabs>
            <S.Tab isActive={!isCodeOpen} onClick={() => setCodeOpen(false)}>
              <TextIcon /> <span>text</span>
            </S.Tab>
            <S.Tab isActive={isCodeOpen} onClick={() => setCodeOpen(true)}>
              <CodeIcon /> <span>code</span>
            </S.Tab>
          </S.Tabs>
        )}

        {(!isMobile || isCodeOpen == 0) && (
          <S.TextBlock>
            <h3>{activeTab.title}</h3>
            <TabSelector
              items={content.tabs}
              activeItemIndex={activeTabIndex}
              onChange={handleTabChange}
            />
            <div className="text-box">
              <p className="text">{activeTab?.content}</p>
            </div>
          </S.TextBlock>
        )}

        {(!isMobile || isCodeOpen == 1) &&
          (activeTab.img ? (
            <S.ImgBlock>
              <img className="lazyload" data-src={activeTab.img} alt="Image" />
            </S.ImgBlock>
          ) : (
            <S.CodeBlock>
              <ExampleCode samples={activeTab.files} />
            </S.CodeBlock>
          ))}
      </S.Container>
    </S.Section>
  ) : null
}

export default InteractiveSamples
