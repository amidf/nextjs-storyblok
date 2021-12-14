import Grid from "./Grid";
import Page from "./Page";
import Headline from "./Headline";
import Text from "./Text";

const Components = {
  grid: Grid,
  page: Page,
  headline: Headline,
  text: Text,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return null;
};

export default DynamicComponent;
