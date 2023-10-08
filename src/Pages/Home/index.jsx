import { Button } from "antd";
import React, { useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { timeUp } from "../../redux/Score/action";
function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(timeUp(false));
  });
  return (
    <div className="parent">
      <Button
        type="primary"
        onClick={() => navigate("/question")}
        className="button"
      >
        Start Quiz
      </Button>
    </div>
  );
}
export default Home;
