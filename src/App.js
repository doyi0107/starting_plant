import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import SearchResult from "./pages/Search_result";
import RecommendPlant from "./pages/survey_steps/Survey";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/recommend_plant" element={<RecommendPlant />}></Route>
          <Route path="/main_serach_results" element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
