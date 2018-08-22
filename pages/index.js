import Layout from "./components/layout";
import Head from "next/head";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      value: 0
    };
  }
  getRate = () => {
    const req = fetch(`https://rest.coinapi.io/${query.id}`);
    const story = req.json();
    return { story };
  };

  handleChange = e => {
    this.setState({ amount: e.target.value });
  };

  handleSubmit = e => {
    console.log(this.state.amount);
  };

  render() {
    return (
      <Layout>
        <Head>
          <title>Crypto Price</title>
        </Head>

        <div>
          <h1>Welcome to Crypto Price</h1>

          <div>
            <p>
              1 BTC = <span>{this.state.value}</span>
              USD
            </p>
          </div>

          <label htmlFor="test">Enter Amount here:</label>
          <input
            type="text"
            name="test"
            id="test"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handleSubmit}>
            Convert
          </button>
        </div>

        <style jsx>
          {`
            div {
              padding: 2em;
              font-family: "Open Sans", arial, sans-serif;
            }
          `}
        </style>
      </Layout>
    );
  }
}
export default Index;
