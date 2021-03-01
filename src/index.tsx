import React,{FC} from "react";
import ReactDOM from "react-dom";
// import Img from "./images/sunflower.jpg"
// import "./styles.scss";
import App from './app'

// const App:FC = () => {
//   const env = process.env.NODE_ENV;
//   return (
//     <div>
//       <h1>{env}</h1>
//       <p>Welcome to typescript react world</p>
//       <img src={Img} />
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
