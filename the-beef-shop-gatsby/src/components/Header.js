import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const HeaderStyles = styled.header`
    background:var(--red);
    padding:2rem; 

    .siteTitle {
        font-family:var(--titleFont);
        font-size:3.2rem;
        text-align:center;
        text-shadow:var(--boxShadow) var(--shadow);
        transform:rotate(-15deg);
    }

    ul {
        margin:0;
        padding: 15px;

        text-align:center;
        list-style: none;

        display:grid;
        grid-template-columns:repeat(auto-fit, minmax(10px, 1fr));
        align-items:center;
        grid-gap:1rem;
    }

    li {
        &:hover,
        &:focus-within {
            transform:rotate(-3deg) scale(1.2);
        }
    }

    a {
        font-family:var(--navFont);
        color:var(--beige);
        font-weight:700;
        letter-spacing:0.2rem;
        font-size:2.2rem;
        @media screen and (max-width:500px){
            font-size:2rem;
        }
    }
`

export default function Header(){
    return(
        <HeaderStyles>
            <div className="wrapper">

                <nav>
                    <ul>
                        <li>
                            <Link to="/menu" activeClassName="active">Menu</Link>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active">About</Link>
                        </li>
                        <li>
                            <Link to="/" className="siteTitle" activeClassName="active">The <br/>Beef Spot</Link>
                        </li>
                        <li>
                            <Link to="/order" activeClassName="active">Order</Link>
                        </li>
                        <li>
                            <Link to="/contact" activeClassName="active">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </HeaderStyles>
    )
}