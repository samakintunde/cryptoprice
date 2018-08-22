import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

const Layout = props => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#ff6600" />
      <link rel="apple-touch-icon" href="../static/icon.png" />
      <link rel="shortcut icon" href="static/icon.png" type="image/x-icon" />
      <meta name="apple-mobile-web-app-title" content="Hacker News" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Head>

    <Navbar />

    {props.children}

    <Footer />

    <style jsx global>
      {`
        body {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
          height: 100vh;
        }
      `}
    </style>
  </div>
);

export default Layout;
