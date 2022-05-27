import * as C from './styles'

export const UserLogin = () => {
    
    return(
        <>
            <C.LoginTop></C.LoginTop>
            <C.container className='Container'>
                <h1>Entrar</h1>
                <C.label>
                    <input type="text" placeholder='Email ou número de telefone'/>
                </C.label>
                <C.label>
                    <input type="password" className='inputPassword' placeholder='Senha' />
                    <button>MOSTRA</button>
                </C.label>
                <C.Button>Entrar</C.Button>
                <C.Opcoes>
                    <div>
                        <input type="checkbox" placeholder='Lembre-se de min' className='checkbox'/>
                        <span className='span'>Lembre-se de min</span>
                    </div>
                    <a href="/login">Precisa de Ajuda?</a>
                </C.Opcoes>
            </C.container>
        </>
    )
}