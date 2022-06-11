import * as C from './styles'

type Button = {
    title: string,
    class: string
}


export const QuestionSession = ({title, class:string}: Button) => {

    return(
        <C.Questions className='liQuestion'>
            <button className='faq-question'>{title}</button>
            <div className='faq-answer'>
                A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                filmes e documentários premiados em milhares de aparelhos conectados à internet.
                <br />
                <br />
                Você pode assistir a quantos filmes e séries quiser, quando e onde quiser, sem comerciais
                – tudo por um preço mensal bem acessível. Aqui você sempre encontra novidades.
                A cada semana, adicionamos novas séries e filmes.
            </div>
        </C.Questions>
    )
}