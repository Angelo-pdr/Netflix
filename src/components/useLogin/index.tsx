import * as C from './styles'

export const UserLogin = () => {
    
    return(
        <>
        <C.Container>
           <C.Flex>
                <C.Before></C.Before>
                    <C.LoginArea className='Container'>
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
        </>
    )
}