import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="p-2 w-full ">
      <div className="container p-2 m-1 ">
        <div className="flex justify-around">
          <div className="">
            <p className="font-semibold">Quick Link</p>
            <div className="flex flex-col items-start  space-y-2 ">
              <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                <Link to="/">HOME</Link>
              </p>
              <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                <Link to="/Products">SHOP</Link>
              </p>
              <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                Our Philosophy
              </p>
            </div>
          </div>

          <div className="">
            <p className="font-semibold ">Industries</p>

            <div className="flex flex-col items-start  space-y-2">
              <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                Retail & E-Commerce
              </p>
              <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                Information Technology
              </p>
              <p className=" transition-colors duration-300  hover:underline hover:cursor-pointer hover:text-blue-500">
                Finance & Insurance
              </p>
            </div>
          </div>
        </div>

        <hr className="my-3 border-gray-200 md:my-3 dark:border-gray-700 " />

        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-1 gap-4 hover:cursor-pointer">
            <img
              src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
              width="65"
              height="60"
              alt=""
            />
            <img
              src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
              width="65"
              height="110"
              alt=""
            />
          </div>

          <div className="flex gap-4">
            <img
              className="hover:cursor-pointer"
              src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
              width="20"
              height="20"
              alt="inst"
            />
            <img
              src="https://www.svgrepo.com/show/94698/github.svg"
              className="hover:cursor-pointer"
              width="20"
              height="20"
              alt="gt"
            />
          </div>
        </div>
        <p className="font-sans p-1 text-start md:text-center md:text-lg md:p-1">
          © 2024 You Company Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
