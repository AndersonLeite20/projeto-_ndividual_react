import React from "react";
import Modal from "react-modal"
import {useState} from "react";
import './css/pagina.css'
import Img1 from './img/pes01.jpg'
import Img2 from './img/pes02.jpg'
import Img3 from './img/pes03.jpg'

Modal.setAppElement('body')
export default function Painel(){

  /* const [id, setId] = useState('');
   const [valor, setValor] = useState('R$ 0,00');
   const [card, setCard] = useState({});
   const [vle, setVle] = useState(0);*/


   const [modalIsOpen, setIsOpen] = useState(false)

   function HandleOpenModal(){
      setIsOpen(true)
   }
   function HandleCloseModal(){
      setIsOpen(false)
   }

   return(
      <>
         <div className="container" onClick={HandleOpenModal}>
            <div className="div-block">
               <div className="div-img">
                  <img id="img" src={Img1} alt="p"/>
               </div>
            </div>
            <div>
               <div className="nome">
                  <p className="div-nome">Ana</p>
                  <p>id</p>
               </div>
               <p>transação</p>
            </div>
            <div className="div-bot">
               <button>Pagar</button>
            </div>
         </div>

         <div className="container" onClick={HandleOpenModal}>
            <div className="div-block">
               <div className="div-img">
                  <img id="img" src={Img2} alt="p"/>
               </div>
            </div>
            <div className="nome">
               <p className="div-nome">Sonia</p>
               <p>transação</p>
            </div>
            <div className="div-bot">
               <button>Pagar</button>
            </div>
         </div>

         <div className="container" onClick={HandleOpenModal}>
            <div className="div-block">
               <div className="div-img">
                  <img id="img" src={Img3} alt="p"/>
               </div>
            </div>
            <div className="nome">
               <p className="div-nome">Marcos</p>
               <p>transação</p>
            </div>
            <div className="div-bot">
               <button>Pagar</button>
            </div>
         </div>

            <Modal
               isOpen={modalIsOpen}
               onRequestClose={HandleCloseModal}
            >
               <form id="modal-conteiner">
                     <div className="div-nome-usuario">
                        <h3>Pagamento para</h3>
                     </div>
                     <div className="div-valor">
                        <input id="input-valor" type="text" placeholder="R$ 0,00"/>
                     </div>
                     <div className="div-select">
                        <select name="CARTAO" id="select" placeholder="cartão com final"><option >CARTÃO COM O FINAL 0123</option></select>
                     </div>
                     <div className="div-button-pagar">
                        <button onClick={HandleCloseModal}>PAGAR</button>
                     </div>
               </form>
            </Modal>
      </>
   )
}

   
   
   

         

         

         
      
   
   

