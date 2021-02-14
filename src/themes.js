import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
    body: '#D2DBDC',
    fontColor: '#000',
    header: '#EDEDED',
    search: '#F6F6F6',
    input: '#fff',
    primaryColor: '#000',
    chatListBgColor: '#fff', 
    chatListBorderColor: '#fff',
    chatListHoverColor: '#f5f5f5',
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
}

export const GlobalStyles = createGlobalStyle`
    *{
        transition: all 0.50s linear;
    }
    body{
        box-sizing: border-box;
        background-color: ${props => props.theme.body};
        color: ${props => props.theme.fontColor};
        margin: 0;
        font-family: 'Segoe UI', Helvetica Neue, Helvetica, Lucida Grande, Arial, Helvetica, sans-serif;   
    }
    
    
`