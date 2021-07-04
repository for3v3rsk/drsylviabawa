import React from "react";

const TestHeader = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 flex flex-col justify-center items-start text-6xl">
                      <h1>Hi</h1>
                      <p className="font-extrabold">I&rsquo;m Sylvia Bawa</p>
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-96 object-cover object-center rounded"
            src="https://source.unsplash.com/-C-jTjc0g7I/640x960"
          />
        </div>
      </div>
    </section>
  );
};

export default TestHeader;
