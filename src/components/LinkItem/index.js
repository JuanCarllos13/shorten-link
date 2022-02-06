import React from "react";
import { FiX, FiClipboard } from 'react-icons/fi'
import { Container, ModalHeader } from './style'




function LinkItem({closeModal, content}) {

   async function copyLink(){
       await navigator.clipboard.writeText(content.link)
        alert('Url copiada')
    }


    return (

        <Container>
            <ModalHeader>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="black" />
                </button>
            </ModalHeader>

            <span>{content.long_url}</span>

            <button onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color="white" />

            </button>


        </Container>
    )



}

export default LinkItem