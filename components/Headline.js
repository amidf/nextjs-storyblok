import React from "react";
import { sbEditable } from "@storyblok/storyblok-editable";

const Headline = ({ blok }) => {
  return (
    <div {...sbEditable(blok)} key={blok._uid} className="bg-white-half">
      <div className="pb-6 pt-16 container mx-auto">
        <h2 className="text-6xl font-bold font-serif text-primary mb-4">
          {blok.text}
        </h2>
      </div>
    </div>
  );
};

export default Headline;
