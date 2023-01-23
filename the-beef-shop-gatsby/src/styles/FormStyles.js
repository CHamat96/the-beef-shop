import styled from "styled-components";

const FormStyles = styled.form`
  font-family: var(--bodyFont);

  fieldset {
    border: dashed 2px var(--red);
    margin: 5px 0;
  }

  legend {
    font-family: var(--titleFont);
    padding: 0;
  }
  label {
    display: inline-flex;
    width: 100%;
    display: grid;
    grid-template-columns: 1rem auto;
    grid-gap: 1rem;
  }

  .addToOrder {
    font-family: var(--headingFont);
    font-weight: 700;
    font-size: 2.3rem;
    color: var(--white);
    margin: 15px;
    padding: 10px 15px;
    background: var(--red);
    border: solid 1px var(--red);
    border-radius: 5px;

    &:hover,
    &:focus {
      font-style: italic;
      background: var(--black);
    }
  }

  /* Create custom Radio & Checkbox inputs */
  input[type="radio"],
  input[type="checkbox"] {
    /* Clear initial styling */
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--white);
    margin: 0;

    /* Create new styles */
    font: inherit;
    color: currentColor;
    width: 1.5rem;
    max-height: 1.5rem;
    border: 0.15em solid currentColor;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  input[type="radio"] {
    border-radius: 50%;
    &::before {
      content: "";
      min-width: 0.5rem;
      min-height: 0.5rem;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.12s transform ease-in-out;
      box-shadow: inset 1em 1em var(--red);

      background-color: CanvasText;
    }
    &:checked::before {
      transform: scale(1);
    }
    &:focus {
      outline: max(2px, 0.15rem) solid var(--red);
      outline-offset: max(2px, 0.15rem);
    }
  }

  input[type="checkbox"] {
    &::before {
      content: "✓";
      font-size: 75%;
      font-weight: 700;
      color: var(--red);
      text-shadow: var(--textBorder);
      transform: scale(0);
      transition: 0.12s ease transform;
    }
    &:checked::before {
      transform: scale(1);
    }
  }
`;

export default FormStyles;
