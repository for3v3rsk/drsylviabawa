import React from "react";

const MailForm = () => {
  return (
    <div className="">
      {/* <div className="max-w-prose border-2 border-solid border-white rounded-lg shadow-sm flex flex-col items-center md:ml-auto w-full md:p-8 mt-8 md:mt-0"> */}
      <form className="px-5 py-5">
        <h2 className="text-gray-700 text-lg mb-2 font-medium title-font ">
          Send Message
        </h2>
        <p className="leading-relaxed mb-5 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          repellat nam facere rerum corrupti corporis, sequi ut dignissimos.{" "}
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out emailbg"
            data-temp-mail-org="0"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Send
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </form>
    </div>
  );
};

export default MailForm;
