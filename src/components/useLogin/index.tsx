import * as C from './styles'

export const UserLogin = () => {
    
    return(
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
            <C.Options>
                <div>
                    <input type="checkbox" placeholder='Lembre-se de min' className='checkbox'/>
                    <span className='span'>Lembre-se de min</span>
                </div>
                <a href="/login">Precisa de Ajuda?</a>
            </C.Options>
            <C.OptionOther>
                <C.Signit>
                    <div>
                        <p>Novo por aqui? </p>
                        <a href="/">Assine agora.</a>
                    </div>
                    <p className='knowMore'>
                        Esta página é protegida pelo Google reCAPTCHA
                        para garantir que você não é um robô. <a className='saibaMais'>Saiba mais</a>.
                    </p>
                </C.Signit>
                
            </C.OptionOther>
        </C.container>
    )
}