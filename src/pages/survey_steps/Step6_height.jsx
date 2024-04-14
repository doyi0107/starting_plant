import React from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step6_height({ nextStep, updateUserData, prevStep }) {
  const handleSelect = (height) => {
    updateUserData("height", height);
    nextStep();
  };
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">Step 6</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("20_cm")}
            className="survey_step_card"
          >
            20cm 이하
          </button>
          <button
            onClick={() => handleSelect("50_cm")}
            className="survey_step_card"
          >
            50cm 이하
          </button>
          <button
            onClick={() => handleSelect("1_m")}
            className="survey_step_card"
          >
            1m 이하
          </button>
          <button
            onClick={() => handleSelect("5_m")}
            className="survey_step_card"
          >
            5m 이하
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
