import "./styles.css"
import {FormCadastro} from '../../components/formCadastro';
import {AreaHeader} from '../../components/header'
import {QuestionSession} from "../../components/QuestionSession"
import { useState } from "react";

export const Home = () => {

    return(
        <>
            <AreaHeader/>
            <div className="main">
                <div className="gradient"></div>
                <FormCadastro/>
            </div>
            <section className="section">
              <div className="containerHome">
                    <div className="grid">
                        <div className="text">
                            <h1>Aproveite na TV.</h1>
                            <h2>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray
                            e outros dispositivos.</h2>
                        </div>
                        <div className="img-tv">
                            <img src="../src/img/tv.png" alt="imagem-da-televisão"  />
                            <video className="video-tv" autoPlay playsInline muted loop>
                                    <source 
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                                    type="video/mp4"/>
                            </video>
                        </div>
                    </div>
              </div>
            </section>
            <section className="section">
              <div className="containerHome">
                    <div className="grid">
                        <div className="left">
                            <h1>Baixe séries para assistir offline.</h1>
                            <h2>Salve seus títulos favoritos e sempre tenha algo para assistir.</h2>
                        </div>
                        <div className="right">
                            <img src="../src/img/telefone.jpg" alt="imagem-da-telefone"  />
                        </div>
                    </div>
              </div>
            </section>
            <section className="section">
              <div className="containerHome">
                    <div className="grid">
                        <div className="text">
                            <h1>Assista quando quiser.</h1>
                            <h2>Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso.</h2>
                        </div>
                        <div className="img-tv">
                            <img src="../src/img/multiplataforma.png" alt="multiplataforma"  />
                            <video className="video-tv2" autoPlay playsInline muted loop>
                                    <source 
                                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
                                    type="video/mp4"/>
                            </video>
                        </div>
                    </div>
              </div>
            </section>
            <section className="section">
              <div className="containerHome">
                    <div className="grid">
                        <div  className="left">
                            <h1>Crie perfis para crianças.</h1>
                            <h2>Deixe as crianças se aventurarem com seus
                                personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.</h2>
                        </div>
                        <div className="right">
                            <img src="../src/img/kids.png" alt="imagem-da-kids" />
                        </div>
                    </div>
              </div>
            </section>
           <section className="AccordionList">
                <div className="containerHome">
                    <h1 className="headerText">Perguntas frequentes</h1>
                    <div className="areaQuestion">
                        <ul>
                            <QuestionSession title="O que é a Netflix?" 
                            mandatoryText="
                            A Netflix é um serviço de transmissão online que oferece uma ampla variedade de séries,
                            filmes e documentários premiados em milhares de aparelhos conectados à internet
                            "
                            optionalText="Você pode assistir a quantos filmes e séries quiser, quando e onde quiser,
                             sem comerciais – tudo por um preço mensal bem acessível. Aqui você sempre
                              encontra novidades. A cada semana, adicionamos novas séries e filmes.
                              "
                            />
                            <QuestionSession title="Quanto custa a Netflix?" 
                            mandatoryText="
                            Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming
                            por uma taxa mensal única. Os planos variam de R$25,90 a R$55,90 por mês. Sem contrato
                            nem taxas extras.
                            "
                            />
                             <QuestionSession title="Onde posso assistir?" 
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
                             <QuestionSession title="Como faço para cancelar?" 
                            mandatoryText="
                            A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar
                            a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento
                            – você pode começar ou encerrar a sua assinatura a qualquer momento
                            "
                            />
                             <QuestionSession title="O que eu posso assistir na Netflix?" 
                            mandatoryText="
                            A Netflix tem um grande catálogo de filmes, documentários, séries, originais
                             Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.
                            "
                            />
                             <QuestionSession title="Onde posso assistir?" 
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
                        </ul>
                    </div>
                </div>
           </section>
        </>
    )
}