import React from "react";

class Item extends React.Component {
  render() {
    return (
      <div>
        {this.props.data.name}
      </div>
    );
  }
}

export default Item;
