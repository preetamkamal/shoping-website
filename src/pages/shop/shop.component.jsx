import React, { Component } from "react";
import SHOP_DATA from "./shop.data.js";
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx";

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <div className="preview">
          {collections.map(({ id, ...OtherCollections }) => {
            return (
              <CollectionPreview
                key={id}
                {...OtherCollections}
              ></CollectionPreview>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopPage;
