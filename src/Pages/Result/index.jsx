import { KEY } from "../../constants/Key";
import "./index.css";  

export default function Result() {
  return (
    <div className="container-result">
      <div className="title">
        <h2>Congratulation! Here is your result </h2>
      </div>
      <div className="child-result">
        <div className="custom-text">
          
          <p>Total scores : </p>
          <p>The number of true sentences: </p>
          <p>The number of false sentences: </p>
        </div>
      </div>
    </div>
  );
}
