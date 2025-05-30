import React from "react";

function Filter({ onCategoryChange, searchText, selectedCategory, onSearchChange}) {
  return (
    <div className="Filter">
      <input type="text" 
      name="search" 
      placeholder="Search..." 
      onChange={onSearchChange} 
      value={searchText}
      />
      <select name="filter" onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
