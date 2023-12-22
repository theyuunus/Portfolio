import React from 'react'
import "./ButtonLive.scss"

export default function ButtonLive({ link, text }) {
    return (
        <div className='buttonLive'>
            <a className='buttonLive-a' href={link} target='_blank' rel="noopener noreferrer">
                <button className='buttonLive-a-button'>
                    {text}
                </button>
            </a>
        </div>
    )
}
