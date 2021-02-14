import styled from 'styled-components'

export const Container = styled.div`
    background-color: ${props => props.theme.chatIntroBgColor};
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 6px solid #4adf83;

    img{
        width: 250px;
        height: auto;
    }

    h1{
        font-size: 32px;
        color: #525252;
        font-weight: normal;
        margin-top: 30px;
    }
    h2{
        font-size: 14px;
        color: #777;
        font-weight: normal;
        margin-top: 20px;
        line-height: 20px;
        text-align: center;
        width: 80%;
    }
`