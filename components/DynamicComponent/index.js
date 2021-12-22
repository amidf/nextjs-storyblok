import Page from "../Page";
import PostPage from "../PostPage";
import Heading1 from "../Heading1";
import Heading2 from "../Heading2";
import Heading3 from "../Heading3";
import Section from "../Section";
import Paragraph from "../Paragraph";
import Row from "../Row";
import LinkButton from "../LinkButton";
import Video from "../Video";

const Components = {
  page: Page,
  post: PostPage,
  section: Section,
  row: Row,
  "link-button": LinkButton,
  "heading-1": Heading1,
  "heading-2": Heading2,
  "heading-3": Heading3,
  paragraph: Paragraph,
  video: Video,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return null;
};

export default DynamicComponent;
