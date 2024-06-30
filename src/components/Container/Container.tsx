import React from 'react';

// scss
import './Container.scss'

// interface
import { ContainerProps } from '../../interfase/Container';

const Container: React.FC<ContainerProps> = ({ className = 'Container', children }) => {
    return <div className={className}> {children} </div>
};

export default Container;
