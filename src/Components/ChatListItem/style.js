import styled from 'styled-components'

export const ChatListCard = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    width: 100%;
    height: 70px;
    transition: all ease 0.50s;
    background-color: ${props => props.color === "true" ? props.theme.chatListBgColorOn : props.theme.chatListBgColorOff};


    img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-left: 15px;
        object-fit: cover;
    }

    .lines{
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-bottom: 1px solid ${props => props.theme.chatListBorderColor};
        padding-right: 15px;
        margin-left: 15px;

        flex-wrap: wrap;
        min-width: 0;

        .line{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }
    }
    &:hover{
        background-color: ${props => props.theme.chatListHoverColor};
    }

`

export const ChatListName = styled.div`
    font-size: 17px;
    color: ${props => props.theme.primaryColor}
`

export const ChatListDate = styled.div`
    font-size: 12px;
    color: #999;
`

export const LastMsg = styled.div`
    font-size: 14px;
    color: #999;
    display: flex;
    width: 100%;

    p{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin: 0;
    }
`
