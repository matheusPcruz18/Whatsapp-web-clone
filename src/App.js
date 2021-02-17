import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'

//Icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

//Components
import ChatIntro from './Components/ChatIntro'
import ChatWindow from './Components/ChatWindow'

//Styled components
import ChatListItem from './Components/ChatListItem'
import {AppWindow, 
        Sidebar, 
        ContentArea,
        HeaderSide,
        HeaderButtons,
        Buttons,
        Search,
        ChatList
     } from './styles'

function App() {

    const [theme, setTheme] = useState('light')

    const [chatList, setChatList] = useState([
        {chatId: 1, title: 'Meu GitHub', imagem: 'https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4'}, 
        {chatId: 2, title: 'Linkedin', imagem: 'https://neilpatel.com/wp-content/uploads/2017/05/LinkedIn.jpg'}, 
        {chatId: 3, title: 'Sobre mim', imagem: 'https://retailx.com/wp-content/uploads/2019/12/iStock-476085198.jpg'}, 
    ])

    const [activeChat, setActiveChat] = useState({})

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const [openSidebar, setOpenSidebar] = useState(true)

    const closeOrOpenSidebar = () => {
        setOpenSidebar(!openSidebar)
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <AppWindow>
                <Sidebar open={openSidebar}>
                    <HeaderSide>
                        <img src="https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png" alt="avatar" />
                        <HeaderButtons>
                            <Buttons>
                                <Brightness4Icon onClick={themeToggler} />
                            </Buttons>
                            <Buttons>
                                <ChatIcon />
                            </Buttons>
                            <Buttons>
                                <MoreVertIcon/>
                            </Buttons>
                        </HeaderButtons>
                    </HeaderSide>
                    <Search>
                        <div>
                            <Buttons>
                                <SearchIcon />
                            </Buttons>
                            <input type="search" placeholder="Procurar ou começar uma nova conversa" />
                        </div>
                    </Search>
                    <ChatList>
                        {chatList.map((item, key) => (
                            <ChatListItem
                                key={key}
                                data={item}
                                active={activeChat.chatId === chatList[key].chatId}
                                Click={() => setActiveChat(chatList[key])}
                            />
                        ))}
                    </ChatList>
                </Sidebar>
                <ContentArea>
                    {activeChat.chatId !== undefined && 
                        <ChatWindow sidebar={closeOrOpenSidebar} />
                    }
                    {activeChat.chatId === undefined && 
                        <ChatIntro theme={theme} />
                    }
                </ContentArea>
            </AppWindow>
        </ThemeProvider>
    );
}

export default App;
