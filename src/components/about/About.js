import React from "react";
import ProfilePortrait from "../../assets/imgs/pexels-asa-dugger-1666073.jpg";

const About = () => {
  return (
    <section id="About" className="bg-cornflower-blue-500 text-gray-200">
      <div className="container flex flex-col items-start px-5 py-16 mx-auto md:py-32 md:flex-row lg:text-xl lg:items-center lg:px-28">
        <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
          <img
            className="object-cover object-center rounded-md"
            alt="hero"
            loading="lazy"
            src={ProfilePortrait}
            style={{ width: "720px", height: "600px" }}
          />
        </div>
        <div className="flex flex-col items-start text-left  lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
          <h2 className="mb-8 text-2xl font-bold tracking-wide text-left title-font ">
            A few words about me
          </h2>
          <p id="about_paragraph" className="mb-8 leading-relaxed text-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eius
            accusantium nemo veritatis mollitia voluptatum deleniti repudiandae
            possimus ullam, unde debitis. Itaque ea magni ad culpa? Pariatur
            consequatur laboriosam quae culpa dolor doloremque ut ea perferendis
            ex, laudantium rerum nemo ipsum vero quaerat veniam vel. Deserunt
            quas veritatis omnis tenetur in ab eveniet minus ut. Dignissimos
            quaerat necessitatibus nobis, deserunt dolorem temporibus numquam
            veritatis perferendis delectus placeat deleniti omnis sapiente
            magnam minus asperiores itaque est unde ut dolore quidem similique
            ab natus ipsum. Nemo veniam placeat aut quo? Dicta dolore rerum
            nesciunt in consequatur officia adipisci esse quis dolor repellat.
          </p>
          <p className="flex mb-2">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
              </svg>
            </span>
            Super Hyper Mega Feature
          </p>
          <p className="flex mb-2">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
              </svg>
            </span>
            Thumbs upp baby
          </p>
          <p className="flex mb-6">
            <span className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mr-2 rounded-full">
              <svg
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
              </svg>
            </span>
            This feature is useless
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
