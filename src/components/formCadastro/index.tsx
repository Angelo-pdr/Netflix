import * as C from './styles'

export const FormCadastro = () => {

    return(
        <>
            <C.Gradient></C.Gradient>
            <C.Container>
                <h1>Filmes, séries e muito mais. Sem limites.</h1>
                <h2>Assista onde quiser. Cancele quando quiser.</h2>
                <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura</h3>
                <C.Form>
                    <input type="text" placeholder='Email' />
                    <button>Vamos lá</button>
                </C.Form>
            </C.Container>
        </>
    )
}