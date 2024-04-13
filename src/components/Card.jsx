

// styling
import "../styles/Card.css";

function Card({
  plantNames,
  plantPrices,
  plantFeatures,
  imageLink,
}) {
  // 상품 구매하러 가기
  const priceSign = "원";

  return (
    <div className="main_search_plant_card01 main_search_plant_card00">
      <div
        className="plant_img"
        style={{ backgroundImage: "url(" + `${imageLink}` + ")" }}
      ></div>
      <div className="plant_price">{plantPrices + priceSign}</div>
      <div className="plant_name">커피 나무{plantNames}</div>

      <div className="plant_feature">
        {`#적정온도10ºC`}{" "}{" "}
        {plantFeatures !== "상관없음" ? `#${plantFeatures}` : `#멀티제형`}
      </div>
    </div>
  );
}

export default Card;