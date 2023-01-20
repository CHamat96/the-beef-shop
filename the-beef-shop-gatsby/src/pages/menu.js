import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import MenuGrid from "../components/MenuGrid";

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
        > h3 {
        font-size:3.4rem;
        text-align:center;
    }
    }
   
`

export default function MenuPage({ data }){
    const sandwiches = data.sandwiches.nodes
    const mains = data.mains.nodes
    const sides = data.sides.nodes

    return (
        <MenuStyles>
        <div className="wrapper">        
            <h2>View our Menu!</h2>
            <section>
            <h3>Sandwiches</h3>
            <MenuGrid
            menu={sandwiches}/>
            </section>
            <section>
                <h3>Main Courses</h3>
                <MenuGrid menu={mains}/>
            </section>
            <section>
                <h3>Sides</h3>
                <MenuGrid menu={sides}/>
            </section>
        </div>        
        </MenuStyles>
    )
}

export const query = graphql`
    query {
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
        asset {
          gatsbyImageData(
            layout:CONSTRAINED,
            placeholder:BLURRED,
            height:250,
            width:250
          )
        }
      }
      description
    }
  }
`