import { useTypewriter } from "react-simple-typewriter";
import image from "../assets/android-chrome-512x512.png"


function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Frontend Dev, Freelancer,Ui/Ux designer"],
    loop: {},
    typeSpeed: 200,
    deleteSpeed: 100,
  });
  return (
    <main className="container flex h-[70vh] items-center justify-between p-6 mx-auto mt-[83px]">
     <div className="relative w-[50%]">
     <h1>Hi there you made it up to here!</h1>
        <p className="mx-1 font-semibold">
          I am =
          <span>{typeEffect}</span>
        </p>
       
     </div>
     <div>
      <img src={image} alt="" className="w-[50%] h-[50%]"/> 
     </div>  
    </main>
  );
}

export default Home;
