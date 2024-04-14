import React from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";


export default function Step3_place({ nextStep, updateUserData, prevStep }) {
  const handleSelect = (place) => {
    updateUserData("place", place);
    nextStep();
  };
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">Step 2</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("indoor")}
            className="survey_step_card"
          >
            실내
          </button>
          <button
            onClick={() => handleSelect("outdoor")}
            className="survey_step_card"
          >
            실외
          </button>
          <button
            onClick={() => handleSelect("all")}
            className="survey_step_card"
          >
            상관없음
          </button>{" "}
        </div>
        <div className="prev_button_wrap">
          <button onClick={prevStep}>뒤로 가기</button>
        </div>
      </div>
    </div>
  );
}
