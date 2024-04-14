import React from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step5_life({ nextStep, updateUserData, prevStep }) {
  const handleSelect = (life) => {
    updateUserData("life", life);
    nextStep();
  };
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">Step 2</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("1_year")}
            className="survey_step_card"
          >
            1년 이하
          </button>
          <button
            onClick={() => handleSelect("5_year")}
            className="survey_step_card"
          >
            5년 이하
          </button>
          <button
            onClick={() => handleSelect("10_year")}
            className="survey_step_card"
          >
            10년 이하
          </button>
          <button
            onClick={() => handleSelect("all")}
            className="survey_step_card"
          >
            상관없음
          </button>
        </div>
        <div className="prev_button_wrap">
          <button onClick={prevStep}>뒤로 가기</button>
        </div>
      </div>
    </div>
  );
}
