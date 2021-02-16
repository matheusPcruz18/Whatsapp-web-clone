import styled from 'styled-components'

export const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

export const Header = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #CCC;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.header};

    .left{
        display: flex;
        align-items: center;

        img{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-left: 15px;
            margin-right: 15px;
        }
        .name{
            font-size: 17px;
            color: ${props => props.theme.primaryColor};
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
    margin: 0 10px;
    transition: all ease 0.3s;
`

export const Body = styled.div`
    flex: 1;
    overflow-y: auto;
    background-color: #E5DDD5;
    background-size: cover;
    background-position: center;
    background-image: ${props => props.theme.chatWindowBg}
`

export const Footer = styled.div`

`


