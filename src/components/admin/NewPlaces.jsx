import React from 'react'
import '../../styles/global.css'
import '../../styles/new_places.css'

export default function NewPlaces(){
    return(
        <div className='background mainContainerPlaces'>
            <div className='subcontainer'>

                <h1 className='mainTitle'>Cadastro de pontos turísticos</h1>

                <h3 className='titlePlaces'>Título</h3>
                <input className='inputTitle' type="text" />

                <h3 className='titlePlaces'>Pequena descrição</h3>
                <textarea className= 'inputDesc1' />

                <h3 className='titlePlaces'>Descrição completa</h3>
                <textarea className= 'inputDesc2'/>

                <h3 className='titlePlaces'>Imagem do ponto turístico</h3>
                <input className='inputFile' type="file" />

                <button className='button salvar'>Salvar</button>
            </div>
        </div>
        
    )
}