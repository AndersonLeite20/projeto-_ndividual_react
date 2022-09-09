import React from "react";
import Img1 from "../img/pes01.jpg"
import "../css/style.css"
import Botao from "../modalPagamento/botao";

//usuario 01
function primeirousuario(props){
   const nome1="vivian Santos"
   return(
      <>
         <div className="container">
            <div className="div-block">
               <div className="div-img">
                  <img id="img" src={Img1} alt="p"/>  
               </div>
               <div className="div-nome">
                  <p>{nome1}</p>
               </div>
            </div>   
            <div className="div-bot">
               <Botao/>
            </div>
         </div>
      </>
      
   )
}
export default primeirousuario