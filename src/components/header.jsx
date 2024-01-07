import reactSvg from "../assets/react.svg";

function Header() {
  return (
    <nav className="">
      <div className="container mx-auto">
        <div className="lg:flex lg:justify-between items-center">
          {/* Logo on the Left for Large Screens */}
          <div className="hidden lg:flex items-center">
            <img
              src={reactSvg}
              alt="Contact 1"
              className="w-500 h-500 object-cover mb-4 rounded-full"
            />
          </div>

          {/* Navigation for Large Screens (Fixed at Top) */}
          <div className="hidden lg:flex lg:items-center">
            <a href="#" className="mr-4 hover:text-gray-300">
              Home
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              About
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              Services
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Logo Hidden on Small Screens */}
      <div className="lg:hidden  md:hidden text-center">
        <a href="#" className="text-lg font-bold sm:hidden p-0">
          <img
            src={reactSvg}
            alt="Contact 1"
            className="w-500 h-500 object-cover mb-4 rounded-full"
          />
        </a>
      </div>

      {/* Navigation for Small Screens (Fixed at Bottom) */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-red-700 p-4">
        <div className="flex justify-center">
          <a href="#" className="mr-4 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="mr-4 hover:text-gray-300">
            About
          </a>
          <a href="#" className="mr-4 hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
