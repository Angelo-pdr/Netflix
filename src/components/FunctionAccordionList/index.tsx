import { useState } from 'react'
import * as C from './styles'

type Props = {
    title: string
    mandatoryText: string
    optionalText?: string
}

export const FunctionAccordionList = ({title, mandatoryText, optionalText }:Props) => {

    const [active, setActive] = useState<string>("faq-answer-closed")
    const [activeButton, setActiveButton] = useState<string>("")

    const checkClass = () =>{
       
        active != "faq-answer-open" ? setActive("faq-answer-open"): setActive("faq-answer-closed")
        activeButton != "open" ? setActiveButton("open"): setActiveButton("")

    } 


    return(
        <C.Container>
            <C.ButtonQuestion onClick={checkClass}>
                <button className={`faq-question ${activeButton}`}>{title}</button>
            </C.ButtonQuestion>
            <div className={active}>
                {mandatoryText}
                {optionalText != undefined &&
                    <div>
                        <br/>
                        
                        {optionalText}
                    </div>
                }          
            </div>
            
        </C.Container>
    )
}