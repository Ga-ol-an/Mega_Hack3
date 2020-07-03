import React from 'react'

import './style.css'

import Logo from '../../Assets/Logo_img_leitura4.svg';


export default function Ler() {

    return(
        <div className="content_header">
            <img src={Logo} alt="logogg" className="logo"/>
            <button className="voltar">Voltar</button>

            

        </div>

    )
}