function Services() {
  return (
    <section className="mt-[88px] container m-auto  px-4">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl">
          Services
        </h1>

        <p className="mt-4 text-center uppercase">
          Some of the{" "}
          <u>
            <b>services</b>
          </u>{" "}
          we acan offer to you.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="overflow-hidden shadow-2xl bg-cover rounded-lg cursor-pointer h-96 group">
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm  group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                Best website collections
              </h2>
              <p className="mt-2 text-lg tracking-wider  uppercase ">
                Website Developement
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-2xl bg-cover rounded-lg cursor-pointer h-96 group">
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold capitalize">
                Block of Ui kit collections
              </h2>
              <p className="mt-2 text-lg tracking-wider  uppercase ">
                Ui Design
              </p>
            </div>
          </div>

          <div className="overflow-hidden shadow-2xl bg-cover rounded-lg cursor-pointer h-96 group">
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm  group-hover:opacity-100">
              <h2 className="mt-4 text-xl font-semibold e capitalize">
                Ton’s of mobile mockup
              </h2>
              <p className="mt-2 text-lg tracking-wider uppercase ">Mockups</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
