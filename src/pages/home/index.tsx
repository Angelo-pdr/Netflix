import "./styles.css"
import {FormCadastro} from '../../components/formCadastro';
import {AreaHeader} from '../../components/header'
import {QuestionSession} from "../../components/QuestionSession"
import { useState } from "react";

export const Home = () => {
    
    const [active, setActive] = useState("active")

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
            <QuestionSession />
        </>
    )
}