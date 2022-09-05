import React from "react";
import Img2 from "../img/pes02.jpg"
import "../css/style.css"

function segundousu(){
   return(
      <>
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
      </>
   )
}
export default segundousu