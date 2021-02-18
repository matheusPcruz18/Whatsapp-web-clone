import React from 'react'

import { Container } from './style'

const ChatIntro = ({theme, active}) => {
    return (
        <Container active={active}>
            {
                theme === 'light' 
                ?
                <img src="https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg" alt="" />
                :
                <img src="https://web.whatsapp.com/img/intro-connection-dark_0ee01153183b5ebd9b296399cc2104b0.jpg" alt="" />
            }
            
            <h1>Mantenha seu celular conectado</h1>
            <h2>O WhatsApp conecta ao seu telefone para sincronizar suas mensagens.
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-Fi.
            </h2>
        </Container>
    )
}

export default ChatIntro

