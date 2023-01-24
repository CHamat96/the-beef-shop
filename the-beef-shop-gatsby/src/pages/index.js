import { graphql, Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import styled from "styled-components";

// Components
import MenuGrid from "../components/MenuGrid";

// Assets/Images
import "../images/index-hero.jpg";
import "../images/kitchen.jpeg";
import Seo from "../components/Seo";

const HomeStyles = styled.div`

  .headChef {
    .flexParent {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .text {
      margin-right: 50px;
      flex: 2 0 60%;
    }
    .gatsby-image-wrapper {
      max-width: 300px;
      height: auto;
      flex: 0 2 auto;
      border: solid 5px var(--red);
      box-shadow: var(--boxShadow);
    }
  }
  .linksContainer {
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > * {
      margin: 15px;
    }
  }

  .topPicksGrid {
    place-content:space-between;
  }
`;

export default function Home({ data }) {
  const topPicks = data.menuHighlights.nodes;
  const headChef = data.headChef;

  const image = getImage(headChef.image.asset);

  return (
    <>
      <Seo title="Home" />
      <HomeStyles>
        <div className="heroImage">
          <StaticImage
            layout="fullWidth"
            src="../images/index-hero.jpg"
            alt="the outside of a restaurant at night"
            placeholder="blurred"
            loading="lazy"
            aspectRatio={2.75 /1}
          />
          <div className="overlay">
            <h2>
              Welcome&nbsp;to<span className="title">The Beef Shop!</span>
            </h2>
          </div>
        </div>
        <div className="wrapper">
          <section>
            <h1>
              More than just your typical "Chicago-style Italian Beef" shop
            </h1>
            <p>
              Aliquip thundercats meh glossier synth labore whatever, mukbang ut
              sunt live-edge cornhole plaid. PBR&B microdosing affogato
              excepteur, before they sold out truffaut velit la croix praxis
              pitchfork aute tonx air plant irure yr. Yes plz chartreuse iPhone
              austin, shaman lumbersexual eiusmod trust fund velit tumeric
              yuccie knausgaard sed helvetica. Seitan next level ascot
              intelligentsia tousled aliquip dolor banh mi pour-over ad retro
              letterpress cloud bread.
            </p>
            <p>
              Tousled anim 90's reprehenderit, direct trade farm-to-table pok
              pok deep v umami everyday carry kickstarter. Consectetur XOXO
              magna skateboard sustainable retro pok pok kitsch. Ennui heirloom
              drinking vinegar authentic thundercats tattooed. Narwhal locavore
              fit vibecession, pok pok salvia whatever. Selfies chartreuse man
              braid blog flexitarian mlkshk four loko helvetica incididunt
              seitan hella pop-up letterpress. Voluptate butcher enim, twee big
              mood meditation craft beer narwhal typewriter nulla.
            </p>
            <p>
              Iceland mustache chartreuse poutine biodiesel YOLO. Leggings
              cillum non in austin four loko portland bitters messenger bag
              schlitz tacos sustainable art party. Gatekeep single-origin coffee
              pariatur, VHS narwhal ut vaporware disrupt. Lorem semiotics magna
              flannel culpa. Eu hexagon edison bulb photo booth, est
              fingerstache ascot kogi biodiesel in truffaut. JOMO swag aliquip
              beard sint normcore. Chartreuse small batch slow-carb, squid est
              woke forage cronut adaptogen iPhone ut selfies ullamco pour-over
              YOLO.
            </p>
          </section>
          <StaticImage
            src="../images/kitchen.jpeg"
            layout="fullWidth"
            alt="a frying pan over a hot stove"
            style={{border: "solid 15px var(--red)" }}
            aspectRatio={ 3 / 1 }
          />
          <section>
            <h3>
              Our Bestsellers. View full menu{" "}
              <Link to="/menu" className="red">
                Here
              </Link>
              !
            </h3>
            <MenuGrid menu={topPicks} gridClass="topPicksGrid"/>
          </section>
          <section className="headChef">
            <h3>Meet our Head Chef, {headChef.name}</h3>
            <div className="flexParent">
              <div className="text">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero quisquam corrupti nisi sapiente alias? Aut sed aliquam
                  eligendi possimus optio nulla, repellendus debitis numquam
                  exercitationem mollitia, ea vitae laborum sapiente quia
                  adipisci harum. Aperiam quas dolor nostrum est cum, dolore,
                  qui alias quaerat cupiditate esse mollitia eos ipsa ullam
                  libero ea incidunt excepturi officia illum animi? Officiis
                  eligendi quaerat aperiam tempore, velit est perferendis
                  dolorum ut molestias magnam accusantium cum beatae in vitae
                  quidem libero sunt nisi consequuntur neque sed culpa
                  architecto? Ipsa id corporis ratione soluta tempora quos dolor
                  praesentium! Vel delectus, rerum maxime eos velit dolorem
                  ipsum nisi aut tenetur voluptate. Quo explicabo porro
                  similique sapiente, earum numquam! Ratione accusantium,
                  quisquam earum iure vel doloremque quo sapiente perferendis
                  nisi aperiam consequatur? Adipisci temporibus in quibusdam, id
                  repellat est laborum nemo rerum natus accusamus molestiae iste
                  inventore a assumenda veritatis dolorum? Expedita animi
                  assumenda voluptates neque aut laudantium nemo nostrum
                  adipisci? Consectetur ullam impedit velit culpa illum fugit
                  sunt voluptatem corrupti officiis! Porro dicta, architecto
                  deserunt sequi illum reprehenderit asperiores, placeat neque
                  libero repellat culpa corporis at cum ipsam quidem nam,
                  doloribus quasi nesciunt aperiam consequatur reiciendis. Hic
                  doloribus culpa, quis neque sapiente voluptatem et velit
                  voluptas facere modi?
                </p>
              </div>
              <GatsbyImage image={image} alt={headChef.name} />
            </div>
          </section>
          <section className="orderLink">
            <h3>Order Online</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates adipisci eius ipsum officia, quam sunt, voluptas
              necessitatibus ea minima rerum alias deserunt impedit laboriosam
              dolorum?
            </p>
            <Link className="menuLink" to="/menu">
              View Menu
            </Link>
          </section>
        </div>
      </HomeStyles>
    </>
  );
}

export const query = graphql`
  query {
    menuHighlights: allSanityMenuItem(
      filter: { category: { elemMatch: { name: { eq: "Top Picks" } } } }
      sort: { _createdAt: ASC }
    ) {
      nodes {
        name
        id
        price
        slug {
          current
        }
        image {
          asset {
            gatsbyImage(
              layout: CONSTRAINED
              width: 250
              height: 250
              placeholder: BLURRED
            )
          }
        }
      }
    }
    headChef: sanityStaff(position: { eq: "Head Chef" }) {
      name
      image {
        asset {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 300
            height: 400
          )
        }
      }
    }
  }
`;
