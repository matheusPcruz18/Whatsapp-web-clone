import React, { useState, useEffect, useRef } from 'react'

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

const ChatWindow = ({data, active}) => {

    const body = useRef()

    let recognition = null
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if(SpeechRecognition !== undefined){
        recognition = new SpeechRecognition()
    }

    const [listening, setListening] = useState(false)

    const [emojiOpen, setEmojiOpen] = useState(false)

    const [text, setText] = useState('')

    const [list, setList] = useState([
        {id: 0, author: 123, body: 'Bem vindo!'},
        {id: 0, author: 123, body: 'Fiz este projeto baseado na versão Web do WhatsApp, guiado pelo professor Bonieky Lacerda'},
        {id: 0, author: 123, body: 'Porém fui além e decidi implementar recursos como layout responsivo e um tema diferente para a versão "dark" 🌙'},
        {id: 0, author: 123, body: 'Contando também com recurso de transcrição de fala usando o microfone, (indisponivel no navegador Firefox) 🎤'},
        {id: 0, author: 123, body: 'E emojis usados pelo WhatsApp 🤓'},
        {id: 0, author: 123, body: 'Obrigado pela visita, e sinta-se livre para me contactar nas minhas redes sociais!'},
        {id: 1, author: 123, body: 'https://github.com/matheusPcruz18'},
        {id: 2, author: 123, body: ' www.linkedin.com/in/matheus-p-77569b138'},
        {id: 3, author: 123, body: 'Olá, meu nome é Matheus Pereira. Tenho 21 anos, São Sebastião - SP'},
        {id: 3, author: 123, body: 'Sou formado em Informática para internet pelo Instituto Federal de São Paulo'},
        {id: 3, author: 123, body: 'E atualmente curso Análise e Desenvolvimentos de Sistemas ;)'}
    ])

    useEffect(() => {
        if(body.current.scrollHeight > body.current.offsetHeight){
            body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight
        }
    }, [list])

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
                    <Btn className="arrowBack" onClick={active}>
                        <ArrowBackIcon/>
                    </Btn>
                    <img src={data.imagem} alt="" />
                    <div className="name">{data.title}</div>
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

            <Body ref={body}>
                {list.map((item, key) => (
                    <MessageItem
                        key={key}
                        data={item}
                        user={data.author}
                        id={data.chatId}
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