import React from "react";

function CategoryFilter({ categories, handleFilter }) {
  
  function MakeCategories({categories}) {
    return (categories.map((category) => {
      return (<button value={category} key={category} onClick={handleFilter}>
                {category}
              </button>)
    })
    )
  }
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
        <MakeCategories categories={categories} />
    </div>
  );
}

export default CategoryFilter;
