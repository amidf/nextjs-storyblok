import { useState, useEffect } from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

import { useBreakpoint } from "../../hooks";
import * as S from "./styled";
import TextIcon from "./assets/text.svg";
import CodeIcon from "./assets/code.svg";
import TabSelector from "./components/TabSelector";
import DynamicComponent from "../DynamicComponent";

const CodeTutorials = ({ blok }) => {
  console.log({ blok });

  const isMobile = useBreakpoint(1200);
  const [isCodeOpen, setCodeOpen] = useState(0);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    if (blok.body[activeTabIndex]) {
      setActiveTab(blok.body[activeTabIndex]);
    }
  }, [blok, activeTabIndex, setActiveTab]);

  const handleTabChange = (i) => () => setActiveTabIndex(i);

  return activeTab ? (
    <S.Container {...sbEditable(blok)} key={blok._uid}>
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
            items={blok.body}
            activeItemIndex={activeTabIndex}
            onChange={handleTabChange}
          />
          <div className="text-box">
            <p className="text">{activeTab?.text}</p>
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
            <DynamicComponent blok={activeTab.files[0]} />
          </S.CodeBlock>
        ))}
    </S.Container>
  ) : null;
};

export default CodeTutorials;
