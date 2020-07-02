import React from 'react'

import './style.css'

import Header from '../../Components/Header'

import linha_roxa from '../../negocio_roxo.png'

export default function Home() {

  return (

    <div className='content'>{/* Não apague essa< */}
        <Header></Header>

    <div className='linha_roxa'>
        <div className="linha2">
            <img src={linha_roxa} alt='imgzinha' className='escrito_linhaR'/>
        </div>
    </div>
    <h1>
        Destaques
    </h1>
    <div className='carousel_book'>
        carousel dos lvriso
    </div>
    {/* Não apague essa< */}
    </div>
    
  );
}