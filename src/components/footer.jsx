import { Link } from "react-router-dom";
import instagram from "../icons/Instagram.png";
import telegram from "../icons/telegram.png";
import github from "../icons/github.png";
import up from "../icons/up.png";
// Date auto Copyright {new Date().getFullYear()}

export default function Footer() {
  return (
    <>
      <footer className="flex gap-8 flex-wrap content-center justify-center p-3 ">
        <p className="text-sm ">
          © <i>Copyright</i> {new Date().getFullYear()}{" "}
          <Link to="/">R4D3V</Link>{" "}
        </p>
        <div className="flex justify-around gap-12 ">
          <a
            href="http://github.com/r4d3v"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github}
              alt=""
              width={20}
              height={20}
              className="bg-white rounded-full"
            />
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
          <a href="#" className="bg-gray-300 rounded-md">
            <img src={up} alt="" width={20} height={20} />
          </a>
        </div>
      </footer>
    </>
  );
}
