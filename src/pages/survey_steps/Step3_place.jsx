import React, { useState, useEffect } from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step3_place({
  nextStep,
  updateUserData,
  prevStep,
  selectedPlace,
}) {
  const [selectedPlaceState, setSelectedPlaceState] = useState(selectedPlace);
  const handleSelect = (place) => {
    updateUserData("place", place);
    setSelectedPlaceState(place);
  };

  const next = () => {
    nextStep();
  };

  useEffect(() => {
    // 상위 컴포넌트로부터 받은 selectedPlace이 변경될 경우 로컬 상태 업데이트
    setSelectedPlaceState(selectedPlace);
  }, [selectedPlace]);
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">식물을 키우는 장소가 어딘가요?</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("indoor")}
            className={`survey_step_card ${
              selectedPlace === "indoor" ? "selected" : ""
            }`}
          >
            <img
              className="step3_place_img step3_place_indoor"
              src="assets/survey/step3_indoor.png"
            ></img>
            <p className="step3_place_text">실내</p>
          </button>
          <button
            onClick={() => handleSelect("outdoor")}
            className={`survey_step_card ${
              selectedPlace === "outdoor" ? "selected" : ""
            }`}
          >
            <img
              className="step3_place_img step3_place_outdoor"
              src="assets/survey/step3_outdoor.png"
            ></img>
            <p className="step3_place_text">실외</p>
          </button>
          <button
            onClick={() => handleSelect("all")}
            className={`survey_step_card ${
              selectedPlace === "all" ? "selected" : ""
            }`}
          >
            <img
              className="step3_place_img step3_place_all"
              src="assets/survey/step_all.png"
            ></img>
            <p className="step3_place_text"> 상관 없음</p>
          </button>
        </div>
        <div className="prev_next_button_wrap">
          <button onClick={prevStep}>이전 단계</button>
          <button onClick={() => next()} className="next_button">
            다음 단계
          </button>
        </div>
      </div>
    </div>
  );
}
