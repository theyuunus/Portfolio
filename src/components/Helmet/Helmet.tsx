import React from "react";
import { HelmetProps } from "../../interfase/Helmet";

const Helmet: React.FC<HelmetProps> = ({ title, children }) => {
    document.title = `Yunus | ${title}` || 'Default Title';
    return <div>{children}</div>
}

export default Helmet