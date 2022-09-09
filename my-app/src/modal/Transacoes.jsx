import React from "react";
import "../css/style.css"

// Mostar o modal de pagamento ao clikar no botão emviar.
export default function emviar(props){
   const pr1 = props.nome1
   return(
      <div id="modal-conteiner">
            <div className="div-nome-usuario">
               <h3>Pagamento para {pr1}</h3>
            </div>
            <div className="div-valor">
               <input id="input-valor" type="text" placeholder="R$ 0,00"/>
            </div>
            <div className="div-select">
               <select name="CARTAO" id="select" placeholder="cartão com final"><option value="">CARTÃO COM O FINAL 0123</option></select>
            </div>
            <div className="div-button-pagar">
               <button>PAGAR</button>
            </div>
      </div>
   )
}


