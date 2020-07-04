import React from 'react'

import './style.css'

import Perfil1 from './../../Assets/Leitores/leitor.jpg'
import Perfil2 from './../../Assets/Leitores/leitor1.jpg'
import Perfil3 from './../../Assets/Leitores/leitor2.jpg'
import Perfil4 from './../../Assets/Leitores/leitor3.jpg'
import Perfil5 from './../../Assets/Leitores/leitor4.jpg'
import Perfil6 from './../../Assets/Leitores/leitor5.jpg'

const IMAGES = [Perfil1,Perfil2,Perfil3,Perfil4,Perfil5,Perfil6]

export default ()=>{

    function leitores(){
        return IMAGES.map(pessoa=>{

            return(
            <img src={pessoa} alt='leitores' className='leitores'></img>
            );

        })
    }
    return(
        <div className='todos_leitores'>
            {leitores()}
        </div>
    )

}