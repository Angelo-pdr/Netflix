import "./styles.css"
import {FormCadastro} from '../../components/formCadastro';
import {AreaHeader} from '../../components/header'

export const Home = () => {
    
    return(
        <>
            <AreaHeader/>
            <div className="container">
                <div className="gradient"></div>
                <FormCadastro/>
            </div>
        </>
    )

}