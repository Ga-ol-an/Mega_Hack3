import React from 'react'

import './style.css'


import img1 from './../../Assets/img_livro (1).jpg'
import img2 from './../../Assets/img_livro (2).jpg'
import img3 from './../../Assets/img_livro (3).jpg'
import img4 from './../../Assets/img_livro (4).jpg'
import img5 from './../../Assets/img_livro (5).jpg'
import img6 from './../../Assets/img_livro (6).jpg'

/* import img7 from './../../Assets/img_livro (7).jpg' */

/* Vou receber o link de uma imagem */
const IMAGES= [img1,img2,img3,img4,img5, img6]

export default (props)=>{
    function livros(){

       return IMAGES.map(image=>{
           return (

            <img src={image} alt={`imagessss`}/>

           );
       })

    }

    return(
        <div className='Card'>
             {/* <img src={'dgf'} alt='sd' className='photo'/> 
            <br></br>
            <h1>{props.src_img} + dfd</h1>
            <img src={require('./../../Assets/img_livro (2).jpg')} alt='sssss'></img> */}
                {livros()}
           

        </div>

    );
}