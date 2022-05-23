import * as C from './styles'

export const UserLogin = () => {
    
    return(
        <C.container>
            <h1>Entrar</h1>

            <C.label>
                <input type="email" placeholder='Email ou número de telefone' />
            </C.label>
            <C.label>
                <input type="password" placeholder='Senha'></input>
            </C.label>
        </C.container>
    )
}