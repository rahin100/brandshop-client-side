import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white">
        <aside>
          <Link to={"/"}>
            <img
              className="w-[230px]"
              src="https://svgshare.com/i/yeZ.svg"
              alt=""
            />
          </Link>
          <p>
            PoshParade Ltd.
            <br />
            Where Elegance Meets the Runway
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white">Services</header>
          <a className="link link-hover ">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title text-white">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
