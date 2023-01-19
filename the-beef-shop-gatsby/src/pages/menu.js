import { graphql } from "gatsby";
import React from "react";

export default function MenuPage({ data }){
    console.log(data.menuItems.nodes)
    return (
        <h2>Menu</h2>
    )
}

export const query = graphql`
query {
    menuItems: allSanityMenuItem {
        ...MenuData
    }
}
fragment MenuData on SanityMenuItemConnection {
    nodes {
        name
        id
        slug {
            current
        }
        description
        price
        category {
            id
            name
        }
        image {
            image {
                asset {
                    gatsbyImageData(
                        width:250,
                        height:250,
                        layout:CONSTRAINED,
                        placeholder:BLURRED
                    )
                }
            }
        }
    }
}

`