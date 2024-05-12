import React from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step1_level({
  nextStep,
  updateUserData,
  selectedLevel,
}) {
  const handleSelect = (level) => {
    updateUserData("level", level);
  };

  const next = () => {
    if (!selectedLevel) {
      alert("다음 단계로 넘어가려면 선택지 중 하나를 골라주세요.");
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">
          식물에 대해 어느 정도 알고 있나요?
        </h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("Beginner")}
            className={`survey_step_card ${
              selectedLevel === "Beginner" ? "selected" : ""
            }`}
          >
            <img
              className="step1_level_img step1_level_beginner"
              src="assets/survey/step1_newbie.png"
              alt="초보자"
            ></img>
            <p className="step1_level_text">초보자</p>
          </button>
          <button
            onClick={() => handleSelect("Intermediate")}
            className={`survey_step_card ${
              selectedLevel === "Intermediate" ? "selected" : ""
            }`}
          >
            <img
              className="step1_level_img step1_level_Inter"
              src="assets/survey/step1_inter.png"
              alt="경험자"
            ></img>
            <p className="step1_level_text">경험자</p>
          </button>
          <button
            onClick={() => handleSelect("Expert")}
            className={`survey_step_card ${
              selectedLevel === "Expert" ? "selected" : ""
            }`}
          >
            <img
              className="step1_level_img step1_level_Expert"
              src="assets/survey/step1_Expert.png"
              alt="전문가"
            ></img>
            <p className="step1_level_text">전문가</p>
          </button>
        </div>
        <div className="prev_next_button_wrap">
          <button onClick={() => next()} className="next_button">
            다음 단계
          </button>
        </div>
      </div>
    </div>
  );
}
