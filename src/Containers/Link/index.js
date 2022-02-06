import React, { useState, useEffect } from "react";
import { FiLink, FiTrash, FiArrowLeft } from 'react-icons/fi'
import { Link } from "react-router-dom";
import { getLinkSave, DelteLink  } from '../../services/StoreLink'

import LinkItem from "../../components/LinkItem";


import { Container, LinksHeader, LinkUrl, LinkItens, ButtonTrash, EMPTYList, H2EMpty } from './styles'

function Links() {
    const [myLink, setMyLink] = useState([])
    const [data, setData] = useState({}) //Armazernar link quando eu aperto no botão para aparecer na div modal
    const [showMOdal, setShowModal] = useState(false)

    const [Empty, setEmpty] = useState(false) //Falando que a lista está vazia

    useEffect(() => {
        async function getLinks() {
            const result = await getLinkSave('encurtaLink')  //Buscando o links salvos, precisa ser a mesma chave que eu definit no pagina home

            if (result.length === 0) {  //Se o array não tiver nenhum link
                // Lista Vazia
                setEmpty(true) // A Lista está vazia
            }
            setMyLink(result)
        }

        getLinks()
    }, [])

    function handOpenLink(link){
        setData(link)
        setShowModal(true)

    }
    async function handDelete(id){
       const result = await DelteLink(myLink, id)
        
       if(result === 0){
        setEmpty(true)  //A lista está vazia

       }

       setMyLink(result)  // Se a lista não estiver vazia, e pq ele so removeu alguns itens e estou retornando eles na tela
    
    }   


    return (
        <Container>
            <LinksHeader>
                <Link to='/'>
                    <FiArrowLeft size={38} color="fff" />
                </Link>
                <h1>Meus Links</h1>
            </LinksHeader>

            <LinkItens>

            </LinkItens>

            { Empty && (
                <EMPTYList>
                    <H2EMpty> Sua lista está vazia</H2EMpty>

                </EMPTYList>

            )}



            {myLink.map(link => ( //Map. passando link por link salvo no LocalStore
                <LinkItens key={link.id}>
                    <LinkUrl onClick={() => handOpenLink(link)}>
                        <FiLink size={18} color="fff" />
                        {link.long_url}
                    </LinkUrl>
                    <ButtonTrash onClick={()=> handDelete(link.id)}>
                        <FiTrash size={24} color="#FF5454" />
                    </ButtonTrash>
                </LinkItens>

            ))}

                {showMOdal && (
                    <LinkItem
                    closeModal={() => setShowModal(false)}
                    content={data}/>
                )}

        </Container>
    )

}



export default Links