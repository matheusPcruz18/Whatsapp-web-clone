import React, { useState } from 'react'

import EmojiPicker from 'emoji-picker-react'

//Styled Components
import {ChatContainer,
        Header,
        Body,
        Footer,
        Btn,
        Input,
        EmojiArea,
} from './style'

//Components
import MessageItem from '../../Components/MessageItem'

//ICONS
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';

const ChatWindow = () => {

    let recognition = null
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition()
    }

    const [listening, setListening] = useState(false)

    const [emojiOpen, setEmojiOpen] = useState(false)

    const [text, setText] = useState('')

    const [list, setList] = useState([{}, {}, {}])

    const handleEmjiClick = (e, emojiObject) => {
        setText( text + emojiObject.emoji )
    }

    const handleOpenEmoji = () => {
        setEmojiOpen(true)
    }

    const handleCloseEmoji = () => {
        setEmojiOpen(false)
    }

    const handleMicClick = () => {
        if(recognition !== null){

            recognition.onstart = () => {
                setListening(true)
            }
            recognition.onend = () => {
                setListening(false)
            }
            recognition.onresult = (e) => {
                setText( e.results[0][0].transcript )
            }

            recognition.start()

        }else{
            alert(`Ops, algo deu errado! \r\nFuncionalidade indisponivel no Firefox`)
        }
    }

    const handleSendClick = () => {
        //const chatwind = document.getElementsByClassName("chatWindow--body")
        /*if(text !== ''){
            setUserMsg(<MessageItem msg={text} author={"user"} />)
            setText('')
            setEmojiOpen(false)
        }
        */
    }

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
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                    />
                ))}
            </Body>

            <EmojiArea style={{height: emojiOpen ? '200px' : '0px'}}>
                <EmojiPicker
                    onEmojiClick={handleEmjiClick}
                    disableSearchBar
                    disableSkinTonePicker    
                />
            </EmojiArea>

            <Footer>
                <div className="iconsLeft">
                    <Btn onClick={handleCloseEmoji}
                         style={{width: emojiOpen ? '30px' : '0px'}}
                         className="closeBtn"   
                    >
                        <CloseIcon className="footerBtn" style={{width: emojiOpen ? '27px' : '0px'}} />
                    </Btn>
                    <Btn onClick={handleOpenEmoji}>
                        <InsertEmoticonIcon className="footerBtn" style={{color: emojiOpen && '#009688'}} />
                    </Btn>
                    <Btn className="clip">
                        <AttachFileIcon className="footerBtn" />
                    </Btn>
                </div>

                <div className="inputArea">
                    <Input placeholder="Digite uma mensagem"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                     ></Input>
                </div>

                <div className="iconsRight">

                    {text === '' &&

                    <Btn onClick={handleMicClick}>
                        <MicIcon style={{color: listening && '#126e6e'}} />
                    </Btn>
                    }

                    {text !== '' &&
                    <Btn>
                        <SendIcon/>
                    </Btn>
                    }
                </div>
            </Footer>
        </ChatContainer>
    )
}

export default ChatWindow