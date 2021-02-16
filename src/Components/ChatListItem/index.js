import React from 'react'

import {ChatListCard,
        ChatListName,
        ChatListDate,
        LastMsg
} from './style'



const ChatListItem = ({Click, active, data}) => {

    const date = new Date()

    const time = `${date.getHours()}:${date.getMinutes()}`

    return (
        <ChatListCard onClick={Click} color={active ? "true" : "false"}>
            <img 
                src={data.imagem} 
                alt="avatar"
            />
            <div className="lines">
                <div className="line">
                    <ChatListName>{data.title}</ChatListName>
                    <ChatListDate>{time}</ChatListDate>
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