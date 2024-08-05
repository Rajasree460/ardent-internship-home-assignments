import React, { useState } from "react";

const foodItems = [
  { id: 1, name: 'Capichino', category: 'Coffee', price: 300, img: 'img/capa.jpg' },
  { id: 2, name: 'Chilli Chicken', category: 'Non Veg', price: 300, img: 'img/chilic.jpg' },
  { id: 3, name: 'Burger', category: 'Fast Food', price: 250, img: 'img/burger.jpg' },
  { id: 4, name: 'Chowmin', category: 'Fast Food', price: 150, img: 'img/chow.jpg' },
  { id: 5, name: 'Idli Dosha', category: 'Break Fast', price: 300, img: 'img/idlidosa.jpg' },
  { id: 6, name: 'Green Tea', category: 'Tea', price: 250, img: 'img/tea.jpg' },
  { id: 7, name: 'Chapathi', category: 'Lunch', price: 200, img: 'img/chapati.jpg' },
];

const FoodItem = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Food');

  const categories = ['All Food', 'Fast Food', 'Veg', 'Non Veg', 'Break Fast', 'Lunch', 'Dinner', 'Tea', 'Coffee'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  let filteredItems;
  if (selectedCategory === 'All Food') {
    filteredItems = foodItems;
  } else {
    filteredItems = foodItems.filter(item => item.category === selectedCategory);
  }

  return (
    <>
      <div className="card1">
        <h1 className="text-center">Food Menu Item</h1>
      </div>
      <div className="button-group text-center mt-4">
        {categories.map(category => (
          <button 
            key={category} 
            type="button" 
            className="btn btn-custom mx-1"
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="container-fluid mt-5 mx-3">
        <div className="row mx-5">
          {filteredItems.map(item => (
            <div key={item.id} className="col-lg-3 col-md-6 col-sm-12">
              <div className="card card-custom mb-3">
                <div className="row no-gutters h-100">
                  <div className="col-md-4">
                    <img src={item.img} className="img-fluid" alt={item.name} />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <h6 className="card-title">{item.category}</h6>
                      <p className="card-text">Price: Rs.{item.price}</p>
                      <button type="button" className="btn-order-now mt-auto">Order Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodItem;
