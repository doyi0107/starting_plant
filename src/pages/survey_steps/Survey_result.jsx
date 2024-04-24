import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅 추가
import "../../styles/common/all.css";
import "../../styles/Survey_result.css";

export default function Survey_result({ userData, resetSurvey }) {
  const [recommendedPlants, setRecommendedPlants] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용
  console.log(userData);

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        // 쿼리 파라미터를 조건에 따라 동적으로 추가합니다.
        const queryParams = new URLSearchParams({
          ...(userData.level && { level: userData.level }),
          ...(userData.type && { type: userData.type }),
          ...(userData.place && { place: userData.place }),
          ...(userData.price && { price: userData.price }),
          ...(userData.life && { life: userData.life }),
          ...(userData.height && { height: userData.height }),
        }).toString();

        // API 요청을 보내기 위한 URL 구성
        const apiUrl = `https://api.example.com/plants?${queryParams}`;

        // API 요청
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("API 요청에 실패했습니다.");
        }

        const data = await response.json();
        console.log(data);

        // 데이터 설정
        setRecommendedPlants(data.plants);
      } catch (error) {
        console.error("데이터를 불러오는데 실패했습니다.", error);
        setRecommendedPlants([]);
      }
    };

    fetchPlants();
  }, [userData]); // userData가 변경될 때마다 이 useEffect를 다시 실행합니다.

  // 식물 카드 클릭 핸들러
  const handlePlantClick = (plantId) => {
    navigate(`/card_detail/${plantId}`); // 식물 상세 페이지로 이동
  };

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

