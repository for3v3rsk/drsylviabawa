import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const SocialMedia = () => {
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
  return (
    <section className="py-28 mx-auto flex flex-col justify-center items-center text-white-lilac ">
      <h4 className="uppercase text-2xl font-bold md:text-4xl mb-3">
        Let's connect
      </h4>
      <section className="flex flex-wrap justify-center py-5">
        {myaccounts.map((account, index) => (
          <div className="px-1 text-5xl sm:6xl md:px-4 md:text-8xl" key={index}>
            <a rel="noreferrer noopener" href={account.url} target="_blank">
              {account.sm}
            </a>
          </div>
        ))}
      </section>
    </section>
  );
};

export default SocialMedia;
