import iceage from "../assets/iceage.png"
import dumani from "../assets/dumani.png"

function Portfolio() {

  return (
      
      <div className="mt-[83px] flex flex-wrap gap-3">
      <div className="container px-6 py-10 mx-auto">
        <div className="text-center">
            <h1 className="text-2xl font-semibold  capitalize lg:text-3xl ">Recent Projects</h1>

            <p className="max-w-lg mx-auto mt-4 text-gray-500">
                Here are some of the projects i have been working on recently. You can check them out.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
                {/* <img src={iceage} className="relative z-10 object-cover w-full rounded-md h-96"  alt=""> */}
                <a href="https://iceagegaming.vercel.app/" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                <img src={iceage} alt="" className="relative z-10 object-cover w-full rounded-md h-96"/> 
                    </a>

               
                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="https://iceagegaming.vercel.app/" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        IceAge Gamining Bahrain
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                       At IceAge Gaming Bahrain we bring you all types of gaming accessories and consoles with out any hardships.
                    </p>

                    <p className="mt-3 text-sm text-blue-500">@ 2023</p>
                </div>
            </div>
            <div>
             
              <a href="https://dumani-media.vercel.app/" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
              <img src={dumani} alt="" className="relative z-10 object-cover w-full rounded-md h-96"/> 
                    </a>
                <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                    <a href="https://dumani-media.vercel.app/" className="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
                        Dumani Media
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                       Here at Dumani Media we connect you to the different businesses you would like to know or you might need any time.  We also offer advertising and some quick deals in secondhand staff are also available in real time.
                    </p>

                    <p className="mt-3 text-sm text-blue-500">@ 2023</p>
                </div>
                
            </div>
           
        </div>
    </div>
      </div>

  );
}

export default Portfolio;
