import { useTypewriter } from "react-simple-typewriter";
import image from "../assets/android-chrome-512x512.png";
import { Link } from "react-router-dom";


function Home() {
  const [typeEffect] = useTypewriter({
    words: [""],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
       <div className="flex flex-col md:flex-row mt-[82px] lg:mb-28 md:mb-28 ">
        <div className="flex justify-center items-center">
          <img
            src={image}  
            alt="r4d3v"
            className="w-[50%] rounded-md"
          />
        </div>
        <div className="p-[10%] lg:w-[50%] flex justify-center pb-6 relative flex-wrap">
        <h1>Hi there you made it up to here!</h1>
        <p className="mx-1 font-semibold text-2xl text-center">
          I am Frontend Dev, Freelancer,Ui/Ux designer!
          <span className="pl-2">{typeEffect}</span>
        </p>
       
         <div className="flex flex-wrap justify-center gap-2 m-3">
         <button className="flex items-center px-2 py-1  font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <Link
                 
            to="/services">
                  SERVICES
                </Link>
          </button>
          <button className="flex items-center px-2 py-1 font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <Link
                 
            to="/portfolio">
                  PORTFOLIO
                </Link>
          </button>
          <button className="flex items-center px-2 py-1 font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <a href="https://dumani-media.vercel.app/products" target="_blank" rel="noopener noreferrer">HOT DEALS</a>
          </button>
         </div>
        </div>
      </div> 
  );
}

export default Home;
