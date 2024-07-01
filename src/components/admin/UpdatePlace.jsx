import React, { useContext, useState, useRef } from "react";
import Alert from "../login/Alert";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";
import { AlertColorContext } from "../../contexts/alertColorContext";
import { updatePlace } from "../../services/places/updatePlace";
import '../../styles/global.css'
import '../../styles/new_places.css'
import { useNavigate } from "react-router-dom";

export default function UpdatePlace(){
    const navigate = useNavigate();

    const placeAsStr = localStorage.getItem('update-place')
    const place = JSON.parse(placeAsStr)
    console.log(place)

    const [form, setForm] = useState({
        _id: place._id ?? '',
        title: place.name ?? '',
        desc: place.description ?? '',
        image: place.image ?? '',
        endereco: place.address ?? '',
        horario: place.openingHours ?? ''
    })

    const [image, setImage] = useState('')
    const [imageToShow, setImageToShow] = useState(place.image ?? undefined)

    const fileInputRef = useRef(null);
    const [showAlert, setShowAlert] = useContext(AlertContext)
    const [alertType, setAlertType] = useContext(AlertTypeContext)
    const [alertColor, setAlertColor] = useContext(AlertColorContext);
    const token = localStorage.getItem("token")
   
    function handleAlert(state, type, color=null) {
        setShowAlert(state)
        setAlertType(type)
        setAlertColor(color)

        setTimeout(() => {
            setShowAlert(false);
          }, 2000)
        }


    function handleChange(event){
        setForm({...form, [event.target.name]:event.target.value})
    }

    function handleImageChange(event) {
        const file = event.target.files[0];
        if (file) {
          setImage(file)
          setImageToShow(URL.createObjectURL(file))
          };
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(form)

        if(form._id && form.title && form.desc && form.endereco && form.horario){
            
                updatePlace(form._id, form.title, form.endereco,  form.horario, form.desc, image, token)
                      .then((data)=>{

                        handleAlert(true, 'Atualização realizado com sucesso', 'success')
                        //voltar para a tela anterior
                        navigate(-1);
                        fileInputRef.current.value = ''; // Redefinir o campo de entrada de arquivo
                      })
                      .catch((error) => {
                        handleAlert(true, 'Algum erro ocorreu durante a atualização, tente novamente', 'danger')  
                
                          console.log(error.response.status)
                         
                      } )
        

                }else{
                    handleAlert(true, 'Preencha todos os campos', 'danger')    
                
            }

    } 
    


    return(
        <>
        <Alert></Alert>
        <div className='background mainContainerPlaces'>

       

                <form className='subcontainer' onSubmit={handleSubmit}>
                <h1 className='placeTitle'>Atualização de ponto turístico</h1>

                <h3 className='titlePlaces'>Título</h3>
                <input className='inputTitle' type="text" name='title' value={form.title} onChange={handleChange}/>

                <h3 className='titlePlaces'>Endereço</h3>
                <input className='inputTitle' type="text" name='endereco' value={form.endereco} onChange={handleChange}/>

                <h3 className='titlePlaces'>Horário de funcionamento</h3>
                <input className='inputTitle' type="text" name='horario' value={form.horario} onChange={handleChange}/>

                <h3 className='titlePlaces'>Descrição</h3>
                <textarea className= 'inputDesc' name='desc' value={form.desc} onChange={handleChange}/>

                <h3 className='titlePlaces'>Imagem do ponto turístico</h3>
                {imageToShow && <img className="imagem" src={imageToShow} alt={form.title} />}
                <input className='inputFile' type="file" ref={fileInputRef} onChange={handleImageChange}/>

                <button className='button cadastrar' type="submit">Atualizar</button>
                </form>

        </div>
        </>
    )
}