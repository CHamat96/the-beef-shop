import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const MenuGridStyles = styled.div`
    margin:15px auto;
    display:grid;
    grid-template-columns:repeat(auto-fill, minmax(250px,1fr));
    justify-content:center;
    align-content:center;
    grid-gap:2rem;
    grid-auto-rows:auto 1fr 100px;
`

const ItemStyles = styled.div`
    display:grid;
    @supports not (grid-template-rows:subgrid){
        --row: auto auto 1fr;
    }
    grid-template-rows:var(--row, subgrid);
    grid-row: span 3;
    grid-gap:1rem;
    border: solid 5px var(--red);
    box-shadow:var(--boxShadow);
    padding:15px;

    .gatsby-image-wrapper {
        transform:rotate(-2deg);
        img {
            border:dashed 15px var(--beige);
        }
    }
`

const formatMoney = Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format;

const MenuItem = function({ item }){
    const image = getImage(item.image.image.asset.gatsbyImageData)
    console.log(item)
    return (
        <ItemStyles>
        <GatsbyImage image={image}/>
        <Link to={`/menu/${item.slug.current}`}>
        <h3 className="accent itemTitle">{item.name}</h3>
        </Link>
        <p>PRICE: {formatMoney(item.price / 100)}</p>
        </ItemStyles>
    )
}


export default function MenuGrid({ menuItems }){
    return (
        <MenuGridStyles>
        {menuItems.map((item) => (
            <MenuItem
            key={item.id}
            item={item}
            />
        ))}
        </MenuGridStyles>
    )
}
