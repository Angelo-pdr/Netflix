import { useState } from 'react'
import * as C from './styles'

type Props = {
    title: string
    mandatoryText: string
    optionalText?: string
}

export const QuestionSession = ({title, mandatoryText, optionalText }:Props) => {

    const [active, setActive] = useState<string>("faq-answer-closed")

    const checkClass = () =>{
        return active != "faq-answer-open" ? setActive("faq-answer-open"): setActive("faq-answer-closed")
    } 


    return(
        <C.Container>
            <C.ButtonQuestion className='faq-question' onClick={checkClass}>
                {title}
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