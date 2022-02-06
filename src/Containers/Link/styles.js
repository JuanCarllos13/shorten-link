import styled from "styled-components";



export const Container = styled.div`
  background-color: #132742;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 




`
export const LinksHeader = styled.div`
    margin-top: 35px;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    

    svg{
        margin-right: 14px;
    }
    h1{
        color: white;

        @media(max-width: 715px){
             font-size: 40px;
      
        }
    }




`
export const LinkItens = styled.div`
    width: 700px;
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-top: 8px;

    &:last-child{
        margin-bottom: 18px;
    }

    @media(max-width: 715px){
      width: 90%;
      
  }


`
export const LinkUrl = styled.button`
    border: 0;
    width: 100%;
    min-width:80%;
    border-radius: 4px;
    height: 46px;
    background-color: rgb(255,255,255, 0.15);
    margin-right: 14px;
    display: flex;
    align-items: center;
    padding: 0 14px;
    font-size: 18px;
    color: white;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;

    svg{
        margin-right: 14px;
       
        @media(max-width: 715px){
            display: none;

        }
    }



    @media(max-width: 715px){
      width: 90%;
      
    }


`

export const ButtonTrash = styled.button`
    border: 0;
    background: transparent;
    cursor: pointer;
  

`

export const H2EMpty = styled.h2`
    width: 100%;
    text-align: center;
    margin-top: 28px;
    color: white;


`


export const EMPTYList = styled.div`



`