import React, { useState, useEffect } from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step5_life({ nextStep, updateUserData, prevStep, selectedLife }) {
  const [selectedLifeState, setSelectedLifeState] = useState(selectedLife);
  const handleSelect = (life) => {
    updateUserData("life", life);
    setSelectedLifeState(life);
  };

  const next = () => {
    nextStep();
  };

  useEffect(() => {
    // 상위 컴포넌트로부터 받은 selectedLife이 변경될 경우 로컬 상태 업데이트
    setSelectedLifeState(selectedLife);
  }, [selectedLife]);
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">몇 년 동안 키울 수 있나요?</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("1_year")}
            className={`survey_step_card ${
              selectedLife === "1_year" ? "selected" : ""
            }`}
          >
            <img
              className="step5_life_img step5_life_1_year"
              src="assets/survey/step5_01.png"
            ></img>
            <p className="step5_life_text">1년 이하</p>
          </button>
          <button
            onClick={() => handleSelect("5_year")}
            className={`survey_step_card ${
              selectedLife === "5_year" ? "selected" : ""
            }`}
          >
            <img
              className="step5_life_img step5_life_5_year"
              src="assets/survey/step5_05.png"
            ></img>
            <p className="step5_life_text">5년 이하</p>
          </button>
          <button
            onClick={() => handleSelect("10_year")}
            className={`survey_step_card ${
              selectedLife === "10_year" ? "selected" : ""
            }`}
          >
            <img
              className="step5_life_img step5_life_10_year"
              src="assets/survey/step5_10.png"
            ></img>
            <p className="step5_life_text">10년 이하</p>
          </button>
          <button
            onClick={() => handleSelect("all")}
            className={`survey_step_card ${
              selectedLife === "all" ? "selected" : ""
            }`}
          >
            {" "}
            <img
              className="step5_life_img step5_life_all"
              src="assets/survey/step_all.png"
            ></img>
            <p className="step5_life_text">상관 없음</p>
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
