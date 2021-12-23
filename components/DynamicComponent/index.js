import Page from "../Page";
import PostPage from "../PostPage";
import Heading1 from "../Heading1";
import Heading2 from "../Heading2";
import Heading3 from "../Heading3";
import Heading5 from "../Heading5";
import Section from "../Section";
import Paragraph from "../Paragraph";
import Row from "../Row";
import LinkButton from "../LinkButton";
import Video from "../Video";
import FeatureSection from "../FeatureSection";
import FeatureParagraph from "../FeatureParagraph";
import CodeBlock from "../CodeBlock";
import Image from "../Image";
import SpaceDivider from "../SpaceDivider";
import CodeTutorials from "../CodeTutorials";
import SectionCaption from "../SectionCaption";
import CardCarousel from "../CardCarousel";
import Card from "../Card";

const Components = {
  page: Page,
  post: PostPage,
  section: Section,
  row: Row,
  "link-button": LinkButton,
  "heading-1": Heading1,
  "heading-2": Heading2,
  "heading-3": Heading3,
  "heading-5": Heading5,
  paragraph: Paragraph,
  video: Video,
  "feature-section": FeatureSection,
  "feature-paragraph": FeatureParagraph,
  "code-block": CodeBlock,
  image: Image,
  "space-divider": SpaceDivider,
  "code-tutorials": CodeTutorials,
  "section-caption": SectionCaption,
  "cards-carousel": CardCarousel,
  card: Card,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return null;
};

export default DynamicComponent;
