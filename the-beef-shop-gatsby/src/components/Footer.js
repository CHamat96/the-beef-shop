import React from "react";
import { SiGatsby } from 'react-icons/si'

export default function Footer(){
    return (
        <footer>
            <p>&copy;{new Date().getFullYear()}. Made by Corey Hamat. <a href="https://www.gatsbyjs.com" target="_blank" rel="noopener noreferrer"><SiGatsby/>Built with Gatsby</a></p>
        </footer>
    )
}