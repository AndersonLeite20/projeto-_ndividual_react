import React from "react";
import "../css/style.css"



// Mostar o modal de pagamento ao clikar no botão emviar. 
const modal = props => {
    const {className, modal_conteiner0} = props

    return(
        <>
        <div id="modal-conteiner" ref={modal_conteiner0} className={`${className}`} >
            <div className="div-nome-usuario">
                <h3>Pagamento para NOME DO USUARIO</h3>
            </div>
            <div className="div-valor">
                <input id="input-valor" type="text" placeholder="R$ 0,00"/>
            </div>
            <div className="div-select">
                <select name="CARTAO" id="select" aria-placeholder="cartão com final"><option value="">CARTÃO COM O FINAL 0123</option></select>
            </div>
            <div className="div-button-pagar">
                <button id="button">PAGAR</button>
            </div>
        </div>
        </>
    )
}    

export default modal