import React from 'react'

import HeaderLeit from './Header_leitura'

import PagLeit from '../../Assets/livro_dom_casmurro.PNG'

import './style.css'

export default function Ler() {

    return(
        <div className="content_ler">
            <div className="content_ler2">
            <HeaderLeit></HeaderLeit>
            </div>
            <img src={PagLeit} alt='imagem_do_livro'/>
        </div>

    )
}