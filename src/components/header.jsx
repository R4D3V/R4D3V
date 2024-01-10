// Date auto Copyright {new Date().getFullYear()}
import home from "../icons/home.png";
import contact from "../icons/contact.png";
import portfolio from "../icons/portfolio.png";
import about from "../icons/about.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <nav className="">
        <div className=" sm:hidden fixed bottom-0 top-0 flex justify-center w-full p-4">
          <div className="flex justify-center">
            <Link to="/" className="mx-5 ">
              <img src={home} alt="RS" className="w-10 h-10" />
            </Link>
            <Link to="/about" className="mx-5 ">
              <img src={about} alt="RS" className="w-10 h-10" />
            </Link>
            <Link to="/contact" className="mx-5 ">
              <img src={contact} alt="RS" className="w-10 h-10" />
            </Link>
            <Link to="/products" className="mx-5 ">
              <img src={portfolio} alt="RS" className="w-10 h-10" />
            </Link>
          </div>
        </div>

        <div className="lg:hidden md:hidden fixed bottom-0 left-0 w-full p-4">
          <div className="flex justify-center">
            <Link to="/" className="mx-5 ">
              <img src={home} alt="RS" className="w-10 h-10" />
            </Link>
            <Link to="/about" className="mx-5 ">
              <img src={about} alt="RS" className="w-10 h-10" />
            </Link>
            <Link to="/contact" className="mx-5 ">
              <img src={contact} alt="RS" className="w-10 h-10" />
            </Link>
            <Link to="/products" className="mx-5 ">
              <img src={portfolio} alt="RS" className="w-10 h-10" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
