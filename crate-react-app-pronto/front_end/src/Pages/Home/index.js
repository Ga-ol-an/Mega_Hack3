import React from "react";

import "./style.css";

import Header from "../../Components/Header";

import linha_roxa from "../../Assets/negocio_roxo.png";

import CardLivros from '../../Components/CardLivros'; 

import { BlipChat } from "blip-chat-widget";

function Chat() {
    new BlipChat()
    .withAppKey('YXJ2b3JlOjdkNjI2OTEwLWUyMTYtNDhhZC05ZDA4LWU2NDI0NTVhZjA1Ng==')
    .withButton({"color":"#2CC3D5","icon":""})
    .withCustomCommonUrl('https://chat.blip.ai/')
    .build();
}


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
                    <CardLivros/>
                </div>
                </div>
                {/* Não apague essa< */}
            </div>
        </div>
    );
}
