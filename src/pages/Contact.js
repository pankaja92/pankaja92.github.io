import React from 'react';
import facebook from '../assets/facebook.svg';
import github from '../assets/github.svg';
import twitter from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import email from '../assets/email.svg';
import stackoverflow from '../assets/stackoverflow.svg';

import './css/Contact.css';

const Contact = () => (
  <div className='Full-Content'>
    <div className='Topic'>
      Get in touch!
  <div className='Content'>
        <a
          href="https://www.linkedin.com/in/pankaja92/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='Image' alt="Linkedin" src={linkedin} />
        </a>
        <a
          href="https://github.com/pankaja92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='Image' alt="github" src={github} />
        </a>
        <a
          href="https://stackoverflow.com/users/7653269/thidasa-paranavitharana"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='Image' alt="stackoverflow" src={stackoverflow} />
        </a>
        <a
          href="https://www.facebook.com/thidasa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='Image' alt="facebook" src={facebook} />
        </a>
        <a
          href="https://twitter.com/pankaja92"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className='Image' alt="twitter" src={twitter} />
        </a>
        <a href="mailto:pankajanc@gmail.com">
          <img className='Image' alt="email" src={email} />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
