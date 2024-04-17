
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { MdCallEnd } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

const ContactSocials = () => {
  return (
    <div className="contact__socials">
      <a
        href="mailto:dev.harielango0605@gmail.com"
        className="contact__socials-items"
      >
        <BiLogoGmail />
        {/* <h5>Gmail</h5> */}
      </a>
      <a href="tel:+919952751719" className="contact__socials-items">
        <MdCallEnd />
        {/* <h5>Phone</h5> */}
      </a>
      <a
        href="www.linkedin.com/in/harini-elango-112132232"
        target="_blank"
        className="contact__socials-items"
      >
        <FaLinkedin />
        {/* <h5>LinkedIN</h5> */}
      </a>
      <a
        href="https://www.github.com/HariniEl"
        target="_blank"
        className="contact__socials-items"
      >
        <BsGithub />
        {/* <h5>GitHub</h5> */}
      </a>
    </div>
  );
};

export default ContactSocials;
