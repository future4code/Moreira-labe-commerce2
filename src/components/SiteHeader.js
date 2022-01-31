import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #371a48;
    padding: 5px 20px;
    img{
        width: 45px;
        margin: 0 5px;
    }
    div{
        display: flex;
        color: white;
        font-weight: bold;
    }
    button{
        display: flex;
        align-items: center;
        border: 1px solid;
        border-radius: 15px;
        background-color: #69268a;
        color: white;
        transition: 0.2s ease;
        align-self: center;
        padding: 3px 10px;
        font-size: 0.8em;
        cursor: pointer;
        img {
            width: 20px;
        }
        p {
            margin: 0;
            margin-right: 5px;
            font-size: 1.5em;
            font-weight: bolder;
        }
        :hover{
            background-color: #8931b4;
        }
        :active{
            background-color: #69268a;
        }
    }
`

export function SiteHeader(){
    return <Container>
            <div>
                <img src='https://i.postimg.cc/YqkMpSkG/APlicativo-celular-512-x-512-px-1.png' alt='logo AstroDev'/>
                <img src='https://i.postimg.cc/C5WgpFF7/APlicativo-celular-512-x-512-px-4.png' alt='logo AstroDev'/>
                <p>STORE</p>
            </div>
            <button>Login</button>
        </Container>
}