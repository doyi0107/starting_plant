import React, { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Search_result.css";
import SearchInput from "../components/Search_input";
import { useRecoilState } from "recoil";
import { cartState } from "../components/atoms";
import useAddToCart from "../components/UseAddToCart"; 

function Search_result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useRecoilState(cartState); 
  const addToCart = useAddToCart(); 

  useEffect(() => {
    const { plants: newPlants, searchTerm: newSearchTerm } = location.state || {
      plants: [],
      searchTerm: "",
    };

    setPlants(newPlants);
    setSearchTerm(newSearchTerm);
  }, [location.state]); 

  const handleCardClick = (plantName) => {
    navigate(`/card_detail/${plantName}`);
  };

  return (
    <div>
      <div className="search_result_wrap">
        <div className="search_result_inner">
          <div className="search_result_bar_wrap">
            <div className="search_result_explain">
              {searchTerm
                ? `'${searchTerm}'에 대한 식물 검색 결과 ${plants.length} 건`
                : "받아온 데이터가 없습니다."}
            </div>
            <SearchInput
              onSearch={(data, newSearchTerm) => {
                setPlants(data);
                setSearchTerm(newSearchTerm); 
              }}
            />
          </div>
          <div className="search_result_card_wrap">
            {plants.length > 0 ? (
              plants.map((plant) => (
                <div
                  key={plant.id}
                  className="search_result_card"
                  onClick={() => handleCardClick(plant.id)}
                >
                  <img
                    className="search_result_plant_img"
                    src={plant.imgUrl}
                    alt={plant.name}
                  />
                  <div className="search_result_plant_name">{plant.name}</div>
                  <div className="search_result_plant_feature">
                    <p>#{plant.type}</p> <p>#{plant.level}</p>
                  </div>
                  <button className="main_search_plant_cart_button">
                    <img
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(
                          plant.id,
                          plant.name,
                          plant.imgUrl,
                          plant.type,
                          plant.level
                        );
                      }}
                      className="main_search_plant_cart_img"
                      src="assets/Card/card_shopping_cart.png"
                    />
                  </button>
                </div>
              ))
            ) : (
              <div className="search_result_card">
                <p className="search_result_plant_detail">
                  검색 결과가 없습니다.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search_result;
