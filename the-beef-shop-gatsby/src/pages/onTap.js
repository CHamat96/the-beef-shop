import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import Seo from "../components/Seo";

const BeersStyles = styled.section`
  text-align: center;
`;
const BeersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5rem;
  grid-auto-rows: auto auto 1fr;
`;

const BeerContainer = styled.div`
  padding: 15px 10px;
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-rows: var(--rows, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  img {
    margin: 0 auto;
    max-width: 150px;
    height: auto;
  }
`;

export default function BeersPage({ data }) {
  const beers = data.beers.nodes;
  console.log(beers);

  return (
    <>
      <Seo title="What's on Tap?" />
      <BeersStyles>
        <div className="wrapper">
          <h2>What's on Tap?</h2>
          <p className="subtitle">Our beers are available for dine-in only.</p>
          <BeersGrid>
            {beers.map((beer, index) => {
              return (
                <BeerContainer key={`${beer.id} - ${index}`}>
                  <img src={beer.image} alt={beer.name} />
                  <h4>{beer.name}</h4>
                </BeerContainer>
              );
            })}
          </BeersGrid>
        </div>
      </BeersStyles>
    </>
  );
}

export const query = graphql`
  query {
    beers: allBeer(limit: 15) {
      nodes {
        name
        id
        image
      }
    }
  }
`;
