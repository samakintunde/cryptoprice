import Layout from "./components/layout";
import Head from "next/head";

const About = () => (
  <Layout>
    <Head>
      <title>Crypto Price - About</title>
    </Head>

    <div>
      <div>
        <h3>What is Crypto Price?</h3>
        <p>
          Crypto Price(
          <i>albeit a terrible name</i>) is a server side rendered react app
          that's used to get real-time values of cryptocurrencies. It's also a
          Progressive Web App in that it saves the last value fetched for
          offline use.
        </p>
      </div>
      <div>
        <h3>What tech was used?</h3>
        <p>
          <ul>
            <li>Node</li>
            <li>React</li>
            <li>Next</li>
            <li>Service Workers</li>
            <li>IndexedDB</li>
          </ul>
        </p>
      </div>
      <div />
    </div>
    <style jsx>
      {`
        div {
          font-family: sans-serif;
          padding: 2em;
          margin: 0 auto;
        }
        h3 {
          font-weight: 600;
          font-size: 1.25em;
        }
        p {
          margin-left: 1em;
        }
        ul {
          list-style: none;
        }
        ul li {
          margin: 0.5em 0;
        }
      `}
    </style>
  </Layout>
);

export default About;
