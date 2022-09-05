import React from "react";
import Img3 from "../img/pes03.jpg"
import "../css/style.css"

function terceirousu(){
   return(
   <>
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
         <button >Pager</button>
      </div>
   </div>
   </>
   )
}
export default terceirousu