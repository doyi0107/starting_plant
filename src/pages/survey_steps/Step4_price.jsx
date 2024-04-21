import "../../styles/common/all.css";
import "../../styles/Survey.css";

export default function Step4_price({ nextStep, updateUserData, prevStep, selectedPrice }) {
  const handleSelect = (price) => {
    updateUserData("price", price);
  };
  const next = () => {
    if (!selectedPrice) {
      // 선택된 레벨이 없을 때 알람을 띄움
      alert("다음 단계로 넘어가려면 선택지 중 하나를 골라주세요.");
    } else {
      // 선택된 레벨이 있을 때 다음 단계로 이동
      nextStep();
    }
  };

  return (
    <div>
      <div className="step_box_wrap step_box04_wrap">
        <h2 className="survey_step_title">
          어떤 가격대를 찾으시나요?
          <p>1년 정도 자란 식물을 기준으로 매겼습니다.</p>
        </h2>
        <div className="survey_step_card_wrap survey_step_card04_wrap">
          <button
            onClick={() => handleSelect("1_won")}
            className={`survey_step_card ${
              selectedPrice === "1_won" ? "selected" : ""
            }`}
          >
            <img
              className="step4_price_img step4_price_1_won"
              src="assets/survey/step4_1.png"
              alt="만원 이하"
            ></img>
            <p className="step4_price_text">만원 이하</p>
          </button>
          <button
            onClick={() => handleSelect("5_won")}
            className={`survey_step_card ${
              selectedPrice === "5_won" ? "selected" : ""
            }`}
          >
            <img
              className="step4_price_img step4_price_5_won"
              src="assets/survey/step4_5.png"
              alt="오만원 이하"
            ></img>
            <p className="step4_price_text">오만원 이하</p>
          </button>
          <button
            onClick={() => handleSelect("10_won")}
            className={`survey_step_card ${
              selectedPrice === "10_won" ? "selected" : ""
            }`}
          >
            <img
              className="step4_price_img step4_price_10_won"
              src="assets/survey/step4_10.png"
              alt="십만원 이하"
            ></img>
            <p className="step4_price_text">십만원 이하</p>
          </button>
          <button
            onClick={() => handleSelect("20_won")}
            className={`survey_step_card ${
              selectedPrice === "20_won" ? "selected" : ""
            }`}
          >
            <img
              className="step4_price_img step4_price_20_won"
              src="assets/survey/step4_20.png"
              alt="이십만원 이하"
            ></img>
            <p className="step4_price_text">이십만원 이하</p>
          </button>
          <button
            onClick={() => handleSelect("all")}
            className={`survey_step_card ${
              selectedPrice === "all" ? "selected" : ""
            }`}
          >
            <img
              className="step4_price_img step4_price_all"
              src="assets/survey/step_all.png"
              alt="상관 없음"
            ></img>
            <p className="step4_price_text">상관 없음</p>
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
