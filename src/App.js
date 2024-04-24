import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import SearchResult from "./pages/Search_result";
import RecommendPlant from "./pages/survey_steps/Survey";
import CardDetail from "./pages/Card_detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/recommend_plant" element={<RecommendPlant />}></Route>
          <Route path="/serach_results" element={<SearchResult />} />
          <Route path="/card_detail/:plantId" element={<CardDetail />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
