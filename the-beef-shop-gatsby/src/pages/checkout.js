import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import styled from "styled-components";
import { formatMoney } from "../components/MenuGrid";
import SEO from "../components/Seo";
import FormStyles from "../styles/FormStyles";
import calculateOrderTotal from "../utils/calculateTotal";
import useOrder from "../utils/useOrder";

const CheckoutStyles = styled.section`
  min-height: 65vh;

  .orderSummary {
    display: flex;
    flex-direction: column;
    flex: 2 1 50%;
    &.noItems {
      margin: 25px 0;
    }
  }

  .checkoutForm {
    margin: 25px;
  }
  .tip {
    .tipFlex {
      display: inline-flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    button {
      width: fit-content;
      margin: 5px;
      padding: 10px;
    }
  }
`;

const ContainerStyles = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  max-width: 60rem;
  border: solid 1px var(--beige);
  padding: 15px;
  margin: 10px 0;
  position: relative;

  ul {
    padding: 0 15px;
    margin: 0;
    list-style: none;
  }

  li {
    p {
      font-style: italic;
      margin: 5px 0;
    }
  }

  .gatsby-image-wrapper {
    height: 100px;
    width: 100px;
    margin-right: 25px;
  }

  .remove {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
  }
`;

export default function OrderPage({ data }) {
  const menu = data.menu.nodes;

  const { order, removeFromOrder } = useOrder({
    menu,
  });
  const orderSubtotal = calculateOrderTotal(order, menu);

  const taxes = orderSubtotal * 0.15;
  const [tip, setTip] = useState(null);
  const [tipped, setTipped] = useState(false);

  const handleAddTip = (event) => {
    const tipPercentage = event.target.value;
    setTipped(true);
    setTip(orderSubtotal * tipPercentage);
  };

  const handleRemove = (index) => {
    removeFromOrder(index);
    setTipped(false);
    setTip(0);
  };
  return (
    <>
      <SEO title="View Cart" />
      <CheckoutStyles>
        <div className="wrapper">
          <h2>Order Details</h2>
          {order.length > 0 ? (
            <div className="flexParent">
              <div className="orderSummary">
                {order.map((item, index) => {
                  const image = getImage(item.image);
                  return (
                    <ContainerStyles key={`${item.id} - ${index}`}>
                      <GatsbyImage image={image} alt={item.name} />
                      <div className="itemDetails">
                        <h3>{item.name}</h3>
                        {item.hasExtras ? (
                          <ul>
                            <li>
                              <p>{item.addOns.dunked}</p>
                            </li>
                            {item.addOns.extras.map((topping) => {
                              return (
                                <li key={topping}>
                                  <p>{topping}</p>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          ""
                        )}
                        <p>{formatMoney(item.price / 100)}</p>
                      </div>
                      <button
                        className="remove"
                        type="button"
                        aria-label={`Remove ${item.name} from Order`}
                        onClick={() => handleRemove(index)}
                        title={`Remove ${item.name} from Order`}
                      >
                        <FiXCircle />
                      </button>
                    </ContainerStyles>
                  );
                })}
              </div>
              <div className="checkoutForm">
                <p>Subtotal: {formatMoney(orderSubtotal)}</p>
                <p>Taxes: {formatMoney(taxes)}</p>
                {order.length > 0 ? (
                  <div className="tip">
                    <h4>Add Tip?</h4>
                    <div className="tipFlex">
                      <button
                        type="button"
                        className="menuLink"
                        value={0.1}
                        onClick={handleAddTip}
                      >
                        10%
                      </button>
                      <button
                        type="button"
                        className="menuLink"
                        value={0.15}
                        onClick={handleAddTip}
                      >
                        15%
                      </button>
                      <button
                        type="button"
                        className="menuLink"
                        value={0.2}
                        onClick={handleAddTip}
                      >
                        20%
                      </button>
                    </div>
                    {tipped ? <p>Tip: {formatMoney(tip)}</p> : ""}
                  </div>
                ) : (
                  ""
                )}
                <p>
                  Your Total:{" "}
                  {tipped
                    ? formatMoney(orderSubtotal + taxes + tip)
                    : formatMoney(orderSubtotal + taxes)}
                </p>
                <FormStyles className="checkout">
                  <h4>Checkout</h4>
                  <div className="formSection">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="formSection">
                    <label htmlFor="email">Your E-Mail</label>
                    <input type="email" name="email" id="email" />
                  </div>
                </FormStyles>
              </div>
            </div>
          ) : (
            <div className="orderSummary noItems">
              <h3>There's Nothing in Your Cart!</h3>
            </div>
          )}
        </div>
      </CheckoutStyles>
    </>
  );
}

export const query = graphql`
  query {
    menu: allSanityMenuItem {
      nodes {
        name
        id
        price
        image {
          asset {
            gatsbyImageData(
              width: 100
              height: 100
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
