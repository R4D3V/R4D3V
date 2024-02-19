import { Link } from "react-router-dom";
import instagram from "../icons/Instagram.png";
import telegram from "../icons/telegram.png";
import github from "../icons/github.png";

const Nav = () => {
  return (
    <div className="container mx-auto w-full p-2">
      <div
        className="rounded-lg bg-[rgba(255,255,255,0.05)] border-1 p-4 text-center shadow-lg shadow-gray-950 backdrop-blur 
      flex justify-around gap-3 "
      >
        <div className=" font-bold">
          <h1 className="text-xl">
            <Link to="/">R4D3V</Link>
          </h1>
        </div>
        <div className="flex items-center justify-around gap-8">
          <a
            href="http://github.com/r4d3v"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full"
          >
            <img src={github} alt="" width={20} height={20} />
          </a>
          <a
            href="http://t.me/patrolfx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} alt="" width={20} height={20} />
          </a>
          <a
            href="http://instagram.com/r4d3v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="" width={20} height={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
