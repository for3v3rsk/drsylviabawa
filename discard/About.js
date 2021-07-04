const About = () => {
  return (
    <section className="text-gray-400 bg-gray-200 py-20 md:py-40 ">
      <section className="">
        <div className="py-4 px-8 text-center">
          <h2 className="md:font-bold md:text-4xl text-2xl font-medium pb-4 uppercase text-gray-500">
            A few words about me
          </h2>
          <div className="flex justify-center">
            <p className="max-w-2xl md:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
              aperiam dicta nihil! Consectetur placeat beatae perspiciatis
              aliquam sunt possimus unde similique enim fuga, reprehenderit,
              accusamus praesentium sapiente illo nobis.
            </p>
          </div>
        </div>
      </section>

      <section className="my-24 flex justify-center w-full">
        <div className="md:w-4/5">
          <img
            className=" mx-auto w-full object-cover object-center shadow h-96 md:aspect-16 md:rounded "
            src="https://source.unsplash.com/WHWYBmtn3_0/1920x1280"
            alt=""
            loading="lazy"
          />
        </div>
      </section>

      <section>
        <h4 className="text-center text-xl font-medium uppercase text-gray-500 pt-6 md:py-6 md:text-4xl md:font-bold">
          Somethings I love to do
        </h4>
        <div className="w-full py-8 flex justify-center">
          <div className="md:w-4/5 md:flex md:justify-around md:items-start leading-relaxed">
            <div className="md:max-w-65ch px-5 pb-10">
              <h3 className="font-bold pb-3 text-gray-500 md:font-semibold md:text-2xl">
                Writing
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia delectus rerum quasi voluptas molestias, eius cum harum
                quia quaerat temporibus! Reiciendis earum vel quisquam debitis
                sint accusantium, libero placeat dolorum?
              </p>
            </div>
            <div className="md:max-w-65ch px-5 pb-10">
              <h3 className="font-bold pb-3 text-gray-500 md:font-semibold md:text-2xl">
                Teaching Courses
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia delectus rerum quasi voluptas molestias, eius cum harum
                quia quaerat temporibus! Reiciendis earum vel quisquam debitis
                sint accusantium, libero placeat dolorum?
              </p>
            </div>
            <div className="md:max-w-65ch px-5 pb-10">
              <h3 className="font-bold pb-3 text-gray-500 md:font-semibold md:text-2xl">
                Public Speaking
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Mollitia delectus rerum quasi voluptas molestias, eius cum harum
                quia quaerat temporibus! Reiciendis earum vel quisquam debitis
                sint accusantium, libero placeat dolorum?
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
