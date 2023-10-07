import { Button } from 'antd';
import React from 'react';
import './index.css'; 
import { useNavigate } from 'react-router-dom';
function Home(){
  const navigate = useNavigate(); 
    return (
      <div className="parent">
        <Button type="primary" onClick={()=>navigate("/question")} className='button'>Start Quiz</Button> 
      </div>
    )
}
export default Home; 