import React from 'react';
import styled from 'styled-components';
// import '../layouts/index.css';

const Highlight = styled.span`
  font-weight : 800;
`
const Paragraph = styled.p`
  color : #333;
  font-size : 35px;
  font-weight : 300;
`
const A = styled.a`
text-decoration: none;
`

const AboutMe = () => (
  <div className='Full'>
    <Paragraph>
      Hi ! I&apos;m{' '}
      <Highlight> Pankaja.</Highlight>
    </Paragraph>
    <Paragraph>
      I&apos;m a final year undergraduate / developer. I&apos;m a Javascript
      enthusiast, who like to keep up with new technologies. I&apos;m on my way
      to specialize in JavaScript and my main area of interest is Fullstack
      Development.
    </Paragraph>
    <Paragraph>
      My skill set includes{' '}
      <Highlight>
        Javascript, React, Node, Angularjs, CSS, HTML, Java, Python, MySQL,
        MSSQL, Git
      </Highlight>{' '}
      and etc.
    </Paragraph>
    <Paragraph>Besides coding, I&apos;m very passionate <Highlight><a className='Photography' href='https://500px.com/pankajanc' target="_blank" rel="noopener noreferrer">photographer </a>and a gamer</Highlight> :)</Paragraph>
    <Paragraph>Recently I became interested in <Highlight>Blockchain</Highlight> technology. So currently I'm learning Blockchain ecosystem as well. </Paragraph>
    </div>
);

export default AboutMe;
