import React from "react";
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from "react-router-dom";

import { Container } from './styles'

function Menu() {

    return (
        <Container>
           <button> <BsYoutube size={24} color="white"/> </button> 
           <button> <BsInstagram size={24} color="white"/> </button> 

          <Link className="menu-item" to='/links'>
              Meus Links
          </Link>

        </Container >
        
    )



}


export default Menu