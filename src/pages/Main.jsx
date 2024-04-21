import React, { useEffect, useState } from "react";
import "../styles/common/all.css";
import "../styles/Main.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import PlantCard from "../components/Main_card";
import SearchInput from "../components/Search_input"; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Swiper React components와 필요한 모듈을 직접 가져옵니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";




gsap.registerPlugin(ScrollTrigger);

export default function Main() {


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
      x: "-330px",
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

  const [plants, setPlants] = useState(['커피나무','장미','튤립','벚나무','해바라기']);

  useEffect(() => {
    fetch("API_URL")
      .then((response) => response.json())
      .then((data) => setPlants(data.plants)) // 예제에서는 data.plants, 실제 구조에 따라 수정 필요
      .catch((error) => console.error(error));
  }, []);





  return (
    <div>
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
            <div className="main_recommend_plant_button_wrap btn-container">
              <Link
                to="/recommend_plant"
                className="main_recommend_plant_button"
              >
                <span className="text">식물 추천 받기</span>
                <div class="icon-container">
                  <div class="icon icon--left">
                    <svg>
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </div>
                  <div class="icon icon--right">
                    <svg>
                      <use xlinkHref="#arrow-right"></use>
                    </svg>
                  </div>
                </div>
              </Link>
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
            <SearchInput />
          </div>

          <div className="main_search_plant_card">
            <div className="main_search_plant_card_wrap">
              <Swiper
                className="main_search_plant_swiper"
                modules={[Autoplay, Pagination, Navigation]}
                direction={"horizontal"} // or "horizontal"
                loop={true}
                speed={600}
                spaceBetween={30}
                breakpoints={{
                  // 640px 이상일 때
                  300: {
                    slidesPerView:3,
                  },
                  // 1024px 이상일 때
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                simulateTouch={true} // 마우스로 드래그 가능하게 설정
                grabCursor={true} // 마우스 커서 변경 설정
                centeredSlides={false}
                scrollbar={{ draggable: true }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                {plants.map((plant, index) => (
                  <SwiperSlide key={index}>
                    <PlantCard
                      //  name={plant.name}
                      name={plant}
                      image={plant.image}
                      type={plant.type}
                      level={plant.level}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <svg style={{ display: "none" }}>
        <symbol id="arrow-right" viewBox="0 0 20 10">
          <path d="M14.84 0l-1.08 1.06 3.3 3.2H0v1.49h17.05l-3.3 3.2L14.84 10 20 5l-5.16-5z"></path>
        </symbol>
      </svg>
    </div>
  );
}
