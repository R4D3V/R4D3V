function Home() {
  return (
    <main className="mt-[88px]">
      <main>
        <div className="relative grid w-full bg-indigo-500 h-96 lg:h-[32rem] place-items-center">
          <div className="flex flex-col items-center mx-auto text-center">
            <h1 className="text-4xl font-semibold text-white uppercase md:text-6xl">
              Hero Header
            </h1>

            <p className="mt-6 text-lg leading-5 text-white">
              The best in town.
            </p>

            <a href="#about" className="mt-8 cursor-pointer animate-bounce">
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="27" cy="26" r="18" stroke="white" />
                <path
                  d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
        </div>

        <svg
          className="fill-indigo-500"
          viewBox="0 0 1440 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1440 0H0V57C720 0 1440 57 1440 57V0Z" />
        </svg>
      </main>

      <section className="container px-6 py-8 mx-auto lg:py-16 " id="about">
        <div className="lg:flex lg:items-center lg:-mx-4">
          <div className="lg:w-1/2 lg:px-4">
            <h3 className="text-xl font-medium text-gray-800 md:text-2xl lg:text-3xl">
              We create awesome prototypes, plugins, and templates.
            </h3>

            <p className="mt-6 text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              laboriosam provident voluptatum id magni iste nobis corrupti,
              delectus quis repellat, debitis error quod explicabo molestiae
              rerum totam ab sunt excepturi?
            </p>

            <button className="flex items-center mt-8 -mx-2 text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 mx-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
              <p className="mx-1 font-semibold">PLAY VIDEO</p>
            </button>
          </div>

          <div className="mt-8 lg:w-1/2 lg:px-4 lg:mt-0">
            <p>image here</p>
          </div>
        </div>
      </section>

      <section className="container px-6 py-8 mx-auto lg:py-16">
        <div className="grid grid-cols-1 gap-8 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
            <span className="inline-block text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize">
              web design
            </h1>

            <p className="text-gray-500">
              Research, user experience testing, mockups, and prototypes
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
            <span className="inline-block text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize">
              development
            </h1>

            <p className="text-gray-500">
              Research, user experience testing, mockups, and prototypes
            </p>
          </div>

          <div className="p-8 space-y-3 border-2 border-indigo-400 rounded-xl">
            <span className="inline-block text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              ></svg>
            </span>

            <h1 className="text-2xl font-semibold text-gray-700 capitalize">
              research
            </h1>

            <p className="text-gray-500">
              Research, user experience testing, mockups, and prototypes
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
