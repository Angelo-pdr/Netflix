import "./teste.css"
import {Link} from 'react-router-dom'
import {UserLogin} from "../../components/useLogin"

export const Login = () => {

    return(
        <>
            <header className="header">
                <Link to="/"><img src="../src/img/netflix.svg" alt="header" /></Link>
            </header>
            <div className="container">
                <UserLogin/>
            <div className="gradient"></div>
        </div>
        </>
    )   
}