import "./App.css";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import AboutIcon from "./Components/AboutIcon";
import {FeedbackProvider} from './Context/FeedbackContext';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackProvider>
        <Routes>
          <Route exact path="/" element={
            <>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
            <AboutIcon />
            </>}
            />
          <Route path="/about" element={<About />} />
        </Routes>
        </FeedbackProvider>
      </div>
    </>
  );
}

export default App;
