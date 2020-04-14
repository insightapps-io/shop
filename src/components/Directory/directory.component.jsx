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
          title: "Hats",
          imageURL: "https://source.unsplash.com/V0OsHPIh4To/800x600",
          linkURL: "hats",
        },
        {
          id: 2,
          title: "Sneakers",
          imageURL: "https://source.unsplash.com/aocSTivG0yo/800x600",
          linkURL: "sneakers",
        },
        {
          id: 3,
          title: "Jackets",
          imageURL: "https://source.unsplash.com/w_W9lz-emJw/800x600",
          linkURL: "jackets",
        },
        {
          id: 4,
          title: "Womens",
          imageURL: "https://source.unsplash.com/u5e1kqW6E3M/800x600",
          size: "large",
          linkURL: "womens",
        },
        {
          id: 5,
          title: "Mens",
          imageURL: "https://source.unsplash.com/P0Xb6uQkT_Y/800x600",
          size: "large",
          linkURL: "mens",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory">
        {this.state.categories.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
