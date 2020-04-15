import React from "react";
import "./previewcollection.style.scss";

import CollectionItem from "../CollectionItem/collectionitem.component";

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h2 className="title">{title}</h2>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherCollectionItemProps }) => (
            <CollectionItem key={id} {...otherCollectionItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
