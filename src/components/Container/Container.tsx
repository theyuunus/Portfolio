import React from 'react';
import './Container.scss'
import { ContainerProps } from '../../interfase/Container';

const Container: React.FC<ContainerProps> = ({ className = 'Container', children }) => {
    return <div className={className}> {children} </div>
};

export default Container;
