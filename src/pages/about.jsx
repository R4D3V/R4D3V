// import reactSvg from "../assets/react.svg";
// import { Link } from "react-router-dom";

function About() {
  return (
    <div className="container mx-auto py-8 mt-[88px]">
      <h2 className="text-4xl font-bold mb-4">About Us</h2>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img
            src="https://placekitten.com/800/600" // Replace with your image URL
            alt="About Us"
            className="w-full h-auto rounded-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et
            justo eu ex condimentum fermentum vel id eros. Vivamus vehicula
            fringilla turpis, vel ornare tortor elementum vel.
          </p>
          <p className="text-lg">
            Nullam vel nunc quis justo facilisis facilisis ac vel quam. Quisque
            eu rhoncus lacus. Phasellus tristique mi nec eros tincidunt, ut
            vestibulum leo blandit.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
