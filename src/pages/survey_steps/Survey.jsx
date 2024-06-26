import React, { useState } from "react";
import "../../styles/Survey.css";
import Step1Level from "./Step1_level";
import Step2Type from "./Step2_type";
import Step3Place from "./Step3_place";
import Step4Price from "./Step4_price";
import Step5Life from "./Step5_life";
import Step6Height from "./Step6_height";
import Result from "./Survey_result";

function Survey() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    level: "",
    type: "",
    place: "",
    price: "",
    life: "",
    height: "",
  });
  const totalSteps = 6;
  const progress = (step / totalSteps) * 100;
  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  const updateUserData = (key, value) => {
    setUserData({ ...userData, [key]: value });
  };
  const resetSurvey = () => {
    setStep(1);
    setUserData({
      level: "",
      type: "",
      place: "",
      price: "",
      life: "",
      height: "",
    });
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1Level
            nextStep={nextStep}
            updateUserData={updateUserData}
            selectedLevel={userData.level}
          />
        );
      case 2:
        return (
          <Step2Type
            nextStep={nextStep}
            updateUserData={updateUserData}
            prevStep={prevStep}
            selectedType={userData.type}
          />
        );
      case 3:
        return (
          <Step3Place
            nextStep={nextStep}
            updateUserData={updateUserData}
            prevStep={prevStep}
            selectedPlace={userData.place}
          />
        );
      case 4:
        return (
          <Step4Price
            nextStep={nextStep}
            updateUserData={updateUserData}
            prevStep={prevStep}
            selectedPrice={userData.price}
          />
        );
      case 5:
        return (
          <Step5Life
            nextStep={nextStep}
            updateUserData={updateUserData}
            prevStep={prevStep}
            selectedLife={userData.life}
          />
        );
      case 6:
        return (
          <Step6Height
            nextStep={nextStep}
            updateUserData={updateUserData}
            prevStep={prevStep}
            selectedHeight={userData.height}
          />
        );
      default:
        return <Result userData={userData} resetSurvey={resetSurvey} />;
    }
  };

  return (
    <div className="survey_wrap">
      <div className="survey_inner">
        {totalSteps >= step && (
          <p className="progress_bar_text">
            {step}/{totalSteps}
          </p>
        )}
        {renderStep()}
      </div>
      <div className="progress_bar_wrap">
        <div
          className="progress_bar"
          style={{ width: `${totalSteps >= step ? progress : 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Survey;
