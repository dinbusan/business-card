import React from "react";

const Footer = () => {
  return (
    <>
      <div className="link_container">
        <a href="https://github.com/dinbusan">
          <img src="./src/assets/github.png" alt="" className="footer_img" />
        </a>
        <a href="https://www.linkedin.com/in/deann-videtto-8481a166/">
          <img src="./src/assets/linkedin.png" alt="" className="footer_img" />
        </a>
      </div>
      <div className="attributions_container">
        <a href="https://www.flaticon.com/free-icons/email" title="email icons">
          Email icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/linkedin"
          title="linkedin icons"
        >
          Linkedin icons created by riajulislam - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/github"
          title="github icons"
        >
          Github icons created by Pixel perfect - Flaticon
        </a>
      </div>
    </>
  );
};

export default Footer;
