import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

h1,
h2 {
    font-family:var(--headingFont);
}

h1 {
    font-size:4.5rem;
}

h3,
a {
    font-family:var(--navFont);
    font-weight:800;
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
    margin:5px 0;

    &.itemTitle {
        font-family:var(--headingFont);
        font-style:italic;
        padding:10px;
    }
}

h4 {
    font-size:2.2rem;
    margin:5px 0;
    font-family:var(--titleFont);
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

.strong {
    font-weight:800;
}

`;

export default Typography;
