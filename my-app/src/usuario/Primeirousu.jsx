import React from "react";
import Img1 from "../img/pes01.jpg"
import "../css/style.css"

//usuario 01
function primeirousuario(){
   return(
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
         <button onClick={this.emviar}>Pagar</button>
      </div>
      </div>
      </>
      
   )
}
export default primeirousuario