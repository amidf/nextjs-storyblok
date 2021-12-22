import { useRef } from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

import PlayIcon from "./assets/play.svg";
import * as S from "./styled";
import usePlayer from "./usePlayer";

const Video = ({ blok }) => {
  const ref = useRef();
  usePlayer(ref);

  return (
    <S.Container {...sbEditable(blok)} key={blok._uid}>
      <S.Video ref={ref}>
        <PlayIcon />
        <iframe
          title="Dasha.AI Demo"
          src={blok.videoUrl.url}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </S.Video>
    </S.Container>
  );
};

export default Video;
