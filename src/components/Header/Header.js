import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link'

import './Header.css';

const DIV = styled.div`
  margin-top : 15px;
  margin-right : 25px;
`
const LinkStyle = {
  textDecoration: 'none'
};

const HeaderList = () => (
  <div className='container'>
    <DIV className='linkStyle'>
      <Link to="/" style={LinkStyle}><span className='linkStyle'>About me</span></Link>
    </DIV>
    <DIV>
      <Link to="/projects" style={LinkStyle} className='linkStyle'>Projects</Link>
    </DIV>
    <DIV>
      <Link to="/skills" style={LinkStyle} className='linkStyle'>Skills</Link>
    </DIV>
    <DIV>
      <Link to="/contact" style={LinkStyle} className='linkStyle'>Contact me</Link>
    </DIV>
  </div>
);

export default HeaderList;
