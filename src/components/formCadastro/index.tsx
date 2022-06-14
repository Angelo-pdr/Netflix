import * as C from './styles'

export const FormCadastro = () => {

    return(
        <C.Container>
            <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura</h3>
            <C.Form>
                <input type="text" placeholder='Email' />
                <button>Vamos lá</button>
            </C.Form>
        </C.Container>
    )
}