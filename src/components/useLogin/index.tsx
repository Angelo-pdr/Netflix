import { useState } from 'react'
import * as C from './styles'

export const UserLogin = () => {
    
    const [user, setUser] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    return(
        <C.Container>
           <C.Gradient></C.Gradient>
           <C.Flex>
                <C.Before></C.Before>
                    <C.LoginArea className='Container'>
                        <h1>Entrar</h1>
                        <C.label borderCor={user != "" ? "none" : "2px solid #e87c03"}>
                            <input type="text"
                             placeholder='Email ou número de telefone'
                             value={user}
                             onChange={event => setUser(event.target.value)}
                            />
                        </C.label>
                        <span className={`${user != "" ? "closed" : "open"}`}>Informe um email ou número de telefone válido.</span>
                        <C.label borderCor={user != "" ? "none" : "2px solid #e87c03"}>
                            <input type="password" 
                            className='inputPassword' placeholder='Senha'
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            />
                            <button>MOSTRA</button>
                        </C.label>
                        <span className={`${password != "" ? "closed" : "open"}`}>Informe um email ou número de telefone válido.</span>
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
        </C.Container>
    )
}