import reactSvg from "../assets/react.svg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="container ">
      <Link to="/" className="">
         <img
          src={reactSvg}              alt="Contact 1"
          className="w-500 h-500 object-cover mb-4 rounded-full"
      />
      </Link>
    <div >
      <Link to="/Updates">
        UPDATES
      </Link>
      <Link to="/services">
        SERVICES
      </Link>
      <Link to="/contact">
       CONTACT
      </Link>
      <Link to="/about">
        ABOUT
      </Link>
    </div>
    </nav>
  );
}

export default Header;
