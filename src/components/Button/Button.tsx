import React from "react";
import './Button.scss';
import { ButtonProps } from "../../interfase/Button";

const ButtonLive: React.FC<ButtonProps> = ({ className = "button-live", link, title }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <button className={className}>
                {title}
            </button>
        </a>
    );
};

const ButtonDemo: React.FC<ButtonProps> = ({ className = "button-demo", link, title }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={link}>
            <button className={className}>
                {title}
            </button>
        </a>
    );
};

export { ButtonLive, ButtonDemo };
