import { createGlobalStyle } from "styled-components";
import "@fontsource/oleo-script"
import "@fontsource/pt-sans/"
import "@fontsource/pt-sans/700.css"
import "@fontsource/work-sans/variable.css"
import "@fontsource/unbounded"
import "@fontsource/unbounded/800.css"

const GlobalStyles = createGlobalStyle`

html{line-height:1.15;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,footer,header,nav,section{display:block}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg:not(:root){overflow:hidden}button,input,optgroup,select,textarea{font-family:sans-serif;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,html [type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[hidden]{display:none}

* { -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; }

.sr-only { position: absolute; width: 1px; height: 1px; margin: -1px; border: 0; padding: 0; white-space: nowrap; clip-path: inset(100%); clip: rect(0 0 0 0); overflow: hidden;}


    :root {
        --black:#14110F;
        --white:#FCFCFC;
        --beige:#EBEBD3;
        --orange:#EF8354;
        --brown:#633F1C;
        --red:#B20D30;
        --shadow:#8896AB34;

        --titleFont: 'Oleo Script', cursive;
        --navFont: 'PT Sans', sans-serif;
        --bodyFont: "Work Sans", sans-serif;
        --headingFont: "Unbounded", cursive;

        /* box shadow (also applicable for text shadow) */
        --boxShadow: 5px 5px 2px;
        --textBorder:-1px 0 var(--black), 0 1px var(--black), 1px 0 var(--black), 0 -1px var(--black);
        --textBorderRed:-1px 0 var(--red), 0 1px var(--red), 1px 0 var(--red), 0 -1px var(--red);
    }

    html {
        font-size:62.5%;
    }

    body {
        font-size:1.8rem;
    }

    h1,
    h2,
    h3,
    h4,
    p,
    a { 
        margin:0;
        padding:0;
    }

    a {
        text-decoration:none;
        color:var(--black);
    }

    .wrapper {
        max-width:1450px;
        width:90%;
        margin:0 auto;
    }

    section {
        margin:15px 0;
        padding:25px;
    }

    .menuLink {
        display:block;
    margin:0 auto;
    background:var(--red);
    width:250px;
    padding:25px;
    text-align:center;
    box-shadow:5px 5px var(--black);
    transition:0.2s ease;
    border:solid 4px var(--red);
    font-family:var(--headingFont);
        color:#ffffff;
        font-weight:600;
      &:hover,
      &:focus-within {
        background:white;
        border:solid 4px var(--black);
        transform:rotate(-5deg);
        color:var(--black);
      }
  }

  .flexParent {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
`

export default GlobalStyles