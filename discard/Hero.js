import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 text-gray-600 body-font md:py-12 md:pb-16 overflow-hidden">
      <section className="container px-5 py-16 md:py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col justify-center items-start md:text-6xl text-4xl">
            <p className="">Hi</p>
            <h1 className="md:font-extrabold font-bold py-4">
              I&rsquo;m Sylvia Bawa
            </h1>
            <p className="max-w-prose text-2xl pb-2 md:pb-0 md:text-4xl">
              I am an associate professor, a writer and a public speaker.
            </p>
            <div className="flex flex-wrap justify-start text-xl py-5">
              <button className="w-full px-10 py-4 mb-4 bg-gray-600 rounded-md text-gray-100 md:mr-2.5 md:mb-0 md:w-auto">
                Learn more
              </button>
              <button className="w-full px-10 py-4 bg-gray-50 rounded-md md:ml-2.5 border-2 border-solid border-gray-600 md:w-auto">
                Contact me
              </button>
            </div>
          </div>
          <img
            alt="Dr. Sylvia Bawa Portrait"
            className="w-full h-96 object-cover object-center rounded md:w-1/2 md:h-auto"
            src="https://source.unsplash.com/i2hoD-C2RUA/640x960"
            loading="eager"
          />
        </div>
      </section>
      {/* <div className="custom-shape-divider-bottom-1621979078 hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </section>
  );
};

export default Hero;
