import Link from "next/link";

const Navbar = () => (
  <nav>
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
          background-color: #147dff;
          padding: 0.5em;
        }

        ul li {
          display: inline-block;
          margin-right: 1em;
        }
        ul li a {
          color: #ffffff;
        }
      `}
    </style>
  </nav>
);

export default Navbar;
