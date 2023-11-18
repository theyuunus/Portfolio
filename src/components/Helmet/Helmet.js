import React from "react";

const Helmet = (props) => {
  document.title = "Yunus | " + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
