import React, { useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";

import useOrder from "../utils/useOrder";

const HeaderStyles = styled.header`
  background: var(--red);
  padding: 2rem;

  nav {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  .siteTitle {
    font-family: var(--titleFont);
    font-size: 3.2rem;
    text-align: center;
    text-shadow: var(--boxShadow) var(--shadow);
    &.mobileTitle {
      text-shadow: var(--textBorder);
    }
  }

  ul {
    margin: 0;
    padding: 15px;
    height: auto;
    width: 100%;
    text-align: center;
    list-style: none;

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      height: 0;
      overflow: hidden;
      transition: 0.8s ease-in-out all;
      padding: 0px;

      &.showNav {
        justify-content: center;
        height: 28rem;
      }

      li {
        width: 100%;
        height: auto;
        padding: 1.8rem 0;
        border-bottom: solid 2px var(--beige);
        &:nth-of-type(3) {
          border-bottom: none;
          padding: 0;
        }
      }

      .mobileHidden {
        display: none;
        overflow: hidden;
        margin: 0;
        padding: 0;
      }
    }
  }

  li {
    &:hover a,
    &:focus-within a {
      transform: rotate(-3deg) scale(1.2);
    }
  }

  a {
    display: inline-block;
    font-family: var(--navFont);
    color: var(--beige);
    font-weight: 700;
    letter-spacing: 0.2rem;
    font-size: 2.2rem;
    text-shadow: var(--textBorder);
    @media screen and (max-width: 500px) {
      font-size: 2rem;
    }
  }

  .active {
    transform: scale(1.3) rotate(4deg);
  }

  .cartNav {
    position: relative;

    .orderCount {
      position: absolute;
      top: -15px;
      left: 45px;
      transform: translate(-35px, -15px);
      visibility:visible;
      background: var(--beige);
      color: #000;
      border: solid 2px black;
      padding: 8px;
      font-size: 0.8rem;
      line-height: 1rem;
      border-radius: 50%;
      z-index: 0;
      text-shadow: none;
      transform:0.8s ease-in-out visibility;
      @media screen and (max-width: 500px) {
        padding: 5px;
        left: 75px;
        transform: translate(-35px, -15px);
      }
      &.hidden {
        visibility:hidden;
      }
    }
  }

  .onMobile {
    display: none;
    overflow: hidden;
    @media screen and (max-width: 500px) {
      display: block;
    }
  }

  .mobileNavToggle {
    background: none;
    border: none;

    svg {
      font-size: 3rem;
      font-weight: 600;
      color: var(--beige);
    }
  }
`;

export default function Header() {
  const [showNav, setShowNav] = useState(false);

  const data = useStaticQuery(
    graphql`
      query {
        menu: allSanityMenuItem {
          totalCount
        }
      }
    `
  );
  const menu = data.menu.nodes;
  const { order } = useOrder({
    menu,
  });


  return (
    <HeaderStyles>
      <div className="wrapper">
        <nav>
          <Link
            className="siteTitle onMobile mobileTitle"
            to="/"
            onClick={() => setShowNav(false)}
          >
            The Beef Shop
          </Link>
          <button
            className="onMobile mobileNavToggle"
            type="button"
            aria-label="toggle Navigation Menu"
            onClick={() => setShowNav(!showNav)}
          >
            <FiAlignJustify />
          </button>
          <ul className={showNav ? "navMenu showNav" : "navMenu"}>
            <li>
              <Link
                to="/menu"
                activeClassName="active"
                onClick={() => setShowNav(false)}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                activeClassName="active"
                onClick={() => setShowNav(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="siteTitle mobileHidden"
                onClick={() => setShowNav(false)}
              >
                The <br />
                Beef Shop
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                activeClassName="active"
                onClick={() => setShowNav(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/checkout"
                activeClassName="active"
                aria-label="View Cart"
                className="cartNav"
                onClick={() => setShowNav(false)}
              >
                <AiOutlineShoppingCart />
                <span className="onMobile">View Cart</span>
                <p className={order.length > 0 ? "orderCount" : "orderCount hidden"}>{order.length}</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </HeaderStyles>
  );
}
