import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import SearchResult from "./pages/Search_result";
import RecommendPlant from "./pages/survey_steps/Survey";
import CardDetail from "./pages/Card_detail";
import { AuthProvider } from "./context/AuthContext";
import Mypage from "./pages/Mypage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import MainCard from "./components/Main_card";
import UseAddToCart from "./components/UseAddToCart";
import SurveyResult from "./pages/survey_steps/Survey_result";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <RecoilRoot>
            <Routes>
              <Route path="/SurveyResult" element={<SurveyResult />}></Route>
              <Route path="/UseAddToCart" element={<UseAddToCart />}></Route>
              <Route path="/MainCard" element={<MainCard />}></Route>
              <Route path="/" element={<Main />}></Route>
              <Route
                path="/recommend_plant"
                element={<RecommendPlant />}
              ></Route>
              <Route path="/search_result" element={<SearchResult />}></Route>
              <Route
                path="/card_detail/:plantId"
                element={<CardDetail />}
              ></Route>
              <Route path="/Mypage" element={<Mypage />}></Route>
            </Routes>
          </RecoilRoot>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
