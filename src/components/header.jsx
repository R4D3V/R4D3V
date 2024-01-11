// Date auto Copyright {new Date().getFullYear()}
import favicon from "../assets/android-chrome-192x192.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <>
      <header className="border-b-1 z-20 w-full border-b shadow-lg  after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full lg:backdrop-blur-sm lg:after:hidden fixed top-0">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation">
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)">
              <Link to="/">
                <img
                  src={favicon}
                  alt="D"
                  className=" object-cover w-[70px] h-[70px]"
                />
              </Link>
              {/* Brand */}
            </a>
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation">
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
              </div>
            </button>
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}>
              {/* <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/products"
                  onClick={() => setIsToggleOpen(false)}>
                  <span>HOT DEALS</span>
                </Link>
              </li> */}
              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/services"
                  onClick={() => setIsToggleOpen(false)}>
                  <span>SERVICES</span>
                </Link>
              </li>

              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/contact"
                  onClick={() => setIsToggleOpen(false)}
                >
                  <span>CONTACT</span>
                </Link>
              </li>

              <li role="none" className="flex items-stretch">
                <Link
                  role="menuitem"
                  aria-haspopup="false"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-indigo-500 focus:text-indigo-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/about"
                  onClick={() => setIsToggleOpen(false)}>
                  <span>ABOUT ME</span>
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-indigo-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-indigo-200 transition duration-300 hover:bg-indigo-600 hover:shadow-sm hover:shadow-indigo-200 focus:bg-indigo-700 focus:shadow-sm focus:shadow-indigo-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-indigo-300 disabled:bg-indigo-300 disabled:shadow-none">
                <span>
                  <Link to="/Portfolio" onClick={() => setIsToggleOpen(false)}>
                    PORTFOLIO
                  </Link>
                </span>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
