import { Link } from "react-router-dom";
import "../index.css";

function faq() {
  return (
    <div className="container mx-auto w-full px-3">
      <div className="container px-3 py-4 rounded-lg bg-[rgba(255,255,255,0.05)] border-2 shadow-lg shadow-gray-950 backdrop-blur">
        <h1 className="text-2xl text-black font-semibold text-center underline uppercase lg:text-3xl ">
          Portfolio
        </h1>

        <p className="mt-4 text-center  ">
          I hereby present to you my recent projects. <hr />
          You can have a{" "}
          <span className="text-black font-extrabold">Look through.</span>
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div
            id="p1"
            className="border overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h1 className="mt-4 text-xl font-semibold text-white capitalize">
                REED-MEDIA
              </h1>
              <p className="py-4 mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Branding & website design agency
              </p>
              <button className="w-fill  bg-gray-600 text-white uppercase p-3 rounded-2xl animate-pulse">
                <a
                  href="http://reedmedia.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  check me out
                </a>
              </button>
            </div>
          </div>
          <div
            id="p2"
            className="border overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h1 className="mt-4 text-xl font-semibold text-white capitalize">
                REED-STORES
              </h1>
              <p className="py-4 mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Online shop & Gadgets Store
              </p>
              <button className="w-fill  bg-gray-600 text-white uppercase p-3 rounded-2xl animate-pulse">
                <a
                  href="http://reedstores.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  check me out
                </a>
              </button>
            </div>
          </div>
          <div
            id="p3"
            className="border overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h1 className="mt-4 text-xl font-semibold text-white capitalize">
                SKILLS PHONE SERVICE CENTRE
              </h1>
              <p className="py-4 mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Repairing service for mobile devices and computers
              </p>
              <button className="w-fill  bg-gray-600 text-white uppercase p-3 rounded-2xl animate-pulse">
                <a
                  href="http://skillphoneservices.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  check me out
                </a>
              </button>
            </div>
          </div>
          <div
            id="p4"
            className="border overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <h1 className="mt-4 text-xl font-semibold text-white capitalize">
                R4D3V
              </h1>
              <p className="py-4 mt-2 text-lg tracking-wider text-blue-400 uppercase ">
                Branding & website design agency
              </p>
              <button className="w-fill  bg-gray-600 text-white uppercase p-3 rounded-2xl animate-pulse">
                <a
                  href="http://t.me/patrolfx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  check me out
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="button"
        className="flex justify-center my-4 p-24 text-black font-extrabold rounded-lg"
      >
        <button className="py-2 animate-bounce backdrop-blur border-2 uppercase bg-[rgba(255,255,255,0.07)] p-2 rounded-2xl text-center w-fit">
          <Link to="/contact">Lets build something!</Link>
        </button>
      </div>
    </div>
  );
}

export default faq;
