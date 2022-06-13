import { useState } from 'react'
import * as C from './styles'

type Props = {
    title: string
    mandatoryText: string,
    optionalText: string | null,
    active?: string
    setActive: () => string
}

export const QuestionSession = ({title, mandatoryText, optionalText, active, setActive }:Props) => {



    return(
        <C.Container>
            <C.ButtonQuestion className='faq-question'>{title}</C.ButtonQuestion>
            <div className='faq-answer-open'>
                {mandatoryText + "<br />" }
                             
                          
            </div>
        </C.Container>
    )
}