import React from 'react'

import {ChatListCard,
        ChatListName,
        ChatListDate,
        LastMsg
} from './style'



const ChatListItem = ({Click, active}) => {

    return (
        <ChatListCard onClick={Click} color={active ? true : false}>
            <img 
                src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png" 
                alt=""
            />
            <div className="lines">
                <div className="line">
                    <ChatListName>Matheus Pereira</ChatListName>
                    <ChatListDate>18:30</ChatListDate>
                </div>
                <div className="line">
                    <LastMsg>
                        <p>Tenha um bom diaTenha um bom dia</p>
                    </LastMsg>
                </div>
            </div>
        </ChatListCard>
    )
}

export default ChatListItem