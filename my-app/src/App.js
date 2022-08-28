import React from "react"
import Img1 from "./img/pes01.jpg"
import Img2 from "./img/pes02.jpg"
import Img3 from "./img/pes03.jpg"
import "./css/style.css"
//import {View, Button, text} from 'react-native'


function App(){
  return (
    <>
    <div className="container">
        <div className="div-block">
            <div className="div-img">
                <img id="img" src={Img1} alt="p"/>
            </div>
            <div className="div-nome">
                <p>Vivian Santos</p>
            </div>
        </div>
        <div className="div-bot">
            <button>Pager</button>
        </div>
    </div>

    <div className="container">
        <div className="div-block">
            <div className="div-img">
                <img id="img" src={Img2} alt="p"/>
            </div>
            <div className="div-nome">
                <p>Maria Paula</p>
            </div>
        </div>
        <div className="div-bot">
            <button>Pager</button>
        </div>
    </div>

    <div className="container">
        <div className="div-block">
            <div className="div-img">
                <img id="img" src={Img3} alt="p"/>
            </div>
            <div className="div-nome">
                <p>Bruno Jorge</p>
            </div>
        </div>
        <div className="div-bot">
            <button type="submit">Pager</button>
        </div>
    </div>
    </>
  );
}
export default App;
