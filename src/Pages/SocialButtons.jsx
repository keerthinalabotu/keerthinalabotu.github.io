// import React from 'eact';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function SocialButtons() {
  return (
    <div className="social-container">
      <a href="https://github.com/keerthinalabotu" target="_blank">
        {/* <button className="social-btn github">GitHub</button> */}
        <button className = "social-btn">
            <FaGithub size={24} />
        </button>
      </a>
      <a href="https://www.linkedin.com/in/keerthi-nalabotu/" target="_blank">
        <button className="social-btn">
            <FaLinkedin size={24} />
        </button>
      </a>
      <a href="mailto:keerthiadi069@gmail.com">
        <button className="social-btn">
            <FaEnvelope size={24} />
        </button>
      </a>
    </div>
  );
}

export default SocialButtons;