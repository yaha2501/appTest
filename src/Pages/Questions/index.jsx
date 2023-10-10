/* eslint-disable no-const-assign */
import { Button, Radio, Space } from "antd";
import React, { useEffect, useState } from "react";
import "./index.css";
import Countdown from "../../components/Time";
import { LIST } from "../../constants/List";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addScore, correct, incorrect } from "../../redux/Score/action";
export default function Questions() {
  const [values, setValues] = useState(LIST.map(() => null));
  const [cut, setCut] = useState(0);

  const dispatch = useDispatch();
  const onChange = (e) => {
    const newValue = [...values];
    newValue[cut] = e.target.value || " ";
    setValues(newValue);
  };
  const navigate = useNavigate();
  const onSubmit = () => {
    let a = 0;
    let b = 0;
    let c = 0;

    for (let i = 0; i < LIST.length; i++) {
      if (values[i] === LIST[i].key) {
        a += 1;
        c++;
      } else {
        b++;
      }
    }
    dispatch(addScore(a));
    dispatch(incorrect(b));
    dispatch(correct(c));
    navigate("/result");
  };
  const Next = () => {
    setCut(cut + 1);
  };
  const Previous = () => {
    setCut(cut - 1);
  };
  const timeUp = useSelector((state) => state.scoreReducer.timeUp);
  useEffect(() => {
    if (timeUp === true) {
      onSubmit();
    }
  }, [timeUp]);
  return (
    <div className="container-question">
      {LIST.slice(cut, cut + 1).map((val, index) => (
        <div key={index} className="child-question">
          <div className="header">
            <h1 className="indication">
              {cut + 1} of {LIST.length} questions
            </h1>
            <Countdown seconds={30} />
          </div>
          <span className="question">
            Question {cut + 1} : {val.question}
          </span>
          <Radio.Group onChange={onChange} value={values[cut]}>
            <Space direction="vertical">
              <Radio value={val.answer1} className="list-answer">
                {val.answer1}
              </Radio>
              <Radio value={val.answer2} className="list-answer">
                {val.answer2}
              </Radio>
              <Radio value={val.answer3} className="list-answer">
                {val.answer3}
              </Radio>
            </Space>
          </Radio.Group>
          <div className="footer">
            <Button
              type="primary"
              onClick={Previous}
              className={
                // cut === 0 ? "custom-button-disable" : "custom-button-1"
                cut === 0 ? "custom-button-1" : "custom-button-1"
              }
              disabled={cut === 0 ? true : false}
            >
              Previous Page
            </Button>
            {cut !== LIST.length - 1 ? (
              <Button type="primary" onClick={Next} className="custom-button-1">
                Next
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={onSubmit}
                className="custom-button-1"
              >
                Submit
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
