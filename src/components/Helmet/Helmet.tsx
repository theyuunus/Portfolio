import React from "react";

interface HelmetProps {
    title?: string,
    children?: React.ReactNode
}

const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
    document.title = `Yunus | ${title}` || 'Default Title';
    return <div>{children}</div>
}

export default Helmet