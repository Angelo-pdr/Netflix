import * as C from "./styles"
import {FunctionAccordionList} from "../FunctionAccordionList"
import {FormCadastro} from "../formCadastro"

export const AccordionList = () => {

    return(
        <C.ContainerList>
            <C.ContainerHome>
                <C.HeaderText>Perguntas frequente</C.HeaderText>
               <C.AreaQuestion>
                    <C.List>
                        <FunctionAccordionList title="O que é a Netflix?" 
                        mandatoryText="
                        A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                        filmes e documentários premiados em milhares de aparelhos conectados à internet
                        "
                        optionalText="Você pode assistir a quantos filmes e séries quiser, quando e onde quiser,
                        sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre
                        encontra novidades. A cada semana, adicionamos novas séries e filmes.
                        "
                        />
                        <FunctionAccordionList title="Quanto custa a Netflix?" 
                        mandatoryText="
                        Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming
                        por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato
                        nem taxas extras.
                        "
                        />
                        <FunctionAccordionList title="Onde posso assistir?" 
                        mandatoryText="
                        Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.
                        com para começar a assistir no computador ou em qualquer aparelho conectado à
                        Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones,
                        tablets, aparelhos de streaming e videogames
                        "
                        optionalText="
                        Você também pode baixar a sua série favorita com o aplicativo Netflix
                        para iOS, Android ou Windows 10. Use downloads para levar a Netflix para onde
                        quiser sem precisar de conexão com a Internet. Leve a Netflix com você 
                        para qualquer lugar.
                        "
                        />
                        <FunctionAccordionList title="Como faço para cancelar?" 
                        mandatoryText="
                        A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar
                        a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento
                        – você pode começar ou encerrar a sua assinatura a qualquer momento
                        "
                        />
                        <FunctionAccordionList title="O que eu posso assistir na Netflix?" 
                        mandatoryText="
                        A Netflix tem um grande catálogo de filmes, documentários, séries, originais
                        Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                        "
                        />
                        <FunctionAccordionList title="A Netflix é adequada para crianças?" 
                        mandatoryText="
                        A experiência infantil da Netflix faz parte da sua assinatura para que as crianças
                        se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão
                        dos responsáveis.
                        "
                        optionalText="
                        O recurso de controle parental, incluso nos perfis para crianças e protegido por 
                        PIN, permite restringir a classificação etária do conteúdo que as crianças podem
                        ver e bloquear títulos específicos que você não quer que elas assistam.
                        "
                        />
                    </C.List>
                    <FormCadastro/>
               </C.AreaQuestion>
            </C.ContainerHome>
        </C.ContainerList>
    )
}