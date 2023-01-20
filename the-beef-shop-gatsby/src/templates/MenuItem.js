import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import MenuGrid, { formatMoney } from "../components/MenuGrid";

const MenuItemStyles = styled.section`

.flexParent {
    padding:25px;
    flex-wrap:wrap;
}

    .wrapper {
        border:dashed 8px var(--beige);
        padding:50px;
    }
    
    .itemDetails {
        padding:10px;
        flex:1 2 60%;

        .description {
            font-style:italic;
        }
    }

    .gatsby-image-wrapper {
        flex:1 2 40%;
    }

    .suggestions {
        width:100%;

        h4 {
            font-size:2.5rem;
            text-align:center;
        }
    }
`

export default function MenuItemPage( {data: { item }}){
    const image = getImage(item.image.asset)
    return (
        <MenuItemStyles>
            <div className="wrapper">
                <h2>{item.name}</h2>
                <div className="itemContainer">
                    <div className="flexParent">
                        <GatsbyImage
                        image={image}/>
                        <div className="itemDetails">
                            {item.description? (
                                <p className="description">{item.description}</p>
                            ): ''}
                            <p><span className="strong">PRICE: </span>{formatMoney(item.price / 100)}</p>
                            { item.isCustomizable ?(
                                <p className="strong">Add-ons available</p>
                                ) : ""
                            }
                        <Link to="/menu" className="menuLink">Back to Menu</Link>
                        </div>
                            { item.suggestions.length > 0 ? (
                                <div className="suggestions">
                                    <h4>You might also like:</h4>
                                    <MenuGrid menu={item.suggestions}/>
                                </div>
                            ) : '' }
                    </div>
                </div>
            </div>
        </MenuItemStyles>
    )
}

export const query = graphql`
    query($slug: String!){
        item: sanityMenuItem(slug: { current: { eq: $slug }}){
            name
            id
            price
            description
            image {
                asset {
                    gatsbyImageData(
                        width:500,
                        height:500,
                        layout:CONSTRAINED,
                        placeholder:BLURRED,
                    )
                }
            }
            category {
                name
            }
            isCustomizable
            suggestions {
                name
                price
                slug {
                    current
                }
                image {
                    asset {
                        gatsbyImageData(
                        width:200,
                        height:200,
                        layout:CONSTRAINED,
                        placeholder:BLURRED,
                    ) 
                    }
                }
            }
        }
    }
`