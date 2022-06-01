import "./styles.css"
import {FormCadastro} from '../../components/formCadastro';
import {AreaHeader} from '../../components/header'

export const Home = () => {
    
    return(
        <>
            <AreaHeader/>
            <div className="main">
                <div className="gradient"></div>
                <FormCadastro/>
            </div>
            <section className="section">
              <div className="container">
                    <div className="grid">
                        <div>
                            <h1>Aproveite na TV.</h1>
                            <p>Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray
                                e outros dispositivos.</p>
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
        </>
    )

}