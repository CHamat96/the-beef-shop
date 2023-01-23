import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import MenuGrid, { formatMoney } from "../components/MenuGrid";
import OrderForm from "../components/OrderForm";
import Seo from "../components/Seo";

const MenuItemStyles = styled.section`
  .flexParent {
    flex-wrap: wrap;
    align-items: center;
    > .gatsby-image-wrapper {
      flex: 2 0 calc(50% - 50px);
      transform: rotate(4.5deg);
      border: solid 11px var(--red);
      box-shadow: var(--boxShadow);
      margin: 25px;
    }
  }

  .wrapper {
    border: dashed 8px var(--beige);
    padding: 15px;
  }

  .itemDetails {
    padding: 25px;
    flex: 1 1 calc(50% - 75px);

    .description {
      font-style: italic;
    }
  }

  .suggestions {
    width: 100%;
    margin: 0px auto;
    margin-top: 50px;
    h4 {
      font-size: 2.5rem;
      text-align: center;
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
              <GatsbyImage image={image} />
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
                  <MenuGrid key={item.id} menu={item.suggestions} />
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
          gatsbyImageData(
            height: 500
            width: 500
            layout: CONSTRAINED
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
            gatsbyImageData(
              width: 175
              height: 175
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
