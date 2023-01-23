import React from "react";
import { SiGatsby } from "react-icons/si";
import styled from "styled-components";

const FooterStyles = styled.footer`
  padding: 15px 0;
  color: white;
  background: var(--red);

  a {
    color: var(--white);
    font-weight: 400;
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="wrapper">
        <p>
          &copy;{new Date().getFullYear()}. Made by Corey Hamat.{" "}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGatsby />
            Built with Gatsby
          </a>
        </p>
        <p>
          DISCLAIMER: This is not an acutal restaurant. Just a sample webpage.
          Any similarities/connections to an actual restaurant are completely
          coincidental
        </p>
      </div>
    </FooterStyles>
  );
}
