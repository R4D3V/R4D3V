//import gta from "../assets/images/gta.png";

function Services() {
  return (
    <main className="p-3 bg-cover bg-center absolute overflow-auto">
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 flex-col items-stretch justify-center gap-4 p-8 text-slate-950/75 sm:grid-cols-3">
          <article className="relative rounded-lg bg-cyan-400 p-4 after:absolute after:inset-0 after:rounded-lg after:bg-cyan-400 after:transition-all after:duration-300 after:content-['\00a0'] after:hover:rotate-1 after:hover:scale-105">
            <div className="relative z-10 cursor-pointer">
              <h1 className="font-bold">Tailwind CSS</h1>
              <p className="mt-2">
                Learn the basics of the most popular CSS framework
              </p>
            </div>
          </article>
          <article className="relative rounded-lg bg-orange-300 p-4 after:absolute after:inset-0 after:rounded-lg after:bg-orange-300 after:transition-all after:duration-300 after:content-['\00a0'] after:hover:rotate-1 after:hover:scale-105">
            <div className="relative z-10 cursor-pointer">
              <h1 className="font-bold">FilamentPHP basics</h1>
              <p className="mt-2">Create Admin Panels with ease</p>
            </div>
          </article>
          <article className="relative rounded-lg bg-red-400 p-4 after:absolute after:inset-0 after:rounded-lg after:bg-red-400 after:transition-all after:duration-300 after:content-['\00a0'] after:hover:rotate-1 after:hover:scale-105">
            <div className="relative z-10 cursor-pointer">
              <h1 className="font-bold">Laravel Folio</h1>
              <p className="mt-2">
                Create a blog using file based routing powered by Laravel Folio
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default Services;
