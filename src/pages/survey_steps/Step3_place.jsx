import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step3_place({
  nextStep,
  updateUserData,
  prevStep,
  selectedPlace,
}) {
  const handleSelect = (place) => {
    updateUserData("place", place);
  };

  const next = () => {
    if (!selectedPlace) {
      alert("다음 단계로 넘어가려면 선택지 중 하나를 골라주세요.");
    } else {
      nextStep();
    }
  };

  return (
    <div>
      <div className="step_box_wrap">
        <h2 className="survey_step_title">식물을 키우는 장소가 어딘가요?</h2>
        <div className="survey_step_card_wrap">
          <button
            onClick={() => handleSelect("indoor")}
            className={`survey_step_card ${
              selectedPlace === "indoor" ? "selected" : ""
            }`}
          >
            <img
              className="step3_place_img step3_place_indoor"
              src="assets/survey/step3_indoor.png"
            ></img>
            <p className="step3_place_text">실내</p>
          </button>
          <button
            onClick={() => handleSelect("outdoor")}
            className={`survey_step_card ${
              selectedPlace === "outdoor" ? "selected" : ""
            }`}
          >
            <img
              className="step3_place_img step3_place_outdoor"
              src="assets/survey/step3_outdoor.png"
            ></img>
            <p className="step3_place_text">실외</p>
          </button>
          <button
            onClick={() => handleSelect("all")}
            className={`survey_step_card ${
              selectedPlace === "all" ? "selected" : ""
            }`}
          >
            <img
              className="step3_place_img step3_place_all"
              src="assets/survey/step_all.png"
            ></img>
            <p className="step3_place_text"> 상관 없음</p>
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
