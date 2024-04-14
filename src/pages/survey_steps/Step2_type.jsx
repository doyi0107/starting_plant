import React from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step2_type({ nextStep, updateUserData, prevStep }) {
  const handleSelect = (type) => {
    updateUserData("type", type);
    nextStep();
  };
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">Step 2</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("flower")}
            className="survey_step_card"
          >
            꽃이 피는 식물
          </button>
          <button
            onClick={() => handleSelect("tree")}
            className="survey_step_card"
          >
            나무형 식물
          </button>
          <button
            onClick={() => handleSelect("foliage")}
            className="survey_step_card"
          >
            관엽 식물
          </button>
          <button
            onClick={() => handleSelect("succulents")}
            className="survey_step_card"
          >
            다육 식물
          </button>
          <button
            onClick={() => handleSelect("Herb")}
            className="survey_step_card"
          >
            허브 식물
          </button>
          <button
            onClick={() => handleSelect("all")}
            className="survey_step_card"
          >
            상관없음
          </button>
          <button
            onClick={() => handleSelect("Expert")}
            className="survey_step_card"
          >
            전문가
          </button>
        </div>
        <div className="prev_button_wrap">
          <button onClick={prevStep}>뒤로 가기</button>
        </div>
      </div>
    </div>
  );
}
