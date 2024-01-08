import reactSvg from "../assets/react.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <nav className=" p-4 flex justify-around">
      <div className="flex items-center">
        <Link to="/" className="">
          <img
            src={reactSvg}
            alt="Contact 1"
            className="w-500 h-500 object-cover mb-4 rounded-full"
          />
        </Link>
      </div>
      <div className="md:flex flex justify-evenly sm:flex sm:justify-evenly">
        <Link
          to="/Updates"
          className=" hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 "
        >
          UPDATES
        </Link>
        <Link
          to="/shop"
          className=" hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 "
        >
          SHOP
        </Link>
        <Link
          to="/services"
          className=" hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 "
        >
          SERVICES
        </Link>
        <Link
          to="/about"
          className=" hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 "
        >
          ABOUT
        </Link>
        <Link
          to="/contact"
          className=" hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 "
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
export default About;
