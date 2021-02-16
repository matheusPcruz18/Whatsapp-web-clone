import React from 'react'

//Styled Components
import {ChatContainer,
        Header,
        Body,
        Footer,
        Btn
} from './style'

//ICONS
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ChatWindow = () => {
    return (
        <ChatContainer>
            <Header>
                <div className="left">
                    <img src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png" alt="" />
                    <div className="name">Matheus</div>
                </div>
                <div className="right">
                    <Btn>
                        <SearchIcon/>
                    </Btn>
                    <Btn>
                        <MoreVertIcon/>
                    </Btn>
                </div>
            </Header>
            <Body>

            </Body>
            <Footer>

            </Footer>
        </ChatContainer>
    )
}

export default ChatWindow