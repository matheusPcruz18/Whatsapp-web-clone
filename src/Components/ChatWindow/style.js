import styled from 'styled-components'

import bgLight from '../../assets/bgLight.png'
import bgDark from '../../assets/bgDark.png'


export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    transition: all ease 0.3s;
    background-color: ${props => props.theme.chatWindowBgColor};
`

export const Header = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid ${props => props.theme.chatListBorderColor};
    display: flex;
    justify-content: space-between;
    align-items: top;
    background-color: ${props => props.theme.header};

    .left{
        display: flex;
        align-items: center;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 10px;
            margin-right: 15px;
        }
        .name{
            font-size: 17px;
            color: ${props => props.theme.primaryColor};
        }
        .arrowBack{
            margin-right: -5px;
            margin-left: 5px;
            transition: all ease 0.3s;

            @media (min-width: 768px){
                width: 0px;    
            }
        }
        
    }
    .right{
        display: flex;
        align-items: center;
        margin-right: 15px;
    }
`

export const Btn = styled.div`
    color: #919191;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 15px;
    transition: all ease 0.2s;
    overflow: hidden;
`

export const Body = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #E5DDD5;
    background-size: cover;
    background-position: center;
    background: bgLight;
    padding: 20px 30px;

    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.scrollbarColor};

    &::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.scrollbarColor};
    }
`

export const EmojiArea = styled.div`
    height: 200px;
    overflow-y: hidden;
    transition: all ease 0.3s;

    .emoji-picker-react{
        width: auto;
        background: none;
        border: 0;
    }
    .emoji-picker-react .emoji-group:before{
        background: none;
        position: relative;
    }
    .emoji-categories{
        button{
            ${props => props.theme.emojiPickerCategories1};
            ${props => props.theme.emojiPickerCategories2}
        }
    }

    
`

export const Footer = styled.div`
    height: 62px;
    display: flex;
    align-items: center;

    .closeBtn{
        margin-right: 6px;
    }

    .iconsLeft{
        display: flex;
        margin: 0 5px;

        .footerBtn{
            width: 27px;
            height: 27px;
        }
        
        .clip{
            transform: rotate(45deg);
        }

    }
    .inputArea{
        flex: 1;
    }
    .iconsRight{
        display: flex;
        margin: 0 15px;
    }
`

export const Input = styled.input`
    flex: 1;
    width: 100%;
    height: 40px;
    border: 0;
    outline: 0;
    border-radius: 50px;
    font-size: 15px;
    color: ${props => props.theme.secundayColor};
    padding-left: 15px;
    background-color: ${props => props.theme.input};

`


