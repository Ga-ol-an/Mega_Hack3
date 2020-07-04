import React from "react";

import "./style.css";
import {FiCircle} from 'react-icons/fi';
import logo_arvore from "../../Assets/logo_arvore.svg";

export default function Header() {
    return (
        <div className="content_header">
            <div className="top_header">
                <img
                    src={logo_arvore}
                    alt="logo_da_arvore"
                    className="logo_arvore"
                />
                <input
                    type="text"
                    className="Search_bar"
                    placeholder="Pesquise pelo titulo, autor, categoria, etc"
                />
                <div className="Nome_foto">
                    <FiCircle width={30} height={30} display={'flex'}
                     alignmentBaseline={'center'}
                     color={'#333'}/>
                     Vinícius
                </div>
            </div>
            <div className="bot_header">
            INÍCIO
            CATEGORIAS
            BANCA
            INDICADOS
            LIGA
            ATIVIDADES
            FAVORITOS
            MEUS E-BOOKS
            </div>
        </div>
    );
}
