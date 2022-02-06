import styled, {keyframes} from "styled-components";


const slidY= keyframes`
    from{
        transform: translateY(90px);
    }to{
        transform: translateY(0px);
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
 
`
export const Contents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 60px;
        line-height: 101px;
        color: #FFFFFF;
    }
    img{
        height: 131px;
    }

    p{
        
        font-style: normal;
        font-weight: normal;
        font-size: 19px;
        line-height: 31px;
        color: #FFFFFF;
        margin-bottom: 20px;
    }

    @media(max-width: 615px){
        img{
            width: 95px;
        }
        h1{
            font-size: 40px;
        }
        p{
            font-size: 16px;
        }
    }
`

export const Inputs = styled.div`
    width: 540px;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: ${slidY} 2s;

    div{
        width: 100%;
        height: 46px;
        background-color: rgb(255,255,255, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
    }

    svg{
        margin: 0 8px;
    }
    input{
        width: 100%;
        background-color: transparent;
        border: 0;
        height: 46px;
        color: #fff;
        outline: none;
        font-size: 18px;
        

        &::placeholder{
            color: rgb(255,255,255,0.8);
        }
    }


    button{
        width: 100%;
        height: 46px;
        border-radius: 4px;
        border: 0;
        font-size: 16px;
        color: black;
        font-weight: bold;
        margin-top: 8px;
        transition: transform 0.7s;
        margin-bottom: 20px;

        &:hover{
            transform: scale(1.05);
        }

    }
    @media(max-width: 615px){
        width: 85%;
    }
`