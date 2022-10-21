import React from "react";
import {useState} from "react";
import Modal from "react-modal"
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
      cartão()
   }
   function HandleCloseModal(){
      setIsOpen(false)
      cartão()
   }

   const props = (props) => {
      var nome = document.getElementsByClassName.onClick('div-nome')
      console.log(nome)
   }

   function cartão(){
      let cards = [
         // valid card
         {
           card_number: '1111111111111111',
           cvv: 789,
           expiry_date: '01/18',
         },
         // invalid card
         {
           card_number: '4111111111111234',
           cvv: 123,
           expiry_date: '01/20',
         },
      ];
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
                     <h3>Pagamento para {props.nome}</h3>
                  </div>
                  <div className="div-valor">
                     <input id="input-valor" type="text" required placeholder="R$ 0,00"/>
                  </div>
                  <div className="div-select">
                     <select name="CARTAO" id="select"              placeholder="cartão com final">
                        <option>23</option>
                     </select>
                  </div>
                  <div className="div-button-pagar">
                     <button onClick={HandleCloseModal}>PAGAR</button>
                  </div>
            </form>
         </Modal>
      </>
   )
}