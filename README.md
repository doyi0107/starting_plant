## 🪴스타팅플랜트
사용자 설문 조사를 통해 맞춤 식물을 추천해 주는 웹-식물을 키우고 싶지만 방대한 정보 속에서 어떤 식물이 자신에게 맞는지 몰라 불편함을 느꼈던 경험을 바탕으로 제작 :smile:

## ⏳프로젝트 기간 
2023.04 ~ 진행중

## 🛠️스킬 스택 
<div style="display:flex; flex-direction:column; align-items:flex-start;">
    <p><strong>Frontend</strong></p>
    <div>
        <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white">
        <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"> 
        <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white"> 
        <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"> 
    </div><br/>
</div>

## 💡기능 구현
* 사용자 맞춤 식물 추천 시스템
* 식물 정보 검색 및 결과 제공
* 소셜 로그인 및 마이페이지 생성
* 장바구니 기능


## 📌트러블 슈팅
* MSW 기반으로 한 Mock API
  * 문제 :  API 작업이 완료되지 않은 상황에서 컴포넌트 제작을 완료, 테스트 시 API interlocking 과정이 별도로 필요
  * 원인 : 사이드 프로젝트로 인한 백엔드 개발자와 다른 시간대
  * 해결 : MSW 기반으로 한 Mock API를 구현함으로써 백엔드 API 개발 완료 전에도 프론트엔드 기능 개발 및 테스트를 진행할 수 있게 되어, 전체 프로젝트의 개발 시간을 효율적으로 단축
* 소셜 로그인
  * 문제 :  모의 api로 post를 보낼 때 access토큰이 안 보내짐
  * 원인 : access토큰이 유효하지 않은 값으로 인식되고 있었음
  * 해결 : 서버로 보내지 않고 Google API에서 데이터를 가져와 access_token을 반환하는 방식으로 바꿈
* 배포 후 환경 설정
  * 문제 : vercel로 배포 후 에러
  * 원인 : vercel은 로컬 .env 파일의 환경 변수가 자동으로 반영되지 않음, 또한 react와 react-google-login 버전이 달라 오류 발생.
  * 해결 : env 파일의 환경 변수들을 vercel환경에서도 동일하게 설정, react-google-login 버전삭제 후 재설치

## 📌시연영상 
 1. 사용자 맞춤 식물 추천 
 <p align="center">
  <img src="https://github.com/doyi0107/starting_plant/assets/93458143/bec55871-f40b-4f0f-814f-0420b6f19df1">
</p>
 2. 식물 검색 및 정보 제공
 3. 소셜로그인 및 마이페이지 생성
 4. 장바구니 기능


## 회고록 보러가기 
 <a href="https://2-doooo-2.tistory.com/170">
      <img src="https://img.shields.io/badge/Tistory-E74C3C?style=flat-square&logo=tistory&logoColor=white"> 
 </a>




