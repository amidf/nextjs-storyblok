import Page from "./Page";
import PostPage from "./PostPage";

const Components = {
  page: Page,
  post: PostPage,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return null;
};

export default DynamicComponent;
