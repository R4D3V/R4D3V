import whatsapp from "../icons/whatsapp.png";
import instagram from "../icons/Instagram.png";
import telegram from "../icons/telegram.png";
import { Link } from "react-router-dom";
function contact() {
  return (
    <div className="container px-6 py-8 mx-auto w-full ">
      <div className="pt-4 text-center">
        <p className="font-extrabold text-4xl ">Contact Me</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 sm:grid-cols-2 place-content-center just p-6">
        <div
          className="bg-gray-600 text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
       shadow-gray-800 shadow-xl p-6"
        >
          <span className="inline-block p-3 animate-bounce text-blue-500 rounded-full">
            <a href="mailto:raymonjohns@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </a>
          </span>

          <h2 className="mt-4 text-base font-medium  ">Email</h2>
          <p className="mt-2 text-sm  ">Reach out to me am ready to help.</p>
          <p className="mt-2 text-sm text-black font-bold">
            <a href="mailto:raymonjohns@gmail.com">raymonjohns@gmail.com</a>
          </p>
        </div>

        <div
          className="bg-gray-600 text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
       shadow-gray-800 shadow-xl p-6"
        >
          <span className="inline-block animate-bounce p-3 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </span>
          <h2 className="mt-4 text-base font-medium  ">Office</h2>
          <p className="mt-2 text-sm  ">Come say hello.</p>
          <p className="mt-2 text-sm text-black font-bold">
            <a
              href="https://maps.app.goo.gl/b16NN8czvGW3CgN18"
              target="_blank"
              rel="noopener noreferrer"
            >
              26°15'28.2"N 50°37'07.5"E 7J59+4GQ, Muharraq.
            </a>
          </p>
        </div>

        <div
          className="bg-gray-600 text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
       shadow-gray-800 shadow-xl p-6"
        >
          <span className="inline-block animate-bounce p-3 text-blue-500 rounded-full ">
            <a href="tel:+973 37559735">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </a>
          </span>

          <h2 className="mt-4 text-base font-medium  ">Phone</h2>
          <p className="mt-2 text-sm  ">Mon-Fri from 8am to 5pm.</p>
          <p className="mt-2 text-sm text-black font-bold">
            <a href="tel:+973 37559735">+973 37559735</a>
          </p>
        </div>

        <div
          className="bg-gray-600 text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
       shadow-gray-800 shadow-xl p-6"
        >
          <span className=" inline-block  rounded-full  ">
            <a href="https://wa.me/message/EMSUIOYUA5SDI1">
              <img
                src={whatsapp}
                alt=""
                className="w-12 p-1 h-12 animate-bounce  flex-shrink-0"
              />
            </a>
          </span>

          <h2 className="mt-3 text-base font-medium  ">Whatsapp</h2>
          <p className="mt-2 text-sm  ">Mon-Fri from 8am to 5pm.</p>
          <p className="mt-2 text-sm text-black font-bold">
            <a href="https://wa.me/message/EMSUIOYUA5SDI1"> +973 37559735 </a>
          </p>
        </div>

        <div
          className="bg-gray-600 text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
       shadow-gray-800 shadow-xl p-6"
        >
          <span className=" inline-block rounded-full  ">
            <a href="https://www.instagram.com/r4d3v/">
              <img
                src={instagram}
                alt=""
                className="w-12 p-1 h-12 animate-bounce  flex-shrink-0"
              />
            </a>
          </span>

          <h2 className="mt-3 text-base font-medium  ">Instagram</h2>
          <p className="mt-2 text-sm  ">Mon-Fri from 8am to 5pm.</p>
          <p className="mt-2 text-sm text-black font-bold">
            <a href="https://www.instagram.com/r4d3v/">R4D3V</a>
          </p>
        </div>

        <div
          className="bg-gray-600 text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
       shadow-gray-800 shadow-xl p-6"
        >
          <span className=" inline-block rounded-full  ">
            <a href="https://t.me/patrolfx">
              <img
                src={telegram}
                alt=""
                className="w-12 p-1 h-12 animate-bounce  flex-shrink-0"
              />
            </a>
          </span>

          <h2 className="mt-3 text-base font-medium  ">Telegram</h2>
          <p className="mt-2 text-sm  ">Mon-Fri from 8am to 5pm.</p>
          <p className="mt-2 text-sm text-black font-bold">
            <a href="https://t.me/patrolfx">PATROLFX</a>
          </p>
        </div>
      </div>
      <div className="flex pt-4 justify-center ">
        <button className="py-2 hover:animate-pulse backdrop-blur border-2 uppercase bg-[rgba(255,255,255,0.07)] p-2 rounded-2xl text-center w-fit">
          <Link to="/portfolio">My work</Link>
        </button>
      </div>
    </div>
  );
}

export default contact;
