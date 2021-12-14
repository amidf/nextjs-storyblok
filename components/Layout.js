import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Layout = ({ children, locale, locales, defaultLocale }) => (
  <>
    <Head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-214983354-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-214983354-1');`,
        }}
      ></script>

      <script
        async
        src="https://www.googleoptimize.com/optimize.js?id=OPT-T9CBT3Z"
      ></script>
    </Head>
    <div className="bg-gray-300">{children}</div>
  </>
);

export default Layout;
