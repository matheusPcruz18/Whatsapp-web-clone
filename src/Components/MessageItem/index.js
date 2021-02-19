import React from 'react'

import {MessageContainer,
        Text,
        DateTime
} from './style'

const MessageItem = ({data, user, id}) => {
    
    const date = new Date()
    const hour = date.getHours()
    const min = date.getMinutes()

    const time = `${hour < 10 ? '0'+hour : hour}:${min < 10 ? '0' + min : min}`

    return(
        id === data.id &&
        <MessageContainer
            style={{
                justifyContent: user !== data.author?'flex-end':'flex-start'
            }}
        >
            <div 
                className="msgItem"
                style={{
                    backgroundColor: user === data.author?'#D6F8C6':'#fff',
                    borderTopLeftRadius: user !== data.author?'10px':'0',
                    borderTopRightRadius: user !== data.author?'0':'10px',
                }}
            >
                <Text>{data.body}</Text>
                <DateTime>{time}</DateTime>
            </div>
        </MessageContainer>
    )
}

export default MessageItem