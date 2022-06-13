import { useState } from 'react'
import * as C from './styles'


export const QuestionSession = () => {

    const [active, setActive] = useState("faq-answer-closed")

    const changedClass = () => {

        if(active != "faq-answer-closed"){  
            setActive("faq-answer-closed")
        }
        else{
            setActive("faq-answer-open")
        }
        
    }

    return(
        <C.Container>
            <section className='section'>
                <C.HeaderText>Perguntas frequentes</C.HeaderText>
                <C.AreaQuestion>
                    <C.Questions>
                        <li>
                            <button className='faq-question' onClick={changedClass}>O que é a Netflix?</button>
                            <div className={active}>
                                A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                                filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                <br />
                                <br />
                                Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais
                                – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades.
                                A cada semana, adicionamos novas séries e filmes.
                            </div>
                        </li>
                        <li>
                            <button className='faq-question' onClick={changedClass}>Quanto custa a Netflix?</button>
                            <div className={active} >
                                Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por
                                uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato
                                nem taxas extras.
                            </div>
                        </li>
                        <li>
                            <button className='faq-question' onClick={changedClass}>Onde posso assistir?</button>
                            <div className={active}>
                                Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.
                                com para começar a assistir no computador ou em qualquer aparelho conectado
                                à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones,
                                tablets, aparelhos de streaming e videogames.
                                <br />
                                <br />
                                Você também pode baixar a sua série favorita com o aplicativo Netflix para iOS, Android ou
                                Windows 10. Use downloads para levar a Netflix para onde quiser sem precisar de conexão 
                                com a Internet. Leve a Netflix com você para qualquer lugar.
                            </div>
                        </li>
                        <li>
                            <button className='faq-question' onClick={changedClass}>Como faço para cancelar?</button>
                            <div className={active}>
                                A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                                filmes e documentários premiados em milhares de aparelhos conectados à internet.
                                <br />
                                <br />
                                Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais
                                 – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades.
                                  A cada semana, adicionamos novas séries e filmes.
                            </div>
                        </li>
                        <li>
                            <button className='faq-question' onClick={changedClass}>O que eu posso assistir na Netflix?</button>
                            <div className={active}>
                                A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix 
                                premiados e muito mais. Assista o quanto quiser, quando quiser.
                            </div>
                        </li>
                        <li>
                            <button className='faq-question' onClick={changedClass}>A Netflix é adequada para crianças?</button>
                            <div className={active}>
                                A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se 
                                divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos 
                                responsáveis.
                                <br />
                                <br />
                                  O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN,
                                  permite restringir a classificação etária do conteúdo que as crianças podem ver e
                                  bloquear títulos específicos que você não quer que elas assistam.
                            </div>
                        </li>
                    </C.Questions>
                </C.AreaQuestion>
            </section>
        </C.Container>
    )
}