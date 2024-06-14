import React, { useContext, useState } from "react";
import { registerPlace } from "../../services/places/registerPlace";
import '../../styles/global.css'
import '../../styles/new_places.css'


export default function NewPlaces(){
    const [form, setForm] = useState([])
    const [showAlert, setAlert] = useState(false)
    const [AlertType, setAlertType] = useState('')
    const [alertColor, setAlertColor] = useState('')
   
    function handleAlert(type,color){
        setAlert(true);
        setAlertType(type);
        setAlertColor(color)
    
         setTimeout(() => {
             setAlert(false);
           }, 2000)
    
    }

    function handleChange(event){
        setForm({...form, [event.target.name]:event.target.value})
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setForm({ ...form, image: reader.result });
          };
          reader.readAsDataURL(file);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(form)

        if(form.title && form.desc1 && form.desc2 && form.image){
            handleAlert('Cadastro realizado com sucesso', 'sucess')
            // registerPlace(form.title, form.desc1, form.desc2, form.image)
            //          .then((data)=>{
            //             handleAlert('Cadastro realizado com sucesso', 'sucess')
            //          })
            //          .catch((error) => {
                
            //              console.log(error.response.status)
                         
            //          } )
        

                }else{
                    handleAlert('Preencha todos os campos', 'danger')    
                
            }

    } 
    


    return(
        <>
        <div className="position-absolute end-0 mb-5 p-5">
            {showAlert && (
            <div className={alertColor == 'danger'? "alert alert-danger alert-dismissible alert-style": "alert alert-success alert-dismissible alert-style"}>
            <div>{AlertType}</div>
         </div>
        )}
        </div>
        
        <div className='background mainContainerPlaces'>

       

                <form className='subcontainer' onSubmit={handleSubmit}>
                <h1 className='placeTitle'>Cadastro de pontos turísticos</h1>

                <h3 className='titlePlaces'>Título</h3>
                <input className='inputTitle' type="text" name='title' value={form.title} onChange={handleChange}/>

                <h3 className='titlePlaces'>Pequena descrição</h3>
                <textarea className= 'inputDesc1' name='desc1' onChange={handleChange}/>

                <h3 className='titlePlaces'>Descrição completa</h3>
                <textarea className= 'inputDesc2' name='desc2' onChange={handleChange}/>

                <h3 className='titlePlaces'>Imagem do ponto turístico</h3>
                <input className='inputFile' type="file" onChange={handleImageChange}/>

                <button className='button salvar' type="submit">Salvar</button>
                </form>

        </div>
        </>
    )
}