import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const myaccounts = [
  {
    sm: <FaFacebookSquare />,
    url: "",
  },
  {
    sm: <FaLinkedin />,
    url: "https://www.linkedin.com/in/sylvia-bawa-15aa547?originalSubdomain=ca",
  },
  {
    sm: <FaTwitterSquare />,
    url: "https://twitter.com/essenbi",
  },
  {
    sm: <FaYoutubeSquare />,
    url: "",
  },
  {
    sm: <FaInstagramSquare />,
    url: "",
  },
  <FaLinkedin />,
];

const Contacts = () => {
  return (
    <section
      id="Contact"
      className="flex justify-center py-28 5 w-full text-lg text-gray-200 bg-cornflower-blue-500 "
    >
      <section className="flex flex-col items-center">
        <h3 className="mb-10 text-2xl muli-bold text-center">Contact</h3>
        <section className="lg:flex flex-wrap">
          <section className="flex items-start px-5 mb-5 lg:px-20">
            <a className="flex" href="mailto:bawa@yorku.ca">
              <span className="mr-3">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              bawa@yorku.ca
            </a>
          </section>
          <section className="flex items-start px-5 mb-5 lg:px-20">
            <span className="mr-3">
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <p>
              +1 416 736-2100
              <span className="ml-3">Ext: 60355</span>
            </p>
          </section>

          <section className="flex items-start px-5 mb-5 lg:px-20">
            <span className="mr-3">
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
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>
            <p>
              Vari Hall, 2144
              <br />
              Lorem ipsum dolor sit,
              <br />
              Deleniti officiis nisi modi
            </p>
          </section>
        </section>
        <section className="container flex justify-center lg:px-5 pt-3">
          <hr className="border-t border-white-lilac w-full lg:w-11/12" />
        </section>
        <section className="w-full flex justify-center pt-5">
          <section className=" flex">
            {myaccounts.map((account, index) => (
              <div className="text-5xl mx-1 lg:text-7xl" key={index}>
                <a rel="noreferrer noopener" href={account.url} target="_blank">
                  {account.sm}
                </a>
              </div>
            ))}
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contacts;
