import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800 flex flex-wrap justify-center text-center">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://github.com/r4d3v" className="hover:underline">
            <Link to="/">R4D3V™</Link>
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 ">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              <Link to="/updates">Updates</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              <Link to="/products">Shop</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              <Link to="/about">About</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <Link to="/services">Services</Link>
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              <Link to="/contact">Contact</Link>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
