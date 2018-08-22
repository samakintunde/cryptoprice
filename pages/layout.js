import Navbar from "./components/navbar";

const Layout = props => (
  <div>
    <Navbar />
    {props.children}

    <style jsx>
      {`
        div {
          padding: 0;
          margin: 0;
        }
      `}
    </style>
  </div>
);

export default Layout;
