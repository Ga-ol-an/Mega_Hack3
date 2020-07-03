import React from 'react'

import './style.css'
import {Link} from 'react-router-dom';
import Logo from '../../Assets/Logo_img_leitura4.svg';
import {FiArrowLeft} from 'react-icons/fi';

export default function Ler() {

    return(
        <div className="content_header">
            <img src={Logo} alt="logogg" className="logo"/>
            <Link className="voltar">
                <FiArrowLeft/>
                Voltar
            </Link>

        </div>

    )
}
