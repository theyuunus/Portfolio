import React from 'react';
import { TextProps } from '../../interfase/Text';

const Text: React.FC<TextProps> = ({ as = "p", children, className }) => {
    const Text: React.ElementType = as;

    return <Text className={className}>{children}</Text>;
};

export default Text