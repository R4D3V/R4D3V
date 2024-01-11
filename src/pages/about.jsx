// import reactSvg from "../assets/react.svg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container mx-auto p-5 mt-[88px]">
      <div className="py-2 shadow-xl mb-4 rounded">
        <h2 className="text-4xl font-bold  text-center uppercase font-serif underline">
          About Me.
        </h2>
        <p className=" font-bold  text-center uppercase ">
          We are a team of self motivated creators and created our own path to
          this journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://placekitten.com/800/600" // Replace with your image URL
            alt="About Us"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            justo eu ex condimentum fermentum vel id eros. Vivamus vehicula
            fringilla turpis, vel ornare tortor elementum vel.
          </p>
          <p className="text-lg">
            Nullam vel nunc quis justo facilisis facilisis ac vel quam. Quisque
            eu rhoncus lacus. Phasellus tristique mi nec eros tincidunt, ut
            vestibulum leo blandit.
          </p>
          <button className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <Link
                 
            to="/services">
                  SERVICES
                </Link>
          </button>
        </div>
      </div>
      <hr className="w-full h-6 shadow-black m-2" />
   

      <div className="p-6 py-6 rounded-lg  md:p-8 shadow-2xl">
        <div className="container p-2 flex text-center">
          <h1 className=" font-extrabold flex text-center">
            FEEL FREE TO ASK ANYTHING YOU WISH TO!
          </h1>
        </div>
        <form>
          <div className="-mx-2 md:items-center md:flex">
            <div className="flex-1 px-2">
              <label className="block mb-2 text-sm ">First Name</label>
              <input
                type="text"
                placeholder="John "
                className="block w-full px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="flex-1 px-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm">Last Name</label>
              <input
                type="text"
                placeholder="Doe"
                className="block w-full px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm ">Email address</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm ">Message</label>
            <textarea
              className="block w-full h-32 px-5 py-2.5 mt-2 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Message"
            ></textarea>
          </div>

          <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
export default About;
