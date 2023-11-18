import React from 'react'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import Helmet from '../components/Helmet/Helmet'

export default function Home() {
  return (
    <Helmet title="Home">
      <HomeHeader />
    </Helmet>
  )
}
