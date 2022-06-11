import * as C from './styles'


export const QuestionSession = () => {

    return(
        <li className='liQuestion'>
            <button className='faq-question'>O que é a Netflix?</button>
            <div className='faq-answer'>
                A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                filmes e documentários premiados em milhares de aparelhos conectados à internet.
                <br />
                <br />
                Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais
                – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades.
                A cada semana, adicionamos novas séries e filmes.
            </div>
        </li>
    )
}