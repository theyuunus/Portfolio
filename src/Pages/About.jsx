import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import AboutHeader from '../components/AboutHeader/AboutHeader'
import AboutSkills from '../components/AboutSkills/AboutSkills'
import AboutFacts from '../components/AboutFacts/AboutFacts'

export default function About() {
  return (
    <Helmet title="About">
      <AboutHeader />
      <AboutSkills />
      <AboutFacts />
    </Helmet>
  )
}
