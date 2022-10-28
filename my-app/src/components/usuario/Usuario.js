import React from "react";
import Painel from '../arte/Painel'
import Img1 from '../img/pes01.jpg'
import Img2 from '../img/pes02.jpg'
import Img3 from '../img/pes03.jpg'

export default function Usuario(){
const dados = [
   {foto:Img1, nome:'Maria Regina', id: '001'},
   {foto:Img2, nome:'Elisa Santos', id: '002'},
   {foto:Img3, nome: 'Samuel Silva', id: '009'}
];
   return(
      <>
         <Painel/>
         <Painel/>
         <Painel/>
      </>
   )
}