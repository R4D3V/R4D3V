import { Link } from "react-router-dom";
import logo from "../img/r4d3v.png";
import html from "../img/tech/html.png";
import css from "../img/tech/css.png";
import js from "../img/tech/js.png";
import react from "../img/tech/react.png";
import tailwind from "../img/tech/tailwind.png";
import stack from "../img/tech/stack.png";

function Home() {
  return (
    <div className="container mx-auto w-full">
      <div className="p-2 border-gray-500 place-content-center grid gap-4 lg:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 ">
        <div className=" flex items-center justify-center">
          <img
            src={logo}
            alt=""
            width={400}
            height={400}
            className="hover:scale-105 transition duration-500"
            // className="rounded-2xl bg-[rgba(255,255,255,0.05)] border-2 shadow-lg shadow-gray-950 backdrop-blur "
          />
        </div>
        <div className=" lg:pl-8 text-center rounded-lg bg-[rgba(255,255,255,0.05)] border p-4 shadow-lg shadow-gray-950 backdrop-blur">
          <h1 className="font-bold">I'm RAYMOND</h1>
          <p className="py-3 text-2xl">Nice to meet you!</p>
          <p className="py-3">
            I'm a front-end developer passionate about building accessible web
            apps that users love.
          </p>
          <div className="flex justify-center gap-4 underline font-mono">
            <button className=" bg-gray-600 text-white uppercase p-3 rounded-2xl animate-pulse">
              <Link to="/contact">contact</Link>
            </button>
            <button className=" bg-gray-600 text-white uppercase p-3 rounded-2xl animate-pulse">
              <Link to="/portfolio">portfolio</Link>
            </button>
          </div>
          <h1 className="font-bold uppercase">About me</h1>
          <p className="first-letter:text-5xl ">
            i am a Frontend Developer. <hr className="" />{" "}
            <span className="text-black text-5xl font-extrabold">D</span>
            edicated to my work. I have acquired the skills and knowledge
            necessary to make your project a success. I enjoy every step of the
            design process, from discussion and collaboration. Senior Frontend
            Developer with experience in designing, developing, I can conquer a
            website from nothing into existance, fully formed. I do not use
            magic or tricks. I specialize in manipulating the very fabric of the
            web using its raw materials of HTML, CSS and javascript. . I code
            User Interfaces from scratch there after give them life
            (functionality).
          </p>
        </div>
      </div>

      <div className="p-3">
        <div
          className="flex flex-wrap justify-center  
       bg-gray-600 text-center rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100
       shadow-gray-800 shadow-xl"
        >
          <h1 className="font-bold uppercase underline text-black text-center">
            tech stack
          </h1>
        </div>
      </div>

      <div className="px-8 py-2">
        <div className="mx-auto ">
          <div className="flex flex-wrap justify-around gap-4 ]py-4 xl:grid xl:grid-cols-3 xl:p-8 lg:grid lg:grid-cols-3 lg:p-8">
            <div className="rounded-lg bg-[rgba(255,255,255,0.05)] border-2 p-4 text-center shadow-lg shadow-gray-950 backdrop-blur justify-center">
              <div className="flex justify-center">
                <img src={html} alt="" className="hover:animate-pulse" />
              </div>
              <h1 className="py-2 font-bold uppercase">HTML 5</h1>
              <p>3-Years</p>
            </div>
            <div className="rounded-lg bg-[rgba(255,255,255,0.05)] border-2 p-4 text-center shadow-lg shadow-gray-950 backdrop-blur">
              <div className="flex justify-center">
                <img src={css} alt="" className="hover:animate-pulse" />
              </div>
              <h1 className="py-2 font-bold uppercase">CSS 3</h1>
              <p>3-Years</p>
            </div>
            <div className="rounded-lg bg-[rgba(255,255,255,0.05)] border-2 p-4 text-center shadow-lg shadow-gray-950 backdrop-blur">
              <div className="flex justify-center">
                <img src={js} alt="" className="hover:animate-pulse" />
              </div>
              <h1 className="py-2 font-bold uppercase">JAVASCRIPT</h1>
              <p>3-Years</p>
            </div>
            <div className="rounded-lg bg-[rgba(255,255,255,0.05)] border-2 p-4 text-center shadow-lg shadow-gray-950 backdrop-blur">
              <div className="flex justify-center">
                <img
                  src={react}
                  alt=""
                  className="animate-spin hover:animate-none"
                />
              </div>
              <h1 className="py-2 font-bold uppercase">REACT</h1>
              <p>2-Years</p>
            </div>
            <div className="rounded-lg bg-[rgba(255,255,255,0.05)] border-2 p-4 text-center shadow-lg shadow-gray-950 backdrop-blur">
              <div className="flex justify-center">
                <img src={tailwind} alt="" className="hover:animate-pulse" />
              </div>
              <h1 className="py-2 font-bold uppercase">TAILWIND~CSS</h1>
              <p>2-Years</p>
            </div>
            <div className="rounded-lg bg-[rgba(255,255,255,0.05)] border-2 text-white p-4 text-center shadow-lg shadow-gray-950 backdrop-blur">
              <div className="flex justify-center">
                <img src={stack} alt="" className="hover:animate-pulse pt-8" />
              </div>
              <h1 className="py-2 font-bold uppercase">MERN</h1>
              <p>2-Years</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-4 justify-center animate-bounce">
        <button className="py-2 hover:animate-pulse backdrop-blur border-2 uppercase bg-[rgba(255,255,255,0.07)] p-2 rounded-2xl text-center w-fit">
          <Link to="/contact">Lets build something!</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
