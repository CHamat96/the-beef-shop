import { graphql, Link } from "gatsby"
import React from "react"
import MenuGrid from "../components/MenuGrid"

export default function Home({ data }) {
  const topPicks = data.menuHighlights.nodes
  console.log(topPicks)
  return (
    <>
    <section>
      <h3>Our Bestsellers. View full menu <Link to="/menu" className="accent">Here</Link>!</h3>
      <MenuGrid
      menuItems={topPicks}
      />
    </section>
    </>
    )
}


export const query = graphql`
  query {
    menuHighlights: allSanityMenuItem(filter:{category:{elemMatch:{name:{eq: "Top Picks"}}}}){
      nodes {
        name
        slug {
          current
        }
        price
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
  }
`