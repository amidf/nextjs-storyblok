import { sbEditable } from "@storyblok/storyblok-editable";

import Button from "../Button";

const LinkButton = ({ blok }) => {
  return (
    <Button
      url={blok.url.url}
      inverse={blok.inverse}
      {...sbEditable(blok)}
      color={blok.color}
      key={blok._uid}
    >
      {blok.label}
    </Button>
  );
};

export default LinkButton;
