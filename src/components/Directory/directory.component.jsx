import React from "react";
import "./directory.styles.scss";

import MenuItem from "../MenuItem/menuitem.component";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          id: 1,
          title: "Shirts",
          imageURL: "https://source.unsplash.com/R2aodqJn3b8/800x600",
        },
        {
          id: 2,
          title: "Pants",
          imageURL: "https://source.unsplash.com/N6jI7-zb4sg/800x600",
        },
        {
          id: 3,
          title: "Shoes",
          imageURL: "https://source.unsplash.com/OX_en7CXMj4/800x600",
        },
        {
          id: 4,
          title: "Womens",
          imageURL: "https://source.unsplash.com/u5e1kqW6E3M/800x600",
          size: "large",
        },
        {
          id: 5,
          title: "Mens",
          imageURL: "https://source.unsplash.com/P0Xb6uQkT_Y/800x600",
          size: "large",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.categories.map(({ id, title, imageURL, size }) => (
          <MenuItem key={id} title={title} size={size} imageURL={imageURL} />
        ))}
      </div>
    );
  }
}

export default Directory;
