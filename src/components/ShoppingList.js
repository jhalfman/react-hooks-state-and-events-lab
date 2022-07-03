import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [itemList, setItemList] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(e) {
    setSelectedCategory((selectedCategory) => {
      selectedCategory = e.target.value;
      const newItemList = items.filter(item => item.category === selectedCategory || selectedCategory === "All")
      console.log(newItemList);
      setItemList(newItemList);
    })
  }

  

  return (
    

    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleCategoryChange(e)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
