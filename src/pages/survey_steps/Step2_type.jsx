import React, { useState, useEffect } from "react";
import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step2_type({
  nextStep,
  updateUserData,
  prevStep,
  selectedType,
}) {
  const [selectedTypeState, setSelectedTypeState] = useState(selectedType);
  const handleSelect = (type) => {
    updateUserData("type", type);
    setSelectedTypeState(type);
  };

  const next = () => {
    if (!selectedType) {
      // 선택된 레벨이 없을 때 알람을 띄움
      alert("다음 단계로 넘어가려면 선택지 중 하나를 골라주세요.");
    } else {
      // 선택된 레벨이 있을 때 다음 단계로 이동
      nextStep();
    }
  };

  useEffect(() => {
    // 상위 컴포넌트로부터 받은 selectedType이 변경될 경우 로컬 상태 업데이트
    setSelectedTypeState(selectedType);
  }, [selectedType]);
  return (
    <div>
      <div className="step_box_wrap step_box02_wrap">
        <h2 className="survey_step_title">어떤 종류의 식물을 키우고 싶나요?</h2>
        <div className="survey_step_card_wrap survey_step_card02_wrap">
          <button
            onClick={() => handleSelect("flower")}
            className={`survey_step_card ${
              selectedType === "flower" ? "selected" : ""
            }`}
          >
            <img
              className="step2_type_img step2_type_flower"
              src="assets/survey/step2_flower.png"
            ></img>
            <p className="step2_type_text">꽃이 피는 식물</p>
            <p>예)장미,튤립</p>
          </button>
          <button
            onClick={() => handleSelect("tree")}
            className={`survey_step_card ${
              selectedType === "tree" ? "selected" : ""
            }`}
          >
            <img
              className="step2_type_img step2_type_tree"
              src="assets/survey/step2_tree.png"
            ></img>
            <p className="step2_type_text">나무형 식물</p>
            <p>예)벚나무,단풍나무</p>
          </button>
          <button
            onClick={() => handleSelect("foliage")}
            className={`survey_step_card ${
              selectedType === "foliage" ? "selected" : ""
            }`}
          >
            <img
              className="step2_type_img step2_type_foliage"
              src="assets/survey/step2_foliage.png"
            ></img>
            <p className="step2_type_text">관엽 식물</p>
            <p>예)몬스테라,스파티필름</p>
          </button>
          <button
            onClick={() => handleSelect("succulents")}
            className={`survey_step_card ${
              selectedType === "succulents" ? "selected" : ""
            }`}
          >
            <img
              className="step2_type_img step2_type_succulents"
              src="assets/survey/step2_succulents.png"
            ></img>
            <p className="step2_type_text">다육 식물</p>
            <p>예)선인장,자브라 식물</p>
          </button>
          <button
            onClick={() => handleSelect("Herb")}
            className={`survey_step_card ${
              selectedType === "Herb" ? "selected" : ""
            }`}
          >
            <img
              className="step2_type_img step2_type_herb"
              src="assets/survey/step2_herb.png"
            ></img>
            <p className="step2_type_text">허브 식물</p>
            <p>예)바질,로즈마리</p>
          </button>
          <button
            onClick={() => handleSelect("all")}
            className={`survey_step_card ${
              selectedType === "all" ? "selected" : ""
            }`}
          >
            <img
              className="step2_type_img step2_type_beginner"
              src="assets/survey/step_all.png"
            ></img>
            <p className="step2_type_text">상관 없음</p>
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
