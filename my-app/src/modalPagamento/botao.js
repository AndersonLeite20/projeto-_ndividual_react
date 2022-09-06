import React from "react"
import "../css/style.css"
import Emviar from "../modal/Transacoes"

function Botao(e){
   return(
      <>
         <button onClick={(e)=><Emviar/>}>Pager</button>
      </>
   )
} 
export default Botao   