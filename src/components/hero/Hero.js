import { Link } from "react-scroll";
import Photo from "../../assets/imgs/etty-fidele-unsplash.jpg";

const Hero = () => {
  return (
    <section id="Hero" className="py-20 headerBg">
      <div className="w-10/12 lg:w-4/5 flex flex-col items-center mx-auto text-gray-400 text-xl md:py-40 md:flex-row  md:items-center  md:justify-between lg:px-20">
        <div className=" flex flex-col items-start mb-28 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-10 md:mb-0">
          <h4 className="mb-8 quattrocento text-base tracking-tight title-font md:text-lg">
            Hi there, I am
          </h4>
          {/* <h1 className="mb-8 muli-bold font-black sm:text-5xl text-picton-blue md:text-8xl title-font"> */}
          <h1 className="mb-8 muli-bold font-black sm:text-4xl text-picton-blue md:text-4xl lg:text-6xl title-font">
            Sylvia Bawa
          </h1>
          <p className="mb-8 text-left max-w-prose md:text-2xl ">
            Associate professor, writer and public speaker.
          </p>
          <div className="flex flex-col justify-center lg:flex-row lg:items-center">
            <Link
              className="flex flex-nowrap items-center font-semibold px-10 py-4 mt-auto text-picton-blue border-solid border-2 border-picton-blue-500 md:transition duration-300 ease-in-out transform rounded-lg hover:text-white-lilac   focus:shadow-outline md:focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-370}
              duration={500}
            >
              Get in touch
              <span className="self-center ml-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-5/6 lg:max-w-lg md:w-1/2">
          <div className="">
            <img
              className=" object-cover blend-darken rounded-xl md:visible headerImg"
              alt="Dr. Sylvia Bawa Portrait"
              style={{
                // width: "720px",
                width: "auto",
                height: "426px",
                // height: "auto",
                // objectPosition: "70% 50%",
              }}
              src={Photo}
              loading="eager"
            />
            {/* <img
              className="object-cover object-center blend-darken rounded-xl lg:hidden headerImg"
              alt="Dr. Sylvia Bawa Portrait"
              style={{ width: "100%", height: "420px" }}
              src={Photo}
              loading="eager" 
            />*/}
            {/* <span className="absolute bottom-0 left-0">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#EC4899"
                  d="M42.6,-43.1C55.7,-29.5,67.3,-14.7,68.9,1.6C70.5,18,62.2,35.9,49,43.7C35.9,51.5,18,49.1,0.2,48.8C-17.5,48.6,-34.9,50.5,-48.6,42.7C-62.2,34.9,-72.1,17.5,-74.4,-2.4C-76.8,-22.2,-71.7,-44.4,-58,-57.9C-44.4,-71.5,-22.2,-76.5,-3.7,-72.8C14.7,-69.1,29.5,-56.6,42.6,-43.1Z"
                  transform="translate(100 100)"
                />
              </svg>
            </span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
