import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const MenuGridStyles = styled.div`
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: space-evenly;
  align-content: space-around;
  grid-gap: 2rem;
  grid-auto-rows: auto 1fr 100px;
`;

const ItemStyles = styled.div`
  min-width: 200px;
  display: inline-grid;
  @supports not (grid-template-rows: subgrid) {
    --row: auto auto 1fr;
  }
  grid-template-rows: var(--row, subgrid);
  grid-row: span 3;
  grid-gap: 1rem;
  border: solid 5px var(--red);
  box-shadow: var(--boxShadow);
  padding: 15px;

  .gatsby-image-wrapper {
    transform: rotate(-2deg);
    img {
      border: dashed 15px var(--beige);
    }
  }
`;

export const formatMoney = Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
}).format;

const MenuItem = function ({ item }) {
  const image = getImage(item.image.asset.gatsbyImageData);
  return (
    <ItemStyles>
      <GatsbyImage image={image} />
      <Link className="accent" to={`/menu/${item.slug.current}`}>
        <h3 className="itemTitle">{item.name}</h3>
      </Link>
      <p>
        <span className="strong">PRICE:</span> {formatMoney(item.price / 100)}
      </p>
    </ItemStyles>
  );
};

export default function MenuGrid({ menu }) {
  return (
    <MenuGridStyles>
      {menu.map((item, index) => (
        <MenuItem key={`${item.id} - ${index}`} item={item} />
      ))}
    </MenuGridStyles>
  );
}
