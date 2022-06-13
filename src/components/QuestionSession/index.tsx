import { useState } from 'react'
import * as C from './styles'

type Props = {
    title: string
    mandatoryText: string,
    optionalText?: string,
}

export const QuestionSession = ({title, mandatoryText, optionalText }:Props) => {


    return(
        <C.Container>
            <C.ButtonQuestion className='faq-question'>{title}</C.ButtonQuestion>
            <div className='faq-answer-open'>
                {mandatoryText}
                {optionalText}          
            </div>
        </C.Container>
    )
}