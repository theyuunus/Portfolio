import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Projects from '../components/Projects/Projects'
import SmallProjects from '../components/SmallProjects/SmallProjects'

export default function projects() {
  return (
    <Helmet title="Works">
      <Projects />
      <SmallProjects />
    </Helmet>
  )
}
