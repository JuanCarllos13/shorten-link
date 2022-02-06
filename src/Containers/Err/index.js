import React from "react";
import { Link } from "react-router-dom";
import NotError from '../../assets/page404.svg'

import {Container} from './styles'

function Error(){

    return(
        <Container>
            <img src={NotError} alt="Pagina não encontrada" />
            <h1>Pagina não encontrada</h1>
            <Link to={'/'}>
                Voltar para pagina de Home
            </Link>
        </Container>
    )

}


export default Error