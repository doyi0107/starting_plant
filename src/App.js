import "./App.css";
import "./styles/common/all.css";
import "./styles/Main_card.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Maincard from "./components/Main_card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // ScrollTrigger를 사용한 애니메이션 설정
    gsap.to(".main_back_img_leaf00, .main_back_img_leaf07", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "20% 10%",
        end: "70% 20%",
        scrub: true,
        markers: false,
      },
      x: "-300px",
      ease: "power1.inOut", // 애니메이션 효과 조절
    });

    gsap.to(".main_back_img_leaf01", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "20% 10%",
        end: "70% 20%",
        scrub: true,
        markers: false,
      },
      x: -400, // 오른쪽으로 이동할 거리(px 단위)
      y: 400, // 아래쪽으로 이동할 거리(px 단위)
      ease: "power1.inOut", // 애니메이션 효과 조절
    });

    gsap.to(
      ".main_back_img_leaf03, .main_back_img_leaf04, .main_back_img_leaf05",
      {
        scrollTrigger: {
          trigger: ".main_recommend_plant_section",
          start: "20% 10%",
          end: "70% 20%",
          scrub: true,
          markers: false,
        },
        y: 400, // 아래쪽으로 이동할 거리(px 단위)
        ease: "power1.inOut", // 애니메이션 효과 조절
      }
    );

    gsap.to(".main_back_img_leaf02", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "20% 10%",
        end: "70% 20%",
        scrub: true,
        markers: false,
      },
      x: 400, // 오른쪽으로 이동할 거리(px 단위)
      y: 400, // 아래쪽으로 이동할 거리(px 단위)
      ease: "power1.inOut", // 애니메이션 효과 조절
    });
    gsap.to(".main_back_img_leaf06", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "20% 10%",
        end: "70% 20%",
        scrub: true,
        markers: false,
      },
      x: 400, // 아래쪽으로 이동할 거리(px 단위)
      ease: "power1.inOut", // 애니메이션 효과 조절
    });

    gsap.to(".main_recommend_plant_center", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "30% 10%",
        end: "60% 20%",
        scrub: true,
        markers: false,
      },
      opacity: 0,
    });

    // // 컴포넌트 언마운트 시 ScrollTrigger 인스턴스 제거
    // return () => {
    //   ScrollTrigger.getAll().forEach((instance) => instance.kill());
    // };
  }, []); // 빈 의존성 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 합니다.
  return (
    <div className="App">
      <Header />
      <div className="main_wrap">
        {/* 메인 식물 추천 섹션 */}
        <div className="main_recommend_plant_section">
          <div className="main_back_img_wrap">
            {/* left */}
            <div className="main_back_img_left_wrap">
              <img
                className="main_back_img_leaf00 main_back_img_leaf"
                src="assets/main/main_back_leaf00.png"
              ></img>
              <img
                className="main_back_img_leaf07 main_back_img_leaf"
                src="assets/main/main_back_leaf07.png"
              ></img>
            </div>

            {/* center */}
            <div className="main_back_img_center_wrap">
              <img
                className="main_back_img_leaf01 main_back_img_leaf"
                src="assets/main/main_back_leaf01.png"
              ></img>
              <img
                className="main_back_img_leaf03 main_back_img_leaf"
                src="assets/main/main_back_leaf03.png"
              ></img>
              <img
                className="main_back_img_leaf04 main_back_img_leaf"
                src="assets/main/main_back_leaf08.png"
              ></img>
              <img
                className="main_back_img_leaf05 main_back_img_leaf"
                src="assets/main/main_back_leaf05.png"
              ></img>
              <img
                className="main_back_img_leaf02 main_back_img_leaf"
                src="assets/main/main_back_leaf02.png"
              ></img>
            </div>

            {/* right */}
            <div className="main_back_img_right_wrap">
              <img
                className="main_back_img_leaf06 main_back_img_leaf"
                src="assets/main/main_back_leaf06.png"
              ></img>
            </div>
          </div>

          <div className="main_recommend_plant_center">
            <div className="main_recommend_plant_title_wrap">
              <h1 className="main_recommend_plant_title">STARTING PlANT</h1>
              <p className="main_recommend_plant_subtitle">
                어떤 식물을 키우고 싶으신가요? 당신에게 딱 맞는 식물을
                추천해드립니다.
              </p>
            </div>
            <div className="main_recommend_plant_button_wrap">
              <button className="main_recommend_plant_button">
                식물 추천 받기
              </button>
            </div>
          </div>
        </div>

        {/* 메인 식물 검색 섹션 */}
        <div className="main_search_plant_section">
          {/* 어떤 식물을 찾으시나요? */}
          <div className="main_search_plant_find">
            <div className="main_search_plant_title_wrap">
              <span className="main_search_plant_title">
                <span>어떤 식물을</span> 찾으시나요?
              </span>
            </div>
            <div className="main_search_plant_form_wrap">
              <form className="main_search_plant_form">
                <input
                  className="main_search_plant_input"
                  placeholder="자세히 알고 싶은 식물을 입력해주세요."
                ></input>
              </form>
            </div>
          </div>

          <div className="main_search_plant_card">
            <Maincard />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
