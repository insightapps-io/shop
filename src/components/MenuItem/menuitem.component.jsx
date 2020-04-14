import React from "react";

import "./menuitem.styles.scss";

const MenuItem = ({ title, size, imageURL }) => {
  return (
    <div className={`${size} cat-item`}>
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

export default MenuItem;
