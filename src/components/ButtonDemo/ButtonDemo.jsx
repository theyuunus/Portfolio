import React from 'react'
import "./ButtonDemo.scss"

export default function ButtonDemo(props) {
    const { url, text } = props;
  return (
    <div>
          <a href={url} target='_blank' rel="noopener noreferrer">
              <button>
                  {text}
              </button>
          </a>
    </div>
  )
}
