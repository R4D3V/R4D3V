function Home() {
  return (
    <div className="text-center max-w-6xl mx-10">
      <p className="my-3 text-sm tracking-widest text-indigo-500 uppercase">
        Fast &amp; SEO friendly
      </p>
      <h1 className="my-3 text-3xl font-bold tracking-tight text-gray-800 md:text-5xl dark:text-gray-100">
        Website Templates and Landing Pages
      </h1>
      <div>
        <p className="max-w-2xl mx-auto my-2 text-base text-gray-500 md:leading-relaxed md:text-xl dark:text-gray-400">
          Launch your fully-functional Website within hours. SEO friendly
          Website Templates with High Page Speed. Built with HTML5, React,
          Next.js, TailwindCSS, Sanity CMS &amp; Eleventy.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 mt-6 md:flex-row">
        <a
          className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all rounded-md shadow-xl sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-500 hover:bg-gradient-to-b dark:shadow-indigo-900 shadow-indigo-200 hover:shadow-2xl hover:shadow-indigo-400 hover:-translate-y-px"
          href=""
        >
          Browse All Templates
        </a>
        <a
          className="inline-block w-auto min-w-[250px] px-6 py-4 text-white transition-all bg-gray-700 dark:bg-white dark:text-gray-800 rounded-md shadow-xl sm:w-auto hover:bg-gray-900 hover:text-white shadow-slate-300 dark:shadow-slate-700 hover:shadow-2xl hover:shadow-slate-400 hover:-translate-y-px"
          href=""
        >
          Component Library
        </a>
      </div>
    </div>
  );
}

export default Home;
