import styled from 'styled-components'

export const MessageContainer = styled.div`
    margin-bottom: 10px;
    display: flex;

    .msgItem{
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 1px 1px #ccc;
        display: flex;
        flex-direction: column;
        padding: 3px;
        max-width: 90%;
    }

`
export const Text = styled.div`
    font-size: 14px;
    margin: 5px 40px 5px 5px;
    color: #000;
`
export const DateTime = styled.div`
    font-size: 11px;
    color: #999;
    margin-right: 5px;
    text-align: right;
    height: 15px;
    margin-top: -15px;

`