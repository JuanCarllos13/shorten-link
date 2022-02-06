import React, { useState } from "react";
import { FiLink } from 'react-icons/fi'

//import Instagram from '../../assets/instagram.svg'
//import Youtube from '../../assets/youtube.svg'
import Logo from '../../assets/Logo.svg'
import Menu from '../../components/menu'
import { Container, Contents, Inputs } from './Styles'
import LinkItem from "../../components/LinkItem";
import api from '../../services/api'
import {saveLink } from '../../services/StoreLink'


function Home() {
    const [link, setLink] = useState('')
    const [data, setData] = useState({})
    const [showModal, setShowModal] = useState(false)
    console.log(data)


    async function handleShortLink() {
        // alert("meu link" + link)
        try{
            const response = await api.post('shorten', {  //pasando o link do site que está armazenada no const link
                long_url: link
            })

            setData(response.data)
            setShowModal(true)
            saveLink('encurtaLink', response.data)
            setLink('')

          

        }catch{
            alert('Ops, Parece que algum deu errado')
            setLink('')

        }
       

    }

    return (
        <Container>

            <Contents>
                <img src={Logo} alt="Logo do Site" />

                <h1>Link</h1>

                <p>Cole seu link para encurtar</p>

            </Contents>

            <Inputs>
                <div>
                    <FiLink size={24} color="fff" />
                    <input type={'text'} placeholder="Cole seu link aqui.." value={link} onChange={(event) => setLink(event.target.value)} />
                </div>
                <button onClick={handleShortLink}>Gerar Link</button>
            </Inputs>
            <Menu />

            {showModal && (   //Se o showmal estiver false ele não aparece, quando clicar no button ele fica true e então aparece
                <LinkItem
                    closeModal={()=> setShowModal(false)} //Passando o setShowModal para false para sumir o ContainerItem

                    content={data}
                />

            )}

        </Container>

    )
}


export default Home