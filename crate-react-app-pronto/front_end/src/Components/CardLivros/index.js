import React from 'react'
import {useHistory} from 'react-router-dom'

import './style.css'


import img1 from './../../Assets/img_livro (1).jpg'
import img2 from './../../Assets/img_livro (2).jpg'
import img3 from './../../Assets/img_livro (3).jpg'
import img4 from './../../Assets/img_livro (4).jpg'
import img5 from './../../Assets/img_livro (5).jpg'
import img6 from './../../Assets/img_livro (6).jpg'


/* Vou receber o link de uma imagem */
const IMAGES= [img1,img2,img3,img4,img5, img6]

export default (props)=>{
    let history = useHistory();


    function livros(){

       return IMAGES.map(image=>{
           return (

            <img src={image} alt={`imagessss`} onClick={()=>{
                history.push('/livro')
            }}/>

           );
       })

    }
    return(
        <div className='Card'>
                {livros()}
        </div>

    );
}