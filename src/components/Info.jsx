import React from "react";

const Info = () => {
  return (
    <div className="info_container">
      <h1 className="info_headline">Deann Videtto</h1>
      <h3 className="info_headline">Junior Front End Developer</h3>
      <h5 className="info_headline">Amsterdam, The Netherlands</h5>
      <div className="button_container">
        <a href="mailto:deann.videtto@gmail.com">
          <button className="email_button">
            <img src="./src/assets/mail.png" alt="" className="email_icon" />
            Email
          </button>
        </a>
        <a href="https://www.linkedin.com/in/deann-videtto-8481a166/">
          <button className="linkedin_button">
            <img
              src="./src/assets/linkedin.png"
              alt=""
              className="linkedin_icon"
            />
            LinkedIn
          </button>
        </a>
      </div>
    </div>
  );
};

export default Info;
