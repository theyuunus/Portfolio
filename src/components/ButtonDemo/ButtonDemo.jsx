import React from 'react'
import "./ButtonDemo.scss"

export default function ButtonDemo({ link, text }) {
  return (
    <div className='buttonDemo'>
      <a className='buttonDemo-a' href={link} target='_blank' rel="noopener noreferrer">
        <button className='buttonDemo-a-button'>
          {text}
        </button>
      </a>
    </div>
  )
}
