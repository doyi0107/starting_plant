import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step5_life({ nextStep, updateUserData, prevStep, selectedLife }) {
  const handleSelect = (life) => {
    updateUserData("life", life);
  };

  const next = () => {
    if (!selectedLife) {
      alert("다음 단계로 넘어가려면 선택지 중 하나를 골라주세요.");
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <div className="step_box_wrap step_box05_wrap">
        <h2 className="survey_step_title">
          원하는 식물의 수명이 어떻게 되나요?
        </h2>
        <div className="survey_step_card_wrap survey_step_card05_wrap">
          <button
            onClick={() => handleSelect("1_year")}
            className={`survey_step_card ${
              selectedLife === "1_year" ? "selected" : ""
            }`}
          >
            <img
              className="step5_life_img step5_life_1_year"
              src="assets/survey/step5_01.png"
              alt="1년 이하"
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
              alt="5년 이하"
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
              alt="10년 이하"
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
              alt="상관 없음"
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
