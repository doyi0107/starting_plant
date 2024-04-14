import React from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step4_price({ nextStep, updateUserData, prevStep }) {
  const handleSelect = (price) => {
    updateUserData("price", price);
    nextStep();
  };
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">Step 2</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("1_won")}
            className="survey_step_card"
          >
            만원 이하
          </button>
          <button
            onClick={() => handleSelect("5_won")}
            className="survey_step_card"
          >
            오만원 이하
          </button>
          <button
            onClick={() => handleSelect("10_won")}
            className="survey_step_card"
          >
            십만원 이하
          </button>
          <button
            onClick={() => handleSelect("20_won")}
            className="survey_step_card"
          >
            이십만원 이하
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