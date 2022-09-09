import React from "react";
import Img3 from "../img/pes03.jpg"
import "../css/style.css"
import Botao from "../modalPagamento/botao";

function terceirousu(){
   const nome3 = 'Brono Jorge'
   return(
   <>
   <div className="container">
      <div className="div-block">
         <div className="div-img">
            <img id="img" src={Img3} alt="p"/>
         </div>
         <div className="div-nome">
            <p>{nome3}</p>
         </div>
      </div>
      <div className="div-bot">
         <Botao/>
      </div>
   </div>
   </>
   )
}
export default terceirousu