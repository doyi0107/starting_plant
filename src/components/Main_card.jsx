import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { useRecoilState } from "recoil";
import { cartState } from "./atoms"; 
import useAddToCart from "./UseAddToCart"; 
import "../styles/Main_card.css";

function Card({ name, image, type, level, plantId }) {
  const navigate = useNavigate(); 
  const [cart, setCart] = useRecoilState(cartState); 
  const addToCart = useAddToCart(); 

  const handlePlantClick = (plantId) => {
    navigate(`/card_detail/${plantId}`); 
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div
      className="main_search_plant_card01 main_search_plant_card00 "
      onClick={() => handlePlantClick(plantId)} 
    >
      <div className="main_search_plant_card00_inner">
        <img className="main_search_plant_img" src={image} alt={name} />
        <div className="main_search_plant_name">{name}</div>
        <div className="main_search_plant_feature">
          <p>#{type}</p> <p>#{level}</p>
        </div>
        <button className="main_search_plant_cart_button">
          <img
            onClick={(e) => {
              e.stopPropagation();
              addToCart(plantId, name, image, type, level);
            }}
            className="main_search_plant_cart_img"
            src="assets/Card/card_shopping_cart.png"
          />
        </button>
      </div>
    </div>
  );
}

export default Card;
