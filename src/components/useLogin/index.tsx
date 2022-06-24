import {useState} from 'react'
import * as C from './styles'
import {useNavigate} from "react-router-dom"

export const UserLogin = () => {
    
    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [clasName, setClasName] = useState("closed")
    const [borderCor, setBorderCor] = useState(false)
    const [show, setShow] = useState( false)
    const navigate = useNavigate()

    const checkValidUser = () => {

        if((user == "angelo.ppedrosa@gmail.com" && password == "1234") || 
            (user == "31975132125" && password == "1234")){
                navigate("/memberArea")
        }
        else{
            setClasName("open")
            setBorderCor(true)
            console.log("deu ruim")
        }
    }

    const handleChangeType = () => {
        if(show == false){
         
          setShow(true)
      
        }else{
          
          setShow(false)
        }
      }

    return(
        <C.Container>
           <C.Gradient></C.Gradient>
           <C.Flex>
                <C.Before></C.Before>
                    <C.LoginArea className='Container'>
                        <h1>Entrar</h1>
                        <C.label borderCor={borderCor}>
                            <input type="text"
                             placeholder='Email ou número de telefone'
                             value={user}
                             onChange={event => setUser(event.target.value)}
                            />
                        </C.label>
                        <span className={clasName}>Informe um email ou número de telefone válido.</span>
                        <C.label borderCor={borderCor}>
                            <input type={show ? "text" : "password"}  
                            className='inputPassword' placeholder='Senha'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            />
                            <button onClick={handleChangeType}>MOSTRA</button>
                        </C.label>
                        <span className={clasName}>A senha deve ter entre 4 e 60 caracteres.</span>
                        <C.Button onClick={checkValidUser}>Entrar</C.Button>
                        <C.Options>
                            <div>
                                <input type="checkbox" placeholder='Lembre-se de min' className='checkbox'/>
                                <span className='span'>Lembre-se de min</span>
                            </div>
                            <a href="/login">Precisa de Ajuda?</a>
                        </C.Options>
                        <C.Signit>
                                <div>
                                    <p>Novo por aqui? </p>
                                    <a href="/">Assine agora.</a>
                                </div>
                                <p className='knowMore'>
                                    Esta página é protegida pelo Google reCAPTCHA
                                    para garantir que você não é um robô. <a className='know'>Saiba mais</a>.
                                </p>
                        </C.Signit>
                 </C.LoginArea>
           </C.Flex>
        </C.Container>
    )
}