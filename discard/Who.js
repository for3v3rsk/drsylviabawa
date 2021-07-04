import React from "react";
import ProfilePortrait from "../assets/imgs/pexels-asa-dugger-1666073.jpg";
const Who = () => {
  return (
    <section className="flex flex-col items-center mx-auto py-24">
      <section className="w-4/5 flex items-center">
        <div className="flex justify-between">
          <div className="">
            <img src={ProfilePortrait} alt="" />
          </div>
          <div className="max-w-prose">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Architecto magni rem cupiditate voluptatum dicta a maiores
              incidunt autem quidem officia repudiandae, et pariatur mollitia
              inventore quaerat facilis, ipsa nisi ut necessitatibus! Laboriosam
              distinctio, sequi assumenda aliquid, praesentium amet neque
              accusantium rerum odio odit officia! Vero incidunt tenetur
              voluptatum ipsum laboriosam!
            </p>
          </div>
        </div>
      </section>
      <section className="w-4/5">
        <div className="">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quasi voluptatem iste provident numquam? Cumque explicabo delectus
            consectetur iure nostrum et nulla modi. Ducimus asperiores rem earum
            dolore perspiciatis iure ut, maiores, quibusdam labore molestiae
            consequatur sed dolorum eius nam error expedita molestias quasi ea
            nostrum minus accusantium suscipit explicabo. Omnis iusto, officiis
            odit vero enim minima impedit, labore ipsum earum ut maiores,
            laboriosam natus. Voluptate iste quod nisi at. Culpa, aliquam?
            Blanditiis cupiditate dolor esse illum perspiciatis commodi
            architecto deserunt, deleniti dicta exercitationem, voluptatem
            aliquid! Eligendi asperiores quod delectus saepe id obcaecati
            impedit distinctio architecto beatae sequi. Nostrum, totam!
          </p>
        </div>
      </section>
    </section>
  );
};

export default Who;
