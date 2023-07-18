import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import RouteTest from "./compoments/RouteTest";
import MyButton from "./compoments/MyButton";
import MyHeader from "./compoments/MyHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader headText={"App"} />
        <h2>안녕리액트</h2>
        <MyButton
          text={"버튼이올시다"}
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        <MyButton
          text={"버튼이올시다"}
          onClick={() => alert("버튼클릭")}
          type={"negative"}
        />
        <MyButton
          text={"버튼이올시다"}
          onClick={() => alert("버튼클릭")}
          type={"positive"}
        />
        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`}></img>
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`}></img>
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`}></img>
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`}></img>
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`}></img> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
