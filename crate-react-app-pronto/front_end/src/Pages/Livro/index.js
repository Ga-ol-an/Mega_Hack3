import React from "react";

import Header from "./../../Components/Header";

import { useHistory } from "react-router-dom";

import img1 from "./../../Assets/img_livro (1).jpg";

import "./style.css";

export default function Livro() {
    let history = useHistory();

    return (
        <div>
            <Header></Header>
            <div className="content_pag_livro">
                <div className="image">
                    <img src={img1} alt="capa" className="capa_livro" />
                </div>
                <div className="descricao">
                    <h1 className="titulo">Dom Casmurro</h1>

                    <div className="infos">
                        <div className="autor">Autor : Machado de Assis</div>

                        <div className="editora">Editora: Árvore de Livros</div>
                    </div>

                    <div className="retangulo_rosa">o retangulo rosa aqui</div>

                    <div className="resumo">
                        Um dos maiores clássicos da literatura brasileira
                        apresenta um dos maiores mistérios das obras de Machado
                        de Assis. O autor não se limita a promover o debate
                        sobre a traição de Capitu, como o perpetua através das
                        gerações de leitores de uma... Ver mais
                    </div>
                    <div className="botoes">
                        <button>Favoritar</button>
                        <button>Indicar </button>
                        <button
                            onClick={() => {
                                history.push("./leitura");
                            }}
                        >
                            Aperte aqui para ler!
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
