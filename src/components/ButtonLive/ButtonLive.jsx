import React from 'react'
import "./ButtonLive.scss"

export default function ButtonLive(props) {
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
