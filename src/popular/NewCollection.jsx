import React from "react";
import new_collection from "../components/assets/new_collections";
import "./Popular.css";
import "./NewCollection.css";
import Item from "../items/Item";
function NewCollection() {
  return (
    <div>
      <div className="popular-container1 autoshow">
        <h1>
          {" "}
          New Collection <hr />
        </h1>
      </div>
      <div className="new-collection-container">
      <div className="new-collection autoshow">
        {new_collection.map((item, index) => {
          return <Item key={index} {...item} />;
        })}
        </div>
      </div>
    </div>
  );
}

export default NewCollection;
