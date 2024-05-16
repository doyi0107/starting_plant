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
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";




gsap.registerPlugin(ScrollTrigger);

export default function Main() {


  useEffect(() => {
    gsap.to(".main_back_img_leaf00, .main_back_img_leaf07", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "20% 10%",
        end: "70% 20%",
        scrub: true,
        markers: false,
      },
      x: "-330px",
      ease: "power1.inOut",
    });

    gsap.to(".main_back_img_leaf01", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "20% 10%",
        end: "70% 20%",
        scrub: true,
        markers: false,
      },
      x: -400,
      y: 400,
      ease: "power1.inOut",
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
        y: 400,
        ease: "power1.inOut",
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
      x: 400,
      y: 400,
      ease: "power1.inOut",
    });
    gsap.to(".main_back_img_leaf06", {
      scrollTrigger: {
        trigger: ".main_recommend_plant_section",
        start: "20% 10%",
        end: "70% 20%",
        scrub: true,
        markers: false,
      },
      x: 400,
      ease: "power1.inOut",
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


  }, []); 

  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data.plants)) 
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
                direction={"horizontal"} 
                loop={true}
                speed={600}
                spaceBetween={30}
                breakpoints={{
                  300: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                simulateTouch={true} 
                grabCursor={true} 
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
                      name={plant.name}
                      image={plant.imgUrl}
                      type={plant.type}
                      level={plant.level}
                      plantId={plant.id}
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
