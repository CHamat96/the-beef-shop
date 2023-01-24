import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import MenuGrid, { formatMoney } from "../components/MenuGrid";
import OrderForm from "../components/OrderForm";
import Seo from "../components/Seo";

const MenuItemStyles = styled.section`

.wrapper {
    border: dashed 8px var(--beige);
    padding: 15px;
    @media screen and (max-width:400px) {
      width:95%;
    }
  }

  h2 {
    padding-top: 25px;
    padding-left:25px;
    font-size:3.8rem;
    font-family:var(--titleFont);
  }

  .flexParent {
    margin:50px 0;
    flex-wrap: wrap;
    place-content:center;
    
    .imgContainer {
      margin:0 2.5rem;
      flex: 0 2 auto;
    }

    .itemImage {
      margin:0 auto;
      transform: rotate(4.5deg) scale(0.9);
      border: solid 11px var(--red);
      box-shadow: var(--boxShadow);
    }
  }



  .itemDetails {
    padding: 25px;
    flex: 1 1 35%;

    .description {
      font-style: italic;
      padding:15px 0;
    }
  }

  .suggestions {
    width: 80%;
    margin: 0px auto;
    margin-top: 50px;
    @media screen and (max-width:350px){
      width:100%;
    }

    h4 {
      font-size: 2.5rem;
      text-align: center;
    }
    .suggestionsGrid {
      grid-template-columns:repeat(auto-fit,minmax(225px, 1.5fr));
      grid-gap:2rem;
      place-content:space-between;

      .item {
        transform:scale(0.9);
        padding:10px;
      }
      .gatsby-image-wrapper img {
        border:dashed 10px var(--beige);
      }
    }

  }
`;

export default function MenuItemPage({ data: { item } }) {
  const image = getImage(item.image.asset);

  return (
    <>
      <Seo title={item.name} />
      <MenuItemStyles>
        <div className="wrapper">
          <h2>{item.name}</h2>
          <div className="itemContainer">
            <div className="flexParent">
              <div className="imgContainer">
              <GatsbyImage image={image} className="itemImage" />
              </div>
              <div className="itemDetails">
                {item.description ? (
                  <>
                    <h3>Description</h3>
                    <p className="description">{item.description}</p>
                  </>
                ) : (
                  ""
                )}
                <p>
                  <span className="strong">PRICE: </span>
                  {formatMoney(item.price / 100)}
                </p>
                <OrderForm item={item} />
                <Link to="/menu" className="menuLink">
                  Back to Menu
                </Link>
              </div>
              {item.suggestions.length > 0 ? (
                <div className="suggestions">
                  <h4>You might also like:</h4>
                  <MenuGrid key={item.id} menu={item.suggestions}
                  gridClass="suggestionsGrid"  />
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </MenuItemStyles>
    </>
  );
}

export const query = graphql`
  query ($slug: String!) {
    item: sanityMenuItem(slug: { current: { eq: $slug } }) {
      name
      id
      price
      description
      image {
        asset {
          gatsbyImage(
            width:350
            aspectRatio:1.0
            placeholder: BLURRED
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
            gatsbyImage(
              layout:CONSTRAINED
              width:150
              aspectRatio:1.00
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
