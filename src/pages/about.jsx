import reactSvg from "../assets/react.svg";

function About() {
  return (
    <main className="p-3">
      <div className="min-h-screen flex items-center justify-around place-content-center bg-gray-100">
        <div className="container m-1 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Column 1 */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-4 text-blue-600">
                Contact Information 1
              </h2>
              <img
                src={reactSvg}
                alt="Contact 1"
                className="w-500 h-500 object-cover mb-4 rounded-full"
              />
              <p className="text-gray-700">
                <strong>Email:</strong> john.doe@example.com <br />
                <strong>Phone:</strong> +1 (123) 456-7890 <br />
                <strong>Location:</strong> City, Country
              </p>
            </div>

            {/* Column 2 */}
            <div className="mb-4">
              <h2 className="text-2xl font-bold mb-4 text-green-600">
                Contact Information 2
              </h2>
              <img
                src="https://placekitten.com/200/200" // Replace with your contact's image URL
                alt="Contact 2"
                className="w-500 h-500 object-cover mb-4 rounded-full"
              />
              <p className="text-gray-700">
                <strong>Email:</strong> jane.smith@example.com <br />
                <strong>Phone:</strong> +1 (987) 654-3210 <br />
                <strong>Location:</strong> Another City, Another Country
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="p-3 flex justify-center font-extrabold text-3xl m-1">
        <h1>THE TEAM BEHIND THE BACK DOORS</h1>
      </section>
      <div className="flex justify-around bg-gradient-to-b bg-gray-600">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:w-3/4 lg:w-1/2">
          {/* Contact Card 1 */}
          <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md backdrop-filter backdrop-blur-lg  hover:bg-sky-700 duration-1000 ">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <img
                src="https://placekitten.com/100/100" // Replace with your contact's profile picture URL
                alt="Profile"
                className="w-100 h-100 rounded-full border-4 border-white mb-4 md:mr-4 md:mb-0"
              />
              <div className="text-center">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  John Doe
                </h2>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Web Developer
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Contact Information
              </h3>
              <div className="mt-2 md:mt-4 text-gray-300 text-sm md:text-base lg:text-lg">
                <p>Email: john.doe@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Location: City, Country</p>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Social Media
              </h3>
              <div className="mt-2 md:mt-4 flex justify-center md:justify-start">
                <a href="#" className="text-blue-300 hover:text-blue-400 mr-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600 mr-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Card 2 */}
          <div className="bg-white bg-opacity-20 p-4 rounded-lg shadow-md backdrop-filter backdrop-blur-lg  hover:bg-sky-700 duration-1000 ">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <img
                src="https://placekitten.com/100/100" // Replace with your contact's profile picture URL
                alt="Profile"
                className="w-100 h-100 rounded-full border-4 border-white mb-4 md:mr-4 md:mb-0"
              />
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                  John Doe
                </h2>
                <p className="text-gray-300 text-sm md:text-base lg:text-lg">
                  Web Developer
                </p>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Contact Information
              </h3>
              <div className="mt-2 md:mt-4 text-gray-300 text-sm md:text-base lg:text-lg">
                <p>Email: john.doe@example.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Location: City, Country</p>
              </div>
            </div>

            <div className="mt-6 md:mt-8">
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white">
                Social Media
              </h3>
              <div className="mt-2 md:mt-4 flex justify-center md:justify-start">
                <a href="#" className="text-blue-300 hover:text-blue-400 mr-4">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-blue-500 hover:text-blue-600 mr-4">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-600">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <p className="text-lg leading-relaxed mb-8">
          Hey there! I am [Your Name], a passionate web developer with a love
          for building exceptional digital experiences. I specialize in
          front-end development using modern technologies like React and Vue.js.
          My journey in the world of programming started with a curiosity to
          bring ideas to life through code.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          With a background in [Your Relevant Background], I bring a unique
          blend of creativity and technical skills to every project I work on.
          My goal is to create websites and applications that not only look good
          but also provide a seamless user experience.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          When I am not coding, you can find me exploring the latest trends in
          web development, experimenting with new technologies, or enjoying a
          good cup of coffee while sketching out new ideas for my next project.
        </p>
        <p className="text-lg leading-relaxed">
          Let us collaborate and turn your ideas into reality! Feel free to
          <a
            href="#contact"
            className="text-blue-500 hover:underline transition duration-300"
          >
            get in touch
          </a>
          .
        </p>
      </div>
    </main>
  );
}

export default About;
