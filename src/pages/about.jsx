
function About() {
  return (
      <nav className="bg-gray-800 p-4 flex justify-around">
       <div className="flex items-center">
            <span className="text-white font-bold text-lg ">Your Logo</span>
          </div>
          <div className="md:flex flex justify-evenly sm:flex sm:justify-evenly">
            <a href="#" className="text-white hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 ">UPDATES</a>
            <a href="#" className="text-white hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 ">SERVICES</a>
            <a href="#" className="text-white hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 ">SHOP</a>
            <a href="#" className="text-white hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 ">ABOUT</a>
            <a href="#" className="text-white hover:text-gray-300 py-2 md:py-0 md:ml-4 sm:font-bold sm:text-1 p-2 ">CONTACT</a>
          </div> 
      </nav>
  );
}
export default About;