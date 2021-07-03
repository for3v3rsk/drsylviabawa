import React from "react";

const Footer = () => {
  return (
    <div className="text-center py-10 bg-gray-900 text-xs text-gray-200 sm:relative -bottom-0 -right-0 -left-0 lg:text-sm">
      <p>
        Copyright &#169; <span>{new Date().getFullYear()}</span>. All rights
        reserved
      </p>
    </div>
  );
};

export default Footer;
