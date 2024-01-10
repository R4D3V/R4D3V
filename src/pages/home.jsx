import { useTypewriter } from "react-simple-typewriter";
function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Dev, Freelancer,Ui/Ux designer"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <main className="">
      <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300 sm:hidden">
        <a
          href="#"
          className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
        >
          home
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          features
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          pricing
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          blog
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          svg
        </a>

        <a
          href="#"
          className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z" />
            <path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z" />
            <path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z" />
          </svg>
        </a>
      </div>
      <div>
        <p className="mx-1 font-semibold">
          PLAY VIDEO
          <span>{typeEffect}</span>
        </p>
        <div className="relative overflow-hidden bg-white shadow-2xl rounded-xl w-full md:w-72 lg:w-96 mx-auto my-4 transition-transform transform hover:scale-105 ">
          <div className="relative h-48 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
              alt="product"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex justify-between mb-2">
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                Apple AirPods
              </p>
              <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                $95.00
              </p>
            </div>
            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
              With plenty of talk and listen time, voice-activated Siri access,
              and an available wireless charging case.
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
              type="button"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
