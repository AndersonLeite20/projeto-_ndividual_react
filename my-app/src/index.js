import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Usuario01 from "./usuario/Primeirousu.jsx"
import Usuario02 from "./usuario/Segundousu.jsx"
import Usuario03 from "./usuario/Terceirousu.jsx"
import Transacao from "./modal/Transacoes"
import Status from "./modal/Status"

// Reinderizar os componentes na tela
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Usuario01/>
   <Usuario02/>
   <Usuario03/>
   <Transacao/>
   <Status/>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
