import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const MenuGridStyles = styled.div`
  margin: 25px auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  place-content:center;
  grid-gap: 2rem;
  grid-auto-rows: auto 1fr 100px;
`;

const ItemStyles = styled.div`
  max-width: 500px;
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
  align-items:center;

  .gatsby-image-wrapper {
    --x: ${(props) => props.objectPosition.x};
    --y: ${(props) => props.objectPosition.y};
    border: dashed 15px var(--beige);
    transform:rotate(-2deg);
    margin:0 auto;

    div[aria-hidden='true'] {
      padding-bottom: 41% !important;
    }

    img {
      object-position: var(--x) var(--y) !important;
    }
  }
  
`;

export const formatMoney = Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
}).format;

const MenuItem = function ({ item, image }) {
  const img = getImage(image.asset)
  const objPosition = {
    x:`${image.hotspot.x * 100}%`,
    y: `${image.hotspot.y * 100}%`
  }
  return (
    <ItemStyles className="item" objectPosition={objPosition}>
      <GatsbyImage image={img} alt={item.name}/>
      <Link className="accent" to={`/menu/${item.slug.current}`}>
        <h3 className="itemTitle">{item.name}</h3>
      </Link>
      <p>
        <span className="strong">PRICE:</span> {formatMoney(item.price / 100)}
      </p>
    </ItemStyles>
  );
};

export default function MenuGrid({ menu, gridClass }) {
  return (
    <MenuGridStyles
    className={gridClass || ''}>
      {menu.map((item, index) => (
        <MenuItem key={`${item.id} - ${index}`} item={item} image={item.image}/>
      ))}
    </MenuGridStyles>
  );
}
