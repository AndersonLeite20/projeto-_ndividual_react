import React from "react";
import '../css/pagina.css'

export default function Pagamento(){
  
   return(
      <>
         <div className="conteiner-Pagamento">
               <div className="nome-Pagemeno">
                  <h2 className="h2">Pagamento para</h2>
               </div>
               <div className="valor-pagamento">
                  <div className="input">
                     <p>input</p>
                  </div>
                  <div className="select">
                     <select>
                        <option>Cartão com final 0123</option>
                        <option>catr</option>
                     </select>
                  </div>
               </div>
               <div className="div-button">
                  <button className="button">Pagar</button>
               </div>
         </div>
      </>
   )
}