import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가

// styling
import "../styles/Main_card.css";

function Card({ name, image, type, level, plantId }) {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // 식물 카드 클릭 핸들러
  const handlePlantClick = (plantId) => {
    navigate(`/card_detail/${plantId}`); // 식물 상세 페이지로 이동
  };

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
      </div>
    </div>
  );
}

export default Card;
