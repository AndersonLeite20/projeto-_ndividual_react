import React from "react";
import Img1 from './img/pes01.jpg'
import './css/user.css'
import Img2 from './img/pes02.jpg'
import Img3 from './img/pes03.jpg'

function comtainer(){
   return(
      <>
      <div className="container">
         <div className="div-block">
            <div className="div-img">
               <img id="img" src={Img1} alt="p"/>
            </div>
         </div>
         <div>
            <p className="div-nome">Viviane</p>
            <p>transação</p>
         </div>
         <div className="div-bot">
            <button>Pagar</button>
         </div>
      </div>

      <div className="container">
         <div className="div-block">
            <div className="div-img">
               <img id="img" src={Img2} alt="p"/>
            </div>
         </div>
         <div>
            <p className="div-nome">Sonia</p>
            <p>transação</p>
         </div>
         <div className="div-bot">
            <button>Pagar</button>
         </div>
      </div>

      <div className="container">
         <div className="div-block">
            <div className="div-img">
               <img id="img" src={Img3} alt="p"/>
            </div>
         </div>
         <div>
            <p className="div-nome">Marcos</p>
            <p>transação</p>
         </div>
         <div className="div-bot">
            <button>Pagar</button>
         </div>
      </div>
      </>
   )
}
export default comtainer