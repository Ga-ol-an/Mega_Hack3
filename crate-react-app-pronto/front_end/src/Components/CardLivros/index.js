import React from 'react'
import {useHistory} from 'react-router-dom'

import './style.css'


import img1 from './../../Assets/Livros/img_livro (1).jpg'
import img2 from './../../Assets/Livros/img_livro (2).jpg'
import img3 from './../../Assets/Livros/img_livro (3).jpg'
import img4 from './../../Assets/Livros/img_livro (4).jpg'
import img5 from './../../Assets/Livros/img_livro (5).jpg'
import img6 from './../../Assets/Livros/img_livro (6).jpg'



/* Vou receber o link de uma imagem */
const IMAGES= [img1,img2,img3,img4,img5, img6]



export default (props)=>{
    let history = useHistory();
    let keey= 1;

    function livros(){

       return IMAGES.map(image=>{
           return (

            <img src={image} alt={`livros`} onClick={()=>{
                history.push('/livro')
            }}
            key={keey++}
            />

           );
       })

    }

    return(
        <div className='Card'>
                {livros()}
        </div>
    );
}