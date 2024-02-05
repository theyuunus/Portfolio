import React from "react";
import PropTypes from "prop-types";
import "./Tag.scss";

const Tag = ({ as, className = "", children, ...props }) => {
    const Tag = as;
    return (
        <Tag className={className} {...props}>
            {children}
        </Tag>
    );
};

Tag.propTypes = {
    as: PropTypes.oneOf(["p", "h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
    className: PropTypes.string,
    children: PropTypes.node,
};

Tag.defaultProps = {
    as: "p",
    className: "",
    children: null,
};

export default Tag;
