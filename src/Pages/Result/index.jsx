import { useNavigate } from "react-router-dom";
import "./index.css";
import { useSelector } from "react-redux";
import { CaretLeftOutlined } from "@ant-design/icons";

export default function Result() {
  const score = useSelector((state) => state.scoreReducer.score);
  const incorrect = useSelector((state) => state.scoreReducer.incorrect);
  const correct = useSelector((state) => state.scoreReducer.correct);
  const navigate = useNavigate();
  return (
    <div className="container-result">
      <div className="title">
        <h2>Congratulation! Here is your result </h2>
      </div>
      <div className="child-result">
        <div className="custom-text">
          <p>Total scores : {score} </p>
          <p>The number of true sentences: {correct} </p>
          <p>The number of false sentences: {incorrect} </p>
        </div>
      </div>
      <button onClick={() => navigate("/")} className="button-home">
         {/* eslint-disable-next-line react/jsx-no-undef */}
        <CaretLeftOutlined className="icon-home"/>
      </button>
    </div>
  );
}
