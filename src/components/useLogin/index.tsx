import * as C from './styles'

export const UserLogin = () => {
    
    return(
        <C.container>
            <h1>Entrar</h1>
            <C.label>
                <input type="text" placeholder='Email ou número de telefone'/>
            </C.label>
            <C.label>
                <input type="password" className='inputPassword' placeholder='Senha' />
                <button>MOSTRA</button>
            </C.label>
        </C.container>
    )
}