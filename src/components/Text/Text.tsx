import React from 'react';

interface TextProps {
    as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
    className?: string
}

const Text: React.FC<TextProps> = ({ as = "p", children, className }) => {
    const Text: React.ElementType = as;

    return <Text className={className}>{children}</Text>;
};

export default Text