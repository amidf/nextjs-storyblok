import React, { useEffect, useState } from "react"
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share"

import FacebookIcon from "./assets/facebook-icon.svg"
import TwitterIcon from "./assets/twitter-icon.svg"
import LinkedInIcon from "./assets/linkedin-icon.svg"

import Sticky from "./sticky"
import * as S from "./styled"

const ShareButtons = ({ url, isThumbnailLoaded = false }) => {
  const [sticky, setSticky] = useState(null)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handler = () => {
      if (sticky && window.innerWidth < 992) {
        sticky.update()
        sticky.destroy()
        setSticky(null)
      }

      if (!sticky && window.innerWidth >= 992) {
        setSticky(new Sticky("#share"))
      }
    }

    handler()

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [sticky, setSticky])

  useEffect(() => {
    if (sticky && isThumbnailLoaded) {
      sticky.update()
    }
  }, [isThumbnailLoaded])

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 992) {
        return
      }

      const ctaEl = document.getElementById("cta") || {}

      if (window.pageYOffset >= ctaEl.offsetTop) {
        setIsFixed(false)
      } else {
        setIsFixed(true)
      }
    }

    handler()

    window.addEventListener("scroll", handler)

    return () => {
      window.removeEventListener("scroll", handler)
    }
  }, [setIsFixed])

  return (
    <>
      <S.Placeholder fixed={isFixed ? 1 : 0} />
      <S.Container
        id="share"
        fixed={isFixed ? 1 : 0}
        data-sticky
        data-margin-top="120"
        data-sticky-container
      >
        <FacebookShareButton url={url}>
          <FacebookIcon />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon />
        </TwitterShareButton>
        <LinkedinShareButton url={url}>
          <LinkedInIcon />
        </LinkedinShareButton>
      </S.Container>
    </>
  )
}

export default ShareButtons
