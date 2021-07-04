import Portrait from "../assets/imgs/bg/young-african-american-woman-teacher-glasses.jpg";
import Portrait_1 from "../assets/imgs/bg/Inn.svg";
const SomeThings = () => {
  return (
    <section>
      <h4 className="text-center text-xl font-medium uppercase text-gray-500 md:text-4xl md:font-bold">
        Somethings I love
      </h4>
      <div className="w-full py-8 flex justify-center">
        {/* <div className="md:w-4/5 md:flex md:justify-around md:items-start leading-relaxed"> */}
        <div className="md:w-4/5 md:flex md:flex-col md:justify-center md:items-start leading-relaxed">
          <div className="md:w-1/2 px-5 pb-10 md:flex">
            <div className="flex-1">
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
            <div className="flex-1">
              <img src="https://source.unsplash.com/eMP4sYPJ9x0" alt="" />
            </div>
          </div>
          <div className=" px-5 pb-10">
            <div>
              <img src={Portrait} alt="Lecturer lecturing" />
            </div>
            <div className="max-w-65ch">
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
          </div>
          <div className=" px-5 pb-10">
            <div>
              <img src={Portrait_1} alt="" />
            </div>
            <div className="max-w-65ch">
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
      </div>
    </section>
  );
};

export default SomeThings;
