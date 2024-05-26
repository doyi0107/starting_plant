import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/common/all.css";
import "../../styles/Survey_result.css";
import useAddToCart from "../../components/UseAddToCart"; 
import { useRecoilState } from "recoil";
import { cartState } from "../../components/atoms"; 

export default function Survey_result({
  userData,
  resetSurvey,

}) {
  const [recommendedPlants, setRecommendedPlants] = useState([]);
  const navigate = useNavigate(); 
  const addToCart = useAddToCart(); 
  const [cart, setCart] = useRecoilState(cartState);
  console.log(userData);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const queryParams = new URLSearchParams({
          ...(userData.level && { level: userData.level }),
          ...(userData.type && { type: userData.type }),
          ...(userData.place && { place: userData.place }),
          ...(userData.price && { price: userData.price }),
          ...(userData.life && { life: userData.life }),
          ...(userData.height && { height: userData.height }),
        }).toString();
        const apiUrl = `https://api.example.com/plants?${queryParams}`;
        // 실제 백엔드 연동 코드
        // const apiUrl = `http://39.125.37.13:5000/plant/reco/?${queryParams}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("API 요청에 실패했습니다.");
        }

        const data = await response.json();
        setRecommendedPlants(data.plants);
        // 실제 백엔드 연동 코드
        // setRecommendedPlants(data);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
        setRecommendedPlants([]);
      }
    };

    fetchPlants();
  }, [userData]); 


  const handlePlantClick = (plantId) => {
    navigate(`/card_detail/${plantId}`); 
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); 

  return (
    <div className="survey_result_wrap">
      <div className="survey_result_inner">
        <h2 className="survey_result_title">추천 식물</h2>
        {recommendedPlants.length > 0 ? (
          <ul className="survey_result_card_wrap">
            {recommendedPlants.map((plant, index) => (
              <li
                key={index}
                className="survey_result_card"
                onClick={() => handlePlantClick(plant.id)}
              >
                <img
                  className="survey_result_card_img"
                  src={plant.imgUrl}
                  alt={plant.name}
                />
                <p className="survey_result_card_name">{plant.name}</p>
                <div className="survey_result_card_sub">
                  <p>#{plant.type}</p>
                  <p>#{plant.level}</p>
                </div>
                <button className="main_search_plant_cart_button">
                  <img
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart(
                        plant.id,
                        // plant.plants_id,
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
              </li>
            ))}
          </ul>
        ) : (
          <p>추천할 식물이 없습니다. 조건을 변경해 보세요.</p>
        )}
        <div className="survey_result_replay_button_wrap">
          <button className="survey_result_replay_button" onClick={resetSurvey}>
            다시 하기
          </button>
        </div>
      </div>
    </div>
  );
}

