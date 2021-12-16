import DynamicComponent from "./DynamicComponent";
import Layout from "./Layout";
import { sbEditable } from "@storyblok/storyblok-editable";

const Page = ({ blok }) => (
  <Layout>
    <main {...sbEditable(blok)} key={blok._uid}>
      {blok.body
        ? blok.body.map((blok) => (
            <DynamicComponent blok={blok} key={blok._uid} />
          ))
        : null}
    </main>
  </Layout>
);

export default Page;
