import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/Card_detail.css";
import useAddToCart from "../components/UseAddToCart"; 
import { useRecoilState } from "recoil";
import { cartState } from "../components/atoms"; 

function CardDetail() {
  let { plantId } = useParams();

  const [plant, setPlant] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const addToCart = useAddToCart(); 
  const [cart, setCart] = useRecoilState(cartState); 

  useEffect(() => {
    const url = `https://api.example.com/plants?plantId=${plantId}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlant(data.plants[plantId]);
        console.log(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
        setError(error);
        setIsLoading(false);
      });
  }, [plantId]); 

  if (isLoading) return <div className="card_detail_wrap">로딩 중...</div>;

  if (error)
    return (
      <div className="card_detail_wrap">
        에러가 발생했습니다: {error.message}
      </div>
    );

  return (
    <div className="card_detail_wrap">
      <div className="card_detail">
        {plant ? (
          <div className="card_detail_plant">
            <div className="card_detail_plant_wrap">
              <h2 className="card_detail_plant_name">{plant.name}</h2>
            </div>
            <div className="card_detail_plant_back_color">
              {/* top */}
              <div className="card_detail_plant_top">
                <div className="card_detail_plant_img_wrap">
                  <img
                    className="card_detail_plant_img"
                    src={plant.imgUrl}
                    alt={plant.name}
                  />
                  <div className="card_detail_plant_sub">
                    <div>
                      <p>#{plant.type}</p>
                      <p>#{plant.level}</p>
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
                        className="card_detail_cart_img"
                        src="/assets/Card/card_shopping_cart.png"
                      />
                    </button>
                  </div>
                </div>
                <div className="card_detail_plant_intro_wrap">
                  <h3 className="card_detail_plant_intro_title">식물 소개</h3>
                  <p className="card_detail_plant_intro_explain">
                    {plant.explain}
                  </p>
                </div>
              </div>
              {/* bottom */}
              <div className="card_detail_plant_bottom">
                <div className="card_detail_plant_bottom_inner">
                  <div className="card_detail_plant_info">
                    <div className="card_detail_plant_span_wrap">
                      <p className="card_detail_plant_info_title">
                        물 주는 방법
                      </p>
                      <span className="card_detail_plant_info_span"></span>
                    </div>
                    <p className="card_detail_plant_info_sub"> {plant.water}</p>
                  </div>
                  <div className="card_detail_plant_info">
                    <div className="card_detail_plant_span_wrap">
                      <p className="card_detail_plant_info_title">온도 </p>
                      <span className="card_detail_plant_info_span"></span>
                    </div>
                    <p className="card_detail_plant_info_sub">
                      {plant.temperature}°C
                    </p>
                  </div>
                  <div className="card_detail_plant_info">
                    <div className="card_detail_plant_span_wrap">
                      <p className="card_detail_plant_info_title">흙 종류</p>
                      <span className="card_detail_plant_info_span"></span>
                    </div>
                    <p className="card_detail_plant_info_sub">{plant.soil}</p>
                  </div>
                  <div className="card_detail_plant_info">
                    <div className="card_detail_plant_span_wrap">
                      <p className="card_detail_plant_info_title">햇빛 </p>
                      <span className="card_detail_plant_info_span"></span>
                    </div>
                    <p className="card_detail_plant_info_sub">
                      {plant.sunlight}
                    </p>
                  </div>
                  <div className="card_detail_plant_info">
                    <div className="card_detail_plant_span_wrap">
                      <p className="card_detail_plant_info_title">환경</p>
                      <span className="card_detail_plant_info_span"></span>
                    </div>
                    <p className="card_detail_plant_info_sub">
                      {plant.environment}
                    </p>
                  </div>
                  <div>
                    <div className="card_detail_plant_span_wrap">
                      <p className="card_detail_plant_info_title">주의 사항 </p>
                      <span className="card_detail_plant_info_span"></span>
                    </div>
                    <p className="card_detail_plant_info_sub">
                      {plant.precautions}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>해당 식물을 찾을 수 없습니다.</p>
        )}
      </div>
    </div>
  );
}

export default CardDetail;
