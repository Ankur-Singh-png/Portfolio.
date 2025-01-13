import React from "react";
import git from "../../assests/github-unscreen.gif"
import linkedin from "../../assests/linkedincrop.gif"
import instagram from "../../assests/insta-unscreen1.gif"

const Social = () => {
  return (
    <div className="home__social">
      <a href="https://www.instagram.com/" className="home__social-icon" target="_blank">
        {/* <i class="uil uil-instagram"></i> */}
        <img src={instagram} alt="" className="home__social-icon" />
      </a>

      <a href="https://github.com/Ankur-Singh-jpg" className="home__social-icon" target="_blank">
        {/* <i class="uil uil-github-alt"></i> */}
        <img src={git} alt="" className="home__social-icon" />
      </a>

      <a href="https://www.linkedin.com/in/ankur-singh-715a79323/" className="home__social-icon" target="_blank">
        {/* <i class="uil uil-linkedin"></i> */}
        <img src={linkedin} alt="" className="home__social-icon" />
      </a>
    </div>
  );
};

export default Social;
