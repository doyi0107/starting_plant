import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step6_height({ nextStep, updateUserData, prevStep, selectedHeight }) {
  const handleSelect = (height) => {
    updateUserData("height", height);
  };

  const next = () => {
    if (!selectedHeight) {
      alert("다음 단계로 넘어가려면 선택지 중 하나를 골라주세요.");
    } else {
      nextStep();
    }
  };

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
              alt="20cm 이하"
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
              alt="50cm 이하"
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
              alt="1m 이하"
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
              alt="5m 이하"
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
              alt="상관 없음"
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
