import styled, {keyframes} from "styled-components";


 /* Animação */
const shake = keyframes`
    10%, 90%{
        transform: translate3d(-1px, 0, 0);
    }
    20%, 80%{
        transform: translate3d(2px, 0, 0);
    } 
    30%, 50%, 70%{
        transform: translate3d(-4px, 0, 0);
    }
    40%, 60%{
        transform: translate3d(4px, 0, 0);
    }
`


export const Container = styled.div`
    background-color: #132742;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img{
        margin: 24px 0;
        animation: ${shake} 1s;
    }


    h1{
        color: white;
    }

    a{
        color: #132742;
        background-color: white;
        text-decoration: none;
        padding: 12px 18px;
        border-radius: 4px;
        margin: 14px 0;
        font-weight: bold;

    }


`