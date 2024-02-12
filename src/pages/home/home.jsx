import React, { Fragment } from 'react';
import "./home.scss";
import Helmet from "../../components/Helmet/index";
import Container from "../../components/Container/index";
import Tag from "../../components/Tag/index";
import person from "../../images/Home-img.png";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Fragment>
      <Helmet title={'Home'} />
      <Container>
        <div className='home'>
          <div>
            <div className='home-back__path'></div>
            <Tag as={"h1"} className='home-title'>
              Yunus is a <span className='home-title-span'>web</span> and <span className='home-title-span'>Front-end</span> developer
            </Tag>
            <Link to={"/contact"}>
              <button className='home-button'>
                Hire me
              </button>
            </Link>
          </div>
          <div className='home-back__img'>
            <img className='home-img' src={person} alt="error" />
          </div>
        </div>
      </Container>
    </Fragment>
  );
}
