import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: '#D2DBDC',
    fontColor: '#000',
    header: '#EDEDED',
    search: '#F6F6F6',
    input: '#fff',
    primaryColor: '#000',
    chatListBgColor: '#fff', 
    chatListBorderColor: '#EDEDED',
    chatListHoverColor: '#f5f5f5',
    chatIntroImg: 'https://web.whatsapp.com/img/intro-connection-light_c98cc75f2aa905314d74375a975d2cf2.jpg',
    chatIntroBgColor: '#f8f9fa',
}

export const darkTheme = {
    body: '#000',
    fontColor: '#fff',
    header: 'rgb(42, 47, 50)',
    search: '#131c21',
    input: 'rgb(50, 55, 57)',
    primaryColor: '#fff',
    chatListBgColor: '#131c21',
    chatListBorderColor: '#30383d',
    chatListHoverColor: '#323739',
    chatIntroImg: 'https://web.whatsapp.com/img/intro-connection-dark_0ee01153183b5ebd9b296399cc2104b0.jpg',
    chatIntroBgColor: '#222f37',
}

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all 0.50s linear;
    }
    body{
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
        font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial, Helvetica, sans-serif;   
    }
    
    
`