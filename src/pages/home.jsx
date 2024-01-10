import { useTypewriter } from "react-simple-typewriter";
import image from "../assets/android-chrome-512x512.png"


function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Dev, Freelancer,Ui/Ux designer"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <main className="container flex flex-wrap justify-around h-[70vh]">
        <div className="mt-[88px] relative overflow-hidden bg-white shadow-2xl w-full md:w-72 lg:w-96 mx-auto my-4 transition-transform transform text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <div className="flex justify-center items-center relative h-full overflow-hidden">
        <h1>Hi there you made it up to here!</h1>
        <p className="mx-1 font-semibold">
          I am =
          <span>{typeEffect}</span>
        </p>
        </div>
        {/* <div className="p-6">
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
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </div> */}
      </div>
        <div className="lg:mt-[88px] relative overflow-hidden bg-white shadow-2xl w-full md:w-72 lg:w-96 mx-auto my-4 transition-transform transform  text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
        <div className="relative h-full overflow-hidden">
        <img src={image} alt="rd" className="relative" />
        </div>
        {/* <div className="p-6">
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
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none   focus:scale-105 focus:shadow-none active:scale-100"
            type="button"
          >
            Add to Cart
          </button>
        </div> */}
      </div>
        
    </main>
  );
}

export default Home;
