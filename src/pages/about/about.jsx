import React, { Fragment, useState } from 'react';
import './about.scss';
import Container from '../../components/Container';
import Helmet from '../../components/Helmet/index';
import Tag from '../../components/Tag/index';
import PersonImg from '../../images/About-img.png'

export default function About() {
  const maxWords = 30;
  const aboutText = "Hello, I'm Yunus! I'm a self-taught front-end developer based in Tashkent, Uzbekistan. I specialize in developing responsive websites from scratch, transforming them into modern, user-friendly web experiences. Converting my creativity and knowledge into websites has been my passion for over a year. I've been assisting various clients in establishing their online presence. I always strive to stay updated with the latest technologies and frameworks.";
  const [showFullText, setShowFullText] = useState(false);

  const trimmedText = showFullText ? aboutText : aboutText.split(' ').slice(0, maxWords).join(' ');
  const toggleShowFullText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <Fragment>
      <Helmet title={'About'} />
      <Container>
        <div className='about'>
          <div>
            <Tag as="h1" className='about-title'>
              About <span className='about-title-span'>me</span>
            </Tag>
            <Tag className='about-text'>
              {trimmedText}
            </Tag>
            {aboutText.split(' ').length > maxWords && (
              <button className='about-button' onClick={toggleShowFullText}>
                {showFullText ? 'See less' : 'See more'}
              </button>
            )}
          </div>
          <div className='about-back__img'>
            <img src={PersonImg} className='about-img' alt="error" />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
