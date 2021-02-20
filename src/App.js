import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'

//Icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

//Me
import myPhoto from './assets/me.jpg'

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

    const chatList = [
        {chatId: 0, author: 123, title: 'WhatsApp Clone', imagem: 'https://img.icons8.com/clouds/2x/whatsapp.png'},

        {chatId: 1, author: 123, title: 'Meu GitHub', imagem: 'https://avatars.githubusercontent.com/u/583231?s=460&u=a59fef2a493e2b67dd13754231daf220c82ba84d&v=4'}, 

        {chatId: 2, author: 123, title: 'Linkedin', imagem: 'https://icons-for-free.com/iconfiles/png/512/linked+in+linkedin+network+social+social+icon+social+media-1320185801369487077.png'}, 

        {chatId: 3, author: 123, title: 'Sobre mim', imagem: myPhoto}, 
    ]

    const [activeChat, setActiveChat] = useState({})

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    const [user, setUser] = useState({
        id: 1234,
        name: 'Matheus Pereira',
        avatar: 'https://i.pinimg.com/originals/d1/1a/45/d11a452f5ce6ab534e083cdc11e8035e.png'
    })

    const closeChat = () => {
        setActiveChat({})
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <AppWindow>
                <Sidebar active={activeChat} >
                    <HeaderSide>
                        <img src={user.avatar} alt="avatar" />
                        <HeaderButtons>
                            <Buttons>
                                {
                                    theme === 'light'
                                    ?
                                    <Brightness4Icon onClick={themeToggler} />
                                    :
                                    <Brightness7Icon onClick={themeToggler} />
                                }
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
                        <ChatWindow 
                            data={activeChat}
                            active={closeChat} 
                        />
                    }
                    {activeChat.chatId === undefined && 
                        <ChatIntro theme={theme} active={activeChat} />
                    }
                </ContentArea>
            </AppWindow>
        </ThemeProvider>
    );
}

export default App;
