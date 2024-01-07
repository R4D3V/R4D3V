import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="font-bold uppercase p-2 flex-wrap sticky top-0 shadow-lg z-50 sm:text-2 ">
      <nav className="p-2">
        <div className="container mx-auto flex justify-center items-center">
          <div className="mr-auto">
            <Link to="/">
            LOGO
            </Link>
          </div>

          <div className="flex space-x-4 sm:text-black">
            <a href="#" className=" ">
              <Link to="/Updates">updates</Link>
            </a>
            <a href="#" className=" ">
              <Link to="/Services">services</Link>
            </a>
            <a href="#" className=" ">
              <Link to="/About">about</Link>
            </a>
            <a href="#" className=" ">
              <Link to="/Contact">contact</Link>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
