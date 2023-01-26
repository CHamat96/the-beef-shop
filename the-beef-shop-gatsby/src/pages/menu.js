import { graphql, Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import CategoryFilter from "../components/CategoryFilter";
import MenuGrid from "../components/MenuGrid";
import Seo from "../components/Seo";

const MenuStyles = styled.div`
    padding:50px 0;


    h2 {
        text-align:center;
        margin:15px 0;
        font-size:3.8rem;
        color:var(--red);
        font-weight:700;
    }
    section {
        border: dashed 4px var(--beige);
        margin:25px 0;
        > h3 {
            margin:25px 0;
        font-size:3.4rem;
        text-align:center;
    }
    }

    .catName {
        text-align:center;
    }

   
`

export default function MenuPage({ data, pageContext }){
    const menu = data.allMenuItems.nodes
    const sandwiches = data.sandwiches.nodes
    const mains = data.mains.nodes
    const sides = data.sides.nodes
    const desserts = data.desserts.nodes
    return (
        <>
        <Seo title="Menu"/>
        <MenuStyles>
        <div className="wrapper">        
            <h2>Our Menu</h2>
            <p className="beersLink">We have a weekly rotating tap of local beers available for dine-in only. View the full list <Link className="red" to="/onTap">Here</Link> </p>
            <CategoryFilter activeCategory={pageContext.category}/>
            {!pageContext.category ? (
            <>
            <section>
                <h3>Sandwiches</h3>
                <MenuGrid
                menu={sandwiches}/>
            </section>
            <section>
                <h3>Main Courses</h3>
                <MenuGrid menu={mains}
                />
            </section>
            <section>
                <h3>Sides</h3>
                <MenuGrid menu={sides}
                />
            </section>
            <section>
                <h3>Desserts</h3>
                <MenuGrid menu={desserts}
                />
            </section>
            </>
            ) :  (
                <>
                <h3 className="catName">{pageContext.category}</h3>
                <MenuGrid menu={menu}
                />
                </>
            )
            }
        </div>        
        </MenuStyles>
        </>
    )
}

export const query = graphql`
    query CatQuery($catRegex: String) {
        allMenuItems: allSanityMenuItem(
            filter: { category: { elemMatch: {name: { regex: $catRegex }} } } 
        ) {
            ...MenuDetails
        }
        sandwiches: allSanityMenuItem(filter:{
        category:{
            elemMatch: 
            {name:{
                eq:"Sandwiches"
            }}
        }
    }){
        ...MenuDetails
    }
    mains: allSanityMenuItem(filter:{
        category:{
            elemMatch: 
            {name:{
                eq:"Mains"
            }}
        }
    }){
        ...MenuDetails
    }
    sides: allSanityMenuItem(filter:{
        category:{
            elemMatch: 
            {name:{
                eq:"Sides"
            }}
        }
    }){
        ...MenuDetails
    }
    desserts: allSanityMenuItem(filter: {
        category: {
            elemMatch: {
                name: {
                    eq: "Desserts"
                }
            }
        }
    }) {
        ...MenuDetails
    }
    }

    fragment MenuDetails on SanityMenuItemConnection{
    nodes {
      name
      id
      slug {
        current
      }
      price
      image {
        hotspot {
            x
            y
        }
        asset {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 250
              height:250
              placeholder: BLURRED
              fit:FILL
            )
        }
      }
      description
    }
  }
`