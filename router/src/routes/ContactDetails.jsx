import { useParams, useNavigate, useMatch } from "react-router-dom";

const ContactDetails = () =>{
    const {id} = useParams();

    //6 - redirect
    const navigate = useNavigate()
    const hadleContact = () =>{
    console.log("Contato Enviado!");
    return navigate("/");  
    }

    
    return(
    <div>
        <h1>Exibindo mais informações contatos: {id}</h1>
        <button onClick={hadleContact}>Enviar Mensagem</button>
    </div>
    
)
}

export default ContactDetails