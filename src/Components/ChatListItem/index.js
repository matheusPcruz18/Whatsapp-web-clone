import React from 'react'

import {ChatListCard,
        ChatListName,
        ChatListDate,
        LastMsg
} from './style'


const ChatListItem = ({Click, active, data}) => {

    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()

    const time = `${hour < 10 ? '0'+hour : hour}:${min < 10 ? '0' + min : min}`

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
                        <p>Teste</p>
                    </LastMsg>
                </div>
            </div>
        </ChatListCard>
    )
}

export default ChatListItem