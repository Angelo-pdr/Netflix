import {Header} from './styles'

export const AreaHeader = () => {
    
    return(
       <Header>
           <a href="*"><img src="../src/img/netflix.svg" alt="logo da netflix" /></a>
           <div className='buttons'>
               <button>Português</button>
               <button className='logIn'>Entrar</button>
           </div>
       </Header> 
    )
}