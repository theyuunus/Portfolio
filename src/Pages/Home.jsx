import React from 'react'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeAbout from '../components/HomeAbout/HomeAbout'
import Helmet from '../components/Helmet/Helmet'
import HomeContact from '../components/HomeContact/HomeContact'
import HomeSkills from '../components/HomeSkills/HomeSkills'
import HomeProjects from '../components/HomeProjects/HomeProjects'

export default function Home() {
  return (
    <Helmet title="Home">
      <HomeHeader />
      <HomeProjects />
      <HomeAbout />
      <HomeSkills />
      <HomeContact />
    </Helmet>
  )
}
