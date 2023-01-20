import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

h1,
h2 {
    font-family:var(--headingFont);
}

h1 {
    font-size:4.5rem;
}

p {
    font-family: var(--bodyFont);
    margin:15px 0;
    font-size:1.8rem;
    line-height:1.9rem;
}


h3 {
    font-size:2.4rem;
    line-height:2.7rem;
    font-family:var(--navFont);
    font-weight:800;
    margin:5px 0;

    &.itemTitle {
        font-family:var(--headingFont);
        font-style:italic;
        padding:10px;
    }
}

.accent {
        font-weight:800;
        background:var(--red);
        color:var(--beige);
        border: solid 4px var(--red);
        &:hover,
        &:focus {
            background:#ffffff;
            border:4px solid var(--black);
            color:var(--red);
            box-shadow:var(--boxShadow);
        }
}

.red {
    color:var(--red);
}

span.strong {
    font-weight:800;
}

`

export default Typography