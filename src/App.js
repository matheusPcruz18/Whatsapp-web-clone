import React, { useState } from 'react'

import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from './themes'

//Icons
import Brightness4Icon from '@material-ui/icons/Brightness4';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

//Styled components
import ChatListItem from './Components/ChatListItem'
import {AppWindow, 
        Sidebar, 
        ContentArea,
        Header,
        HeaderButtons,
        Buttons,
        Search,
        ChatList
     } from './styles'

function App() {

    //<button onClick={() => themeToggler()}>Change Theme</button>

    const [theme, setTheme] = useState('light')

    const [chatList, setChatList] = useState([{}, {}, {}, {},{}, {}, {},{}, {}, {},{}, {}, {},])

    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <AppWindow>
                <Sidebar>
                    <Header>
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
                    </Header>
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
                            />
                        ))}
                    </ChatList>
                </Sidebar>
                <ContentArea>
                    Content Area
                </ContentArea>
            </AppWindow>
        </ThemeProvider>
    );
}

export default App;
