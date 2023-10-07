import { Button, Radio, Space } from "antd";
import React, { useState } from "react";
import "./index.css";
import Countdown from "../../components/Time";
import { LIST } from "../../constants/List";
import { useNavigate } from "react-router-dom";
export default function Questions() {
  const [value, setValue] = useState("");
  const [values, setValues] = useState([]);
  const [cut, setCut] = useState(0);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
    setValues(...values,value);
  };
  const navigate = useNavigate(); 
  console.log(LIST.length);
  console.log(cut);
  const onSubmit = () => {
    // navigate("/result")
    console.log(values);
  }
  const Next = () => {
     setValue("");
     setCut(cut + 1);
  };
  const Previous = () => {
     setValue("");
     setCut(cut - 1);
  };
  return (
    <div className="container-question">
      {LIST.slice(cut, cut + 1).map((val, index) => (
        <div className="child-question">
          <div className="header">
            <h1 className="indication">
              {cut + 1} of {LIST.length} questions
            </h1>
            <Countdown seconds={10} />
          </div>
          <span className="question">
            Question {cut + 1} : {val.question}
          </span>
          <Radio.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              <Radio value="1" className="list-answer">
                {val.answer1}
              </Radio>
              <Radio value="2" className="list-answer">
                {val.answer2}
              </Radio>
              <Radio value={"3"} className="list-answer">
                {val.answer3}
              </Radio>
            </Space>
          </Radio.Group>
          <div className="footer">
            <Button
              type="primary"
              onClick={Previous}
              className={cut === 0 ? "custom-button-disable" : "custom-button-1" }
              disabled={cut === 0 ? true : false}
            >
              Previous Page
            </Button>
            {cut !== LIST.length - 1 ? (
              <Button
                type="primary"
                onClick={Next}
                className="custom-button-1"
              >
                Next
              </Button>
            ) : (
              <Button type="primary" onClick={onSubmit} className="custom-button-1">Submit</Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
