
import {Link} from 'react-router-dom'
import {UserLogin} from "../../components/useLogin"
import * as C from "./style"

export const Login = () => {

    return(
        <C.Container>
            <C.Header className="header">
                <Link to="/"><img src="../src/img/netflix.svg" alt="header" /></Link>
            </C.Header>
            <UserLogin/>
            <C.Footer>
                <div className='information'>
                    <p>Dúvidas? Ligue 0800 591 8942</p>
                    <ul className='grid'>
                        <li><a href="/login">Perguntas frequentes</a></li>
                        <li><a href="/login">Centro de ajuda</a></li>
                        <li><a href="/login">Termos de uso</a></li>
                        <li><a href="/login">Privacidade</a></li>
                        <li><a href="/login">Preferências de cookies</a></li>
                        <li><a href="/login">Informações corporativas</a></li>
                    </ul>
                    <button className='buttonLanguage'>Português</button>
                </div>
            </C.Footer>
        </C.Container>
    )   
}