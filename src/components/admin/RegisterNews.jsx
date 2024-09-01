import { useContext, useState, useRef } from "react";
import Alert from "../login/Alert";
import { AlertContext } from "../../contexts/alertContext";
import { AlertTypeContext } from "../../contexts/alertTypeContext";
import { AlertColorContext } from "../../contexts/alertColorContext";
import Header from "../home/Header"
import { useNavigate } from "react-router-dom";
import '../../styles/global.css'
import '../../styles/new_places.css'
import { postArticle } from "../../services/articles/postArticle";

const initialFormState = {
    title: '',
    text: '',
    image: '',
    video: ''
};


export default function RegisterNews(){
    const navigate = useNavigate();

    const [form, setForm] = useState(initialFormState)
    const [image, setImage] = useState('')
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
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(form)
        console.log(image)

        if (form.title && form.text && form.video && image) {
            postArticle(form.title, form.video,  form.text, image, token)
                .then((data) => {
                    handleAlert(true, 'Cadastro realizado com sucesso', 'success')
                    setForm(initialFormState); // Redefinir o formulário
                        if (fileInputRef.current) {
                            fileInputRef.current.value = ''; // Redefinir o campo de entrada de arquivo
                        }
                        navigate(-1);
                })
                .catch((error) => {
                    handleAlert(true, 'Algum erro ocorreu durante o cadastro, tente novamente', 'danger')  
                    console.log(error.response.status)
                })
        } else {
            handleAlert(true, 'Preencha todos os campos', 'danger')        
        }
    } 
    
    return(
        <>
        <div className="background">
        <Alert></Alert>
            <Header />
            <div className='mainContainerPlaces'>
                    <form className='subcontainer' onSubmit={handleSubmit}>
                    <h1 className='placeTitle'>Cadastro de notícias</h1>

                    <h3 className='titlePlaces'>Título</h3>
                    <input className='inputTitle' type="text" name='title' value={form.title} onChange={handleChange}/>

                    <h3 className='titlePlaces'>URL do vídeo</h3>
                    <input className='inputTitle' type="urlVideo" name='video' value={form.video} onChange={handleChange}/>

                    <h3 className='titlePlaces'>Texto</h3>
                    <textarea className='inputDesc' name='text' value={form.text} onChange={handleChange}/>

                    <h3 className='titlePlaces'>Imagem da notícia</h3>
                    {image && <img className="imagem" src={URL.createObjectURL(image)} alt={form.title} />}
                    <input className='inputFile' type="file" ref={fileInputRef} onChange={handleImageChange}/>

                    <button className='button cadastrar' type="submit">Cadastrar</button>
                    </form>
            </div>
        </div>
          
        </>
    )
}