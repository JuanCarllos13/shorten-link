import styled, {keyframes} from "styled-components";


/* animação */

const slide= keyframes`
    from{                 //De onde começa
        transform: translateY(90px);
    }to{                  //De onde termina
        transform: translateY(0);
    }

`



export const Container = styled.div`
    position: absolute;
    bottom: 18px;
    background-color: white;
    padding: 14px;
    width: 700px;
    border-radius:4px;
    display: flex;
    flex-direction: column;
    animation: ${slide} 1.5s;
    
    
    @media(max-width: 735px){
        width: 90%;
    }

    span{
        margin: 14px 0;
        color: #A7A7A7;
    }

    button{
        background-color: #172742;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
        padding: 0 14px;
        height: 38px;
        border: 0;
        border-radius: 4px;
        cursor: pointer;

    }




`

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        border: 0;
        background: transparent;
        cursor: pointer;
    }


`
