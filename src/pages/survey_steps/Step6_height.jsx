import React, { useState, useEffect } from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step6_height({ nextStep, updateUserData, prevStep, selectedHeight }) {
  const [selectedHeightState, setSelectedHeightState] = useState(selectedHeight);
  const handleSelect = (height) => {
    updateUserData("height", height);
    setSelectedHeightState(height);
  };

  const next = () => {
    if (!selectedHeight) {
      // 선택된 레벨이 없을 때 알람을 띄움
      alert("다음 단계로 넘어가려면 선택지 중 하나를 골라주세요.");
    } else {
      // 선택된 레벨이 있을 때 다음 단계로 이동
      nextStep();
    }
  };

  useEffect(() => {
    // 상위 컴포넌트로부터 받은 selectedHeight이 변경될 경우 로컬 상태 업데이트
    setSelectedHeightState(selectedHeight);
  }, [selectedHeight]);
  return (
    <div>
      <div className="step_box_wrap step_box06_wrap">
        <h2 className="survey_step_title">얼마나 자라는 식물을 찾으시나요?</h2>
        <div className="survey_step_card_wrap survey_step_card06_wrap">
          <button
            onClick={() => handleSelect("20_cm")}
            className={`survey_step_card ${
              selectedHeight === "20_cm" ? "selected" : ""
            }`}
          >
            <img
              className="step6_height_img step6_height_all"
              src="assets/survey/step6_grow.png"
            ></img>
            <p className="step6_height_text">20cm 이하</p>
          </button>
          <button
            onClick={() => handleSelect("50_cm")}
            className={`survey_step_card ${
              selectedHeight === "50_cm" ? "selected" : ""
            }`}
          >
            <img
              className="step6_height_img step6_height_all"
              src="assets/survey/step6_grow.png"
            ></img>
            <p className="step6_height_text">50cm 이하</p>
          </button>
          <button
            onClick={() => handleSelect("1_m")}
            className={`survey_step_card ${
              selectedHeight === "1_m" ? "selected" : ""
            }`}
          >
            <img
              className="step6_height_img step6_height_all"
              src="assets/survey/step6_grow.png"
            ></img>
            <p className="step6_height_text">1m 이하</p>
          </button>
          <button
            onClick={() => handleSelect("5_m")}
            className={`survey_step_card ${
              selectedHeight === "5_m" ? "selected" : ""
            }`}
          >
            <img
              className="step6_height_img step6_height_all"
              src="assets/survey/step6_grow.png"
            ></img>
            <p className="step6_height_text">5m 이하</p>
          </button>
          <button
            onClick={() => handleSelect("all")}
            className={`survey_step_card ${
              selectedHeight === "all" ? "selected" : ""
            }`}
          >
            <img
              className="step6_height_img step6_height_all"
              src="assets/survey/step_all.png"
            ></img>
            <p className="step6_height_text"> 상관 없음</p>
          </button>
        </div>
        <div className="prev_next_button_wrap">
          <button onClick={prevStep}>이전 단계</button>
          <button onClick={() => next()} className="next_button">
            결과 확인
          </button>
        </div>
      </div>
    </div>
  );
}
