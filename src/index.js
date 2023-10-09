import { useState, useEffect, React } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import ChatMenu from "./Talkwithprofessional";
import MenuTalk from "./App";
import Baymax from "./Baymax";
import NotFound from "./notfound";
import Resources from "../src/components/Resources";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LineWave } from "react-loader-spinner";

// import reportWebVitals from "./reportWebVitals";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>{loading ? <Loader /> : <Content />}</div>;
}

function Loader() {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={style}>
      <LineWave color={"#123abc"} />
    </div>
  );
}

function Content() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuTalk />} /> {/* Renders at / */}
        <Route path="/chat-menu" element={<ChatMenu />} />{" "}
        <Route path="/baymax" element={<Baymax />} />{" "}
        <Route path="/resources" element={<Resources />} />{" "}
        <Route path="*" element={<NotFound />} /> {/* Renders at /chat-menu */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
