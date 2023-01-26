import React, { useState } from "react";
import FormStyles from "../styles/FormStyles";

import useForm from "../utils/useForm";
import useOrder from "../utils/useOrder";

export default function OrderForm({ item }) {
  const [extrasList, setExtrasList] = useState([]);

  const { values, setValues, updateValue } = useForm({
    dunked: item.isCustomizable ? "Dry" : '',
    extras: extrasList
  });

  console.log(values)

  const { addToOrder } = useOrder({
    item,
    values,
  });

  const handleChecked = (e) => {
    let arr = [...extrasList]
    let value = e.target.value
    if(e.target.checked){
      arr = [...extrasList, value];
    } else {
      arr = arr.filter((topping) => topping !== value)
    }

    setExtrasList(arr)
    
    setValues({
      ...values,
      [e.target.name]:arr
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addToOrder({
      name: item.name,
      price: item.price,
      id: item.id,
      image: item.image.asset,
      toppings: values
    });
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
                  name="dunked"
                  id="dry"
                  value="Dry"
                  onChange={updateValue}
                />
                Dry (No extra Jus on the Sandwich)
              </label>
              <label htmlFor="wet">
                <input
                  type="radio"
                  name="dunked"
                  id="wet"
                  value="Wet"
                  onChange={updateValue}
                />
                Wet (Ladle on some extra Jus)
              </label>
              <label htmlFor="dipped">
                <input
                  type="radio"
                  name="dunked"
                  id="dipped"
                  value="Dipped"
                  onChange={updateValue}
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
                  name="extras"
                  id="giard"
                  value="Giardiniera"
                  onChange={(e) => handleChecked(e)}
                />
                Hot Giardiniera
              </label>
              <label htmlFor="sweetPeps">
                <input
                  type="checkbox"
                  name="extras"
                  id="sweetPeps"
                  value="Sweet Peppers"
                  onChange={(e) => handleChecked(e)}
                />
                Sweet Peppers
              </label>
              <label htmlFor="provCheese">
                <input
                  type="checkbox"
                  name="extras"
                  id="provCheese"
                  value="Provolone Cheese"
                  onChange={(e) => handleChecked(e)}
                />
                Provolone Cheese
              </label>
              <label htmlFor="cheeseSauce">
                <input
                  type="checkbox"
                  name="extras"
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
