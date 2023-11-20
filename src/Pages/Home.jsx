import React from 'react'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeAbout from '../components/HomeAbout/HomeAbout'
import Helmet from '../components/Helmet/Helmet'

export default function Home() {
  return (
    <Helmet title="Home">
      <HomeHeader />
      <HomeAbout />
    </Helmet>
  )
}
