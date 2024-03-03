import React from "react";
import './Button.scss';

interface ButtonProps {
    className?: string;
    link?: string;
}

const ButtonLive: React.FC<ButtonProps> = ({ className = "button-live", link }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <button className={className}>
                Live {'<~>'}
            </button>
        </a>
    );
};

const ButtonDemo: React.FC<ButtonProps> = ({ className = "button-demo", link }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <button className={className}>
                Demo {'|>'}
            </button>
        </a>
    );
};

export { ButtonLive, ButtonDemo };
