import React from "react";
import Painel from '../arte/Painel'
import Img1 from '../img/pes01.jpg'
import Img2 from '../img/pes02.jpg'
import Img3 from '../img/pes03.jpg'
import Pagamento from "../arte/Pagamento";

export default function Usuario(){
const dados = [
   {foto:Img1, nome:'Maria Regina', id: '001'},
   {foto:Img2, nome:'Elisa Santos', id: '002'},
   {foto:Img3, nome: 'Samuel Silva', id: '003'}
];
const modal =()=>{
   return <Pagamento/>
}
   return(
      <>
         <Painel foto={dados[0].foto} nome={dados[0].nome} id={dados[0].id} clikar={modal}/>
         <Painel foto={dados[1].foto} nome={dados[1].nome} id={dados[1].id}/>
         <Painel foto={dados[2].foto} nome={dados[2].nome} id={dados[2].id}/>
      </>
   )
}