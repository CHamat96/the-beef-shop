import React from "react";
import { SiGatsby } from 'react-icons/si'
import styled from "styled-components";

const FooterStyles = styled.footer`
    color:white;
    background:var(--red);
`

export default function Footer(){
    return (
        <FooterStyles>
            <p>&copy;{new Date().getFullYear()}. Made by Corey Hamat. <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer"><SiGatsby/>Built with Gatsby</a></p>
            <p>DISCLAIMER: This is not an acutal restaurant. Just a sample webpage. Any similarities/connections to an actual restaurant are completely coincidental</p>
        </FooterStyles>
    )
}