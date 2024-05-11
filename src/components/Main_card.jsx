import React, { useEffect } from "react"; // useState를 추가로 import합니다.
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가
import { useRecoilState } from "recoil";
import { cartState } from "./atoms"; // 상태를 import
import useAddToCart from "./UseAddToCart"; // 커스텀 훅 import

// styling
import "../styles/Main_card.css";

function Card({ name, image, type, level, plantId }) {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const [cart, setCart] = useRecoilState(cartState); // Recoil 상태 사용
  const addToCart = useAddToCart(); // 커스텀 훅 사용

  // 식물 카드 클릭 핸들러
  const handlePlantClick = (plantId) => {
    navigate(`/card_detail/${plantId}`); // 식물 상세 페이지로 이동
  };

  // 장바구니 상태를 로컬 스토리지에 저장하는 함수
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); // cart 상태가 변경될 때마다 실행됩니다.

  return (
    <div
      className="main_search_plant_card01 main_search_plant_card00 "
      onClick={() => handlePlantClick(plantId)} // 수정된 부분
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
