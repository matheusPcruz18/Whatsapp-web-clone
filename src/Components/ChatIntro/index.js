import React from 'react'

import { Container } from './style'

import darkImg from '../../assets/darkImg.png'
import lightImg from '../../assets/lightImg.png'

const ChatIntro = ({theme, active}) => {
    return (
        <Container active={active}>
            {
                theme === 'light' 
                ?
                <img src={lightImg} alt="" />
                :
                <img src={darkImg} alt="" />
            }
            
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </h2>
        </Container>
    )
}

export default ChatIntro

