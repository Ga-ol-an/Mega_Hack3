import React from 'react'


import './style.css'

/* Vou receber o link de uma imagem */
export default function CardLivros(props){

    return(
        <div className='Card'>
            <img src={props.src_img} alt='sd' className='photo'/>
            <br></br>
            <h1>{props.key} dfd</h1>
        </div>

    );
}