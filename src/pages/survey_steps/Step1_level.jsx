import React from 'react'
import '../../styles/common/all.css';
import "../../styles/Survey.css";

export default function Step1_level({ nextStep, updateUserData }) {
  const handleSelect = (level) => {
    updateUserData("level", level);
    nextStep();
  };
  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">
          식물에 대해 어느 정도 알고 있나요?
        </h2>
        <div className="survey_step_card_wrap">
          {/* 간단한 예시로, 실제 구현은 사용자의 입력을 받는 UI 요소에 따라 다름 */}
          <button
            onClick={() => handleSelect("Beginner")}
            className="survey_step_card"
          >
            초보자
          </button>
          <button
            onClick={() => handleSelect("Intermediate")}
            className="survey_step_card"
          >
            경험자
          </button>
          <button
            onClick={() => handleSelect("Expert")}
            className="survey_step_card"
          >
            전문가
          </button>
        </div>
      </div>
    </div>
  );
}
