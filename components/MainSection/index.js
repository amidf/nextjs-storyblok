import React, { useRef, useEffect } from "react"
import Player from "@vimeo/player"

import { Paragraph } from "../uikit/Typographic"
import Button from "../../newUikit/Button"
import PlayIcon from "./assets/play.svg"
import * as S from "./styled"

// import TerminalIcon from "./terminal.svg"
// import RunIcon from "./run.svg"
// import Terminal from "./Terminal"

const MainSection = ({ content }) => {
  //const [isTerminal, setTerminal] = useState(false)
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return

    const button = ref.current.querySelector("svg")
    const iframe = ref.current.querySelector("iframe")
    const player = new Player(iframe)

    button.addEventListener("click", () => player.play())
    player.on("play", () => button.classList.add("hide"))
    player.on("ended", () => button.classList.remove("hide"))
    player.on("pause", () => button.classList.remove("hide"))
  }, [ref])

  return (
    <S.Section id="MainSection">
      <S.Title>{content.title}</S.Title>
      <Paragraph>{content.description}</Paragraph>
      <S.ButtonsContainer>
        <Button color="cyan" url={content.signUpLink} target="_blank">
          {content.signUpBtn}
        </Button>
        {content.tryInBrowserLabel && (
          <Button
            color="cyan"
            target="_blank"
            inverse
            url={content.tryInBrowser}
          >
            {content.tryInBrowserLabel}
          </Button>
        )}
      </S.ButtonsContainer>

      <S.Video ref={ref}>
        <PlayIcon />
        <iframe
          title="Dasha.AI Demo"
          src={
            process.env.NODE_ENV === "development"
              ? content.fallbackVideo
              : content.video
          }
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </S.Video>

      {/* <S.Container>
        <S.CodeBlock samples={content.code} />
        <S.Terminal>
          {!isTerminal ? (
            <>
              <TerminalIcon />
              <Button onClick={() => setTerminal(true)}>
                Run <RunIcon />
              </Button>
            </>
          ) : (
            <Terminal />
          )}
        </S.Terminal>
      </S.Container> */}
    </S.Section>
  )
}

export default MainSection
