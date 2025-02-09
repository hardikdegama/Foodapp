import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);  // State to store food items
  const [loading, setLoading] = useState(true);     // State for loading indicator
  const [error, setError] = useState(null);         // State for any errors

  useEffect(() => {
    // Fetch food items from the API
    axios
      .get('https://api.sampleapis.com/foods/foods')  // Replace with actual API endpoint
      .then((response) => {
        setFoodItems(response.data);  // Store the food items in state
        setLoading(false);             // Set loading to false when data is fetched
      })
      .catch((err) => {
        setError(err.message);        // Set error message if request fails
        setLoading(false);             // Set loading to false if there's an error
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  if (loading) {
    return <div>Loading food items...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Food Items</h3>
      <div className="food-items-container">
        {foodItems.map((foodItem) => (
          <div key={foodItem.id} className="food-item">
            <img 
              src={foodItem.image} 
              alt={foodItem.name} 
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
            <h4>{foodItem.name}</h4>
            <p>{foodItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
