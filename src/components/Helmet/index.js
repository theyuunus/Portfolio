import React, { useEffect } from "react";

const Helmet = ({ title, children }) => {
    useEffect(() => {
        document.title = `Yunus | ${title}`;
    }, [title]);

    return <div>{children}</div>;
};

export default Helmet;