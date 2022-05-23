import * as C from './styles'

export const UserLogin = () => {
    
    return(
        <C.container>
            <h1>Entrar</h1>

            <C.label>
                <input type="email" />
            </C.label>
            <C.label>
                <input type="password"></input>
            </C.label>
        </C.container>
    )
}