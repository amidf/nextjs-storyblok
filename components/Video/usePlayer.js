import { useEffect } from "react";
import Player from "@vimeo/player";

const usePlayer = (ref) => {
  useEffect(() => {
    if (!ref.current) return;

    const button = ref.current.querySelector("svg");
    const iframe = ref.current.querySelector("iframe");
    const player = new Player(iframe);

    button.addEventListener("click", () => player.play());
    player.on("play", () => button.classList.add("hide"));
    player.on("ended", () => button.classList.remove("hide"));
    player.on("pause", () => button.classList.remove("hide"));
  }, [ref]);
};

export default usePlayer;
