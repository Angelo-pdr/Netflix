import { useState } from 'react'
import * as C from './styles'

type Props = {
    title: string
    mandatoryText: string,
    optionalText?: string,
    active: () => string | void
    setActive: () => string | void
}

export const QuestionSession = ({title, mandatoryText, optionalText, active, setActive }:Props) => {



    return(
        <C.Container>
            <C.ButtonQuestion className='faq-question'>{title}</C.ButtonQuestion>
            <div className="active">
                {mandatoryText}
                {optionalText}          
            </div>
        </C.Container>
    )
}