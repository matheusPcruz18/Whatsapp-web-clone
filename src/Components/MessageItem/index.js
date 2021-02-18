import React from 'react'

import {MessageContainer,
        Text,
        Date
} from './style'

const MessageItem = ({data, user}) => {
    return(
        <MessageContainer
            style={{
                justifyContent: user.id === data.author?'flex-end':'flex-start'
            }}
        >
            <div 
                className="msgItem"
                style={{
                    backgroundColor: user.id === data.author?'#D6F8C6':'#fff',
                    borderTopLeftRadius: user.id === data.author?'10px':'0',
                    borderTopRightRadius: user.id === data.author?'0':'10px',
                }}
            >
                <Text>{data.body}</Text>
                <Date>18:30</Date>
            </div>
        </MessageContainer>
    )
}

export default MessageItem