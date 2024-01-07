function Home() {
  return (
    <main className="bg-gray-800 p-3">
      <div className="bg-opacity-10 bg-white p-8 rounded-md shadow-lg backdrop-blur-md w-full md:w-2/3 lg:w-1/2 md:m-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to My Website.
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Hi there! We are the new kids on the block and we build awesome
          websites and mobile apps..
        </p>
        <div className="flex justify-center">
          <a
            href="#"
            className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
      <section id="updates" className="sm:p-10 lg:p-20 p-5">
        <div className="sm:container mx-auto">
          <h2 className="text-center text-4xl pt-10 sm:pt-0 pb-10 uppercase underline font-extrabold">
            updates
          </h2>
          <div className="sm:grid grid-cols-2">
            <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
              <h3 className="text-xl mb-5 font-bold">Web Design</h3>
              <p className=" text-gray-500 text-justify">
                As a dedicated web design professional, I bring a creative and
                strategic approach to crafting visually stunning and
                user-centric websites. With a keen eye for aesthetics and a
                commitment to delivering exceptional user experiences, my goal
                is to translate your brand identity into a captivating online
                presence.
              </p>
            </div>

            <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
              <h3 className="text-xl mb-5 font-bold">Web Development</h3>
              <p className=" text-gray-500 text-justify">
                As a seasoned web development professional, I offer
                comprehensive and tailored services to meet the diverse needs of
                businesses seeking a strong online presence. With a rich
                background in both front-end and back-end technologies, I
                specialize in crafting visually appealing and highly functional
                websites and web applications.
              </p>
            </div>

            <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
              <h3 className="text-xl mb-5 font-bold">Issue Fixing</h3>
              <p className=" text-gray-500 text-justify">
                Offering dedicated issue-fixing services, I bring a meticulous
                and solutions-oriented approach to address and resolve a wide
                array of challenges that may arise in your digital landscape.
                With a focus on efficiency and precision, I specialize in
                diagnosing and remedying issues across web applications,
                websites, and software systems.
              </p>
            </div>

            <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
              <h3 className="text-xl mb-5 font-bold">Server Management</h3>
              <p className=" text-gray-500 text-justify">
                Specializing in server management services, I offer a
                comprehensive solution to ensure the seamless and secure
                operation of your digital infrastructure. With expertise in
                configuring, monitoring, and optimizing server environments, I
                am committed to enhancing the reliability and performance of
                your servers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
