import Link from "next/link";

const Footer = () => (
  <div>
    <ul>
      <li>
        <Link>
          <a className="fab fa-github" />
        </Link>
      </li>
      <li>
        <Link>
          <a className="fab fa-twitter" />
        </Link>
      </li>

      <li>
        <Link>
          <a className="fab fa-instagram" />
        </Link>
      </li>
    </ul>

    <p>samakintunde &copy;2018</p>
    <style jsx>
      {`
        div {
          position: absolute;
          bottom: 0;
          width: 100%;
          font-family: Montserrat, arial, sans-serif;
          background-color: #333333;
          color: #ffffff;
        }
        ul {
          margin: 0 auto;
          padding: 1em;
        }
        ul li {
          display: inline-block;
        }
        ul li a {
          color: #ffffff;
          font-size: 1.25em;
        }
        p {
          padding: 1em;
          font-weight: 300;
          font-size: 0.75em;
          text-align: center;
          text-transform: uppercase;
        }
      `}
    </style>
  </div>
);

export default Footer;
