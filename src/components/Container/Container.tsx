import React from 'react';
import './Container.scss'

interface ContainerProps {
    className?: string,
    children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ className = 'Container', children }) => {
    return <div className={className}> {children} </div>
};

export default Container;
