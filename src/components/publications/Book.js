const Book = ({ book }) => {
  const { imgURL, altText, category, title, yearOfPublication, bookURL } = book;

  return (
    <section className="max-w-sm flex flex-wrap justify-between muli text-sm text-white-lilac text-left bg-cornflower-blue-500 p-5 m-5 rounded-md shadow-md">
      {/* book image */}
      <section className="w-full flex justify-center mt-2 mb-5">
        <img
          className="w-auto object-center object-cover h-52 mx-auto"
          src={imgURL}
          alt={altText}
        />
      </section>
      <section className="">
        {/* book details */}
        <section className="mt-2 px-4 flex flex-col justify-between">
          {/* book title */}
          <section className="mb-5">
            <span className="underline rounded-full text-xs font-semibold ">
              {category}
            </span>
            <h5 className="pb-4 pt-4 mt-3">{title}</h5>
          </section>

          <section className="mt-auto">
            <section className=" text-xs sm:text-sm flex flex-wrap lg:flex-nowrap justify-between items-center">
              {/* book's year of publication */}

              <section className="flex items-center text-base pb-4 lg:pb-0">
                <span className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="muli text-sm">{yearOfPublication}</span>
              </section>

              {/* book link URL */}
              <section className="">
                <a
                  className="flex items-center bg-picton-blue-500 rounded-full py-2 px-5 muli font-semibold"
                  href={bookURL}
                  target="blank"
                  rel="noopener noreferrer"
                >
                  <span>Read this book</span>
                  <span className="ml-2 text-base">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Book;
