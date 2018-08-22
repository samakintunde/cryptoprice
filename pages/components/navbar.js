import Link from "next/link";

const Navbar = () => (
  <nav>
    <h1>Crypto Price</h1>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
    </ul>
    <style jsx>
      {`
        nav {
          font-family: Montserrat, arial, san-serif;
          background-color: #ff144a;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        h1 {
          margin-left: 1em;
          color: #ffffff;
          text-transform: uppercase;
        }

        ul {
          margin-right: 2em;
        }

        ul li {
          display: inline-block;
        }
        ul li a {
          color: #ffffff;
          text-decoration: none;
          margin-right: 2em;
          transition: 0.3s;
        }
        ul li a:hover {
          color: #dddddd;
          cursor: pointer;
        }
      `}
    </style>
  </nav>
);

export default Navbar;
