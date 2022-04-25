import React, { useEffect, useState } from "react";
// import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import Spinner from '../components/UI/Spinner'
import "../styles/Menu.css";

function Menu() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://blog-system-cc938-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
          image: responseData[key].image,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    })
  }, []);

    if(isLoading){
      return (
        <div className="menu">
          <div className="loadingnerror">
                  <Spinner/>
          </div>
        </div>
       
      );
    }

    if (httpError) {
      return (
        <div className="menu">
          <div className="loadingnerror">
            <h1>{httpError}</h1>
          </div>
        </div>
        
      );
    }
  return (
    <div className="menu">
      <h1 className="menuTitle"> MENU</h1>
      <div className="menuList">
        {meals.map((menuItem) => {
          return (
            <MenuItem
              key={menuItem.id}
              id={menuItem.id}
              name={menuItem.name}
              description={menuItem.description}
              price={menuItem.price}
              image={menuItem.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
