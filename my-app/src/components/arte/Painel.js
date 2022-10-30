import React from "react";
import '../css/pagina.css'

export default function Panel(props){



   
   return(
      <>
         <div className="conteiner">
            <div className="foto">
               <img src={props.foto} alt=''/>
            </div>
            <div className="nomeId">
               <div className="nome">
                  <h3>{props.nome}</h3>
               </div>
               <div className="id">
                  <p>{props.id}</p>
               </div>
            </div>
            <div className="botao">
               <button onClick=''>Pagar</button>
            </div>
         </div>
      </>
   )
}