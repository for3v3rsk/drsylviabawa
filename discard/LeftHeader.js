import { useState, useEffect } from "react";

import ProfilePortrait from "../assets/imgs/pexels-asa-dugger-1666073.jpg";
import ProfilePortrait1 from "../assets/imgs/aaron_burden_unsplash.jpg";
import Article from "../Article";
import Book from "../Book";

const LeftHeader = ({ articles, books }) => {
  return (
    <section className="py-10 bg-indigo-50">
      <section>
        <div className="container flex flex-col items-center justify-center text-gray-500 px-5  mx-auto md:py-10 md:flex-row lg:items-center lg:px-28">
          <div className="flex flex-col items-start justify-center text-left lg:flex-grow md:w-1/2 p-5">
            <h2 className="mb-5 ml-5 text-2xl font-bold tracking-wide text-left text-gray-700 title-font uppercase">
              Published
            </h2>
            <div className="max-w-prose">
              {articles.map((article) => (
                <Article key={article.id} article={article} />
              ))}
            </div>
          </div>
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2 p-5">
            <img
              className="object-cover object-center rounded-md"
              alt="hero"
              loading="lazy"
              src={ProfilePortrait}
              style={{ width: "720px", height: "720px" }}
              // src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container flex flex-col items-center justify-center text-gray-500 px-5  mx-auto md:flex-row lg:items-center lg:px-28">
          <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2 p-5">
            <img
              className="object-cover object-center rounded-md"
              alt="hero"
              loading="lazy"
              src={ProfilePortrait}
              style={{ width: "400px", height: "400px" }}
              // src="https://dummyimage.com/720x600/F3F4F7/8693ac"
            />
          </div>
          <div className="flex flex-col items-start justify-center text-left lg:flex-grow md:w-1/2 p-5">
            <h2 className="mb-5 ml-5 text-2xl font-bold tracking-wide text-left text-gray-700 title-font uppercase">
              Book Chapter Published
            </h2>
            <div className="max-w-prose">
              {books.map((book) => (
                <Book key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <section>
                <div className="container flex flex-col items-center text-gray-500 px-5 py-10 mx-auto md:py-32 md:flex-row lg:items-center lg:px-28">
                    <div className="w-full lg:w-5/6 lg:max-w-lg md:pl-5 md:w-1/2 p-5">
                        <img
                            className="object-cover object-center rounded-md"
                            alt="hero"
                            loading="lazy"
                            src={ ProfilePortrait1 }
                            style={ { width: "600px", height: "360px" } }
                        // src="https://dummyimage.com/720x600/F3F4F7/8693ac"
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center text-left lg:flex-grow md:w-1/2 p-5">
                        <h2 className="mb-5 ml-5 text-2xl  font-bold tracking-wide text-left text-gray-700 title-font uppercase">
                            Book Chapter Published
            </h2>
                        <div className="max-w-prose">
                            { books.map( ( book ) => (
                                <Book key={ book.id } book={ book } />
                            ) ) }
                        </div>
                    </div>
                </div>
            </section> */}
    </section>
  );
};

export default LeftHeader;
