import styled from 'styled-components'

export const AppWindow = styled.div`
    display: flex;
    height: 100vh;
    background-color: #EDEDED;
`


export const Sidebar = styled.div`
    width: 35%;
    max-width: 415px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #DDD;
    transition: all ease 0.3s;
`

export const Header = styled.div`
    background-color: ${props => props.theme.header};
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
    }
`

export const HeaderButtons = styled.div`
    display: flex;

`

export const Buttons = styled.div`
    color: #919191;
    cursor: pointer;
    width: 30px;
    height: 30px;
    margin: 0 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Search = styled.div`
    background-color: ${props => props.theme.search};
    border-bottom: 1px solid ${props => props.theme.chatListBorderColor};
    padding: 5px 15px;

    flex-wrap: wrap;
    min-width: 0;


    div{
        background-color: ${props => props.theme.input};
        height: 40px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0 5px;
    }

    input{
        color: ${props => props.theme.primaryColor};
        flex: 1;
        border: 0;
        outline: 0;
        background-color: transparent;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
    }
`

export const ChatList = styled.div`
    flex: 1;
    border: none;
    background-color: ${props => props.theme.chatListBgColor};
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2);

    &::-webkit-scrollbar{
        width: 6px;
        height: 6px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: rgba(0, 0, 0, 0.2);
    }

`


export const ContentArea = styled.div`
    flex: 1;
`
