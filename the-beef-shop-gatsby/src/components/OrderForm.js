import React, { useState } from "react";
import FormStyles from "../styles/FormStyles";

import useForm from "../utils/useForm";
import useOrder from "../utils/useOrder";

export default function OrderForm({ item }) {
  const [dunked, setDunked] = useState("");
  const [hasExtras, setHasExtras] = useState(false);
  const [toppingsList, setToppingsList] = useState([]);

  const { values } = useForm({
    totalCost: null,
  });

  const { addToOrder } = useOrder({
    item,
    input: values,
  });

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setDunked(value);
    setHasExtras(true);
  };

  const handleChecked = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setToppingsList([...toppingsList, value]);
    } else {
      setToppingsList(toppingsList.filter((topping) => topping !== value));
    }
    toppingsList.length >= 1 ? setHasExtras(true) : setHasExtras(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addToOrder({
      name: item.name,
      price: item.price,
      id: item.id,
      image: item.image.asset,
      hasExtras,
      addOns: {
        dunked,
        extras: toppingsList,
      },
    });
    window.scrollTo(0, 0);
  };

  return (
    <FormStyles onSubmit={handleSubmit}>
      {item.isCustomizable ? (
        <>
          <h3>Add-Ons (free of charge)</h3>
          <fieldset>
            <legend>How do you want your sandwich?</legend>
            <div className="extraJusOptions">
              <label htmlFor="dry">
                <input
                  type="radio"
                  name="dryorwet"
                  id="dry"
                  value="Dry"
                  onChange={handleRadioChange}
                />
                Dry (No extra Jus on the Sandwich)
              </label>
              <label htmlFor="wet">
                <input
                  type="radio"
                  name="dryorwet"
                  id="wet"
                  value="Wet"
                  onChange={handleRadioChange}
                />
                Wet (Ladle on some extra Jus)
              </label>
              <label htmlFor="dipped">
                <input
                  type="radio"
                  name="dryorwet"
                  id="dipped"
                  value="Dipped"
                  onChange={handleRadioChange}
                />
                Dipped (Dunk the sandwich in the jus)
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>What toppings do you want?</legend>
            <div className="toppingOptions">
              <label htmlFor="giard">
                <input
                  type="checkbox"
                  name="giard"
                  id="giard"
                  value="Giardiniera"
                  onChange={(e) => handleChecked(e)}
                />
                Hot Giardiniera
              </label>
              <label htmlFor="sweetPeps">
                <input
                  type="checkbox"
                  name="sweetPeps"
                  id="sweetPeps"
                  value="Sweet Peppers"
                  onChange={(e) => handleChecked(e)}
                />
                Sweet Peppers
              </label>
              <label htmlFor="provCheese">
                <input
                  type="checkbox"
                  name="provCheese"
                  id="provCheese"
                  value="Provolone Cheese"
                  onChange={(e) => handleChecked(e)}
                />
                Provolone Cheese
              </label>
              <label htmlFor="cheeseSauce">
                <input
                  type="checkbox"
                  name="cheeseSauce"
                  id="cheeseSauce"
                  value="Cheese Sauce"
                  onChange={(e) => handleChecked(e)}
                />
                Cheese Sauce
              </label>
            </div>
          </fieldset>
        </>
      ) : (
        ""
      )}
      <button type="submit" className="addToOrder">
        Add to Order
      </button>
    </FormStyles>
  );
}
