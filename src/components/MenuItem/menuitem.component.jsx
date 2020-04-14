import React from "react";
import { withRouter } from "react-router-dom";

import "./menuitem.styles.scss";

const MenuItem = ({ title, size, imageURL, history, linkURL, match }) => {
  return (
    <div
      className={`${size} cat-item`}
      onClick={() => {
        history.push(`${match.path}${linkURL}`);
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
        className="background-image"
      ></div>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
