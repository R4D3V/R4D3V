
function Contact() {
  return (
    <main className="bg-gray-100 py-16 sm:m-2">
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div className="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">There’s a
                better way to talk with your customers.</h2>
            <h3
                className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
                and deliver help content right where your customers need it, all in one place, all for one low price.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Get started</button>
                <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <p>image here</p>
            
        </div>
    </div>
</div>
      
<figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <h1>image here</h1>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I have seen scale
        on large teams. Is easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>


      
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Get in Touch</h2>
        <p className="text-lg leading-relaxed mb-8">
          I am excited to hear from you! Whether you have a project idea, a
          question, or just want to connect, feel free to reach out. Fill out
          the form below, and I will get back to you as soon as possible.
        </p>

        <form className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="text-gray-800 block mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="text-gray-800 block mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              placeholder="john@example.com"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="text-gray-800 block mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-md py-2 px-3 resize-none focus:outline-none focus:border-blue-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
