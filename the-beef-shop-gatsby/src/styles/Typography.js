import { createGlobalStyle } from "styled-components";

const Typography = createGlobalStyle`

p {
    font-family: var(--bodyFont);
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
        padding:2px;
    }
}

.accent {
        font-weight:800;
        background:var(--red);
        color:var(--beige);
}
`

export default Typography