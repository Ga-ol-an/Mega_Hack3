import React from "react";

import "./style.css";

import Header from "../../Components/Header";

import linha_roxa from "../../Assets/negocio_roxo.png";

import CardLivros from '../../Components/CardLivros'; 

const DATA = [
    {src:'src_img' ,key:1},
    {src:'src_img' ,key:2},
    {src:'src_img' ,key:3},
    {src:'src_img' ,key:4},
    {src:'src_img' ,key:5},
    {src:'src_img' ,key:6},
    {src:'src_img' ,key:7},
]

export default function Home() {
    return (
        <div>
            {/* Não apague essa< */}
            <Header></Header>

            <div className="content_home">
                <div className="linha_roxa">
                    <div className="linha2">
                        <img
                            src={linha_roxa}
                            alt="imgzinha"
                            className="escrito_linhar"
                        />
                        Compartilhe seus livros preferidos com os leitores da Árvore
                    </div>
                </div>
                <div className='books'>
                <h1>Destaques</h1>
                <div className="carousel_book">
                    <CardLivros src_img={DATA[0].src} key='teste' />
                </div>
                </div>
                {/* Não apague essa< */}
            </div>
        </div>
    );
}
