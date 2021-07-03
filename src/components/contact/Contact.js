import React from "react";
import Mailer from "../mail/Mailer";
import Map from "../map/Map";

const Contact = ({ location, zoomLevel }) => {
  return (
    <section
      id="Get_in_touch"
      className="mx-auto flex justify-center text-gray-600 body-font bg-white-lilac"
    >
      <div className="flex flex-col flex-wrap items-center overflow-x-hidden lg:flex-row">
        <Map location={location} zoomLevel={zoomLevel} />
        <Mailer />
      </div>
    </section>
  );
};

export default Contact;
