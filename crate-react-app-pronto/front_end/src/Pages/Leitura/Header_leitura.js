import React from 'react'

import './style.css'
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo_img_leitura4.svg';
import {FiArrowLeft} from 'react-icons/fi';

import {useHistory} from 'react-router-dom'

export default function Ler() {
    let history = useHistory();
    return(
        <div className="content_header_leit">
            <img src={Logo} alt="logo" className="logo"/>
            <Link className="voltar">
                <FiArrowLeft/>
                <button className="voltar" onClick={()=>{history.push('/livro')}}>
                    Voltar
                </button>
            </Link>

        </div>

    )
}
