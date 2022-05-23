import {Header} from './styles'
import {Link} from 'react-router-dom'


export const AreaHeader = () => {

    return(
       <Header>
           <a href="*"><img src="../src/img/netflix.svg" alt="logo da netflix" /></a>
           <div className='buttons'>
               <button>Português</button>
               <Link to="/login"><button className='logIn'>Entrar</button></Link>
           </div>
       </Header> 
    )
}