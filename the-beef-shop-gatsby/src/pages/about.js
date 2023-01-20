import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const AboutStyles = styled.div`
    .flexParent {
        display:flex;
        justify-content:space-between;
        flex-wrap:wrap-reverse;
        width:100%;
    }

    .staffText {
        margin:15px 0;
        margin-right:50px;
        flex:1 2 calc(55% - 50px);
        p {
            margin:30px 0;
        }
    }
`

const StaffGridStyles = styled.div`
justify-self:center;
flex: 4 0 calc(45% - 50px);
.staffGallery {
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));
    grid-gap:1rem;
}

.gatsby-image-wrapper {
    backface-visibility:hidden;
    transition:0.3s ease;
    border:solid 8px var(--brown);
}

.overlay {
    opacity:0;
    position:absolute;
    transition:0.3s ease;
    top:50%;
    padding-left:15px;
    z-index:1;
}

.container {
    position:relative;
    margin-bottom:10px;
    &:hover {
        .gatsby-image-wrapper{
        opacity:0.3;
        }
        .overlay {
            opacity:1;
        }
    }
}
`
export default function AboutPage({ data }){
    const staff = data.staff.nodes 
    return (
        <AboutStyles>
            <h2>About</h2>
            <section className="staffSection wrapper"> 
            <h3>Our Staff</h3>
            <div className="flexParent">
                <div className="staffText">
                <p>Schlitz drinking vinegar subway tile nostrud mukbang tattooed freegan artisan echo park ad skateboard biodiesel. Normcore sed beard fashion axe tote bag. Keytar put a bird on it keffiyeh distillery green juice pariatur church-key mustache nisi before they sold out street art kickstarter normcore. Master cleanse velit forage, slow-carb kickstarter biodiesel cillum. Four loko church-key tousled, listicle woke wayfarers photo booth pariatur plaid ethical XOXO meggings pok pok. Celiac dreamcatcher tbh, quinoa godard leggings sartorial iceland. Meditation pok pok minim, ea unicorn fam listicle vice truffaut hoodie in sus XOXO.</p>
                <p>
                Succulents fixie la croix chartreuse, poke etsy yes plz. Craft beer ut ramps direct trade, skateboard est do id non whatever green juice kombucha. Cillum 90's ethical, banjo lyft hot chicken elit gastropub et knausgaard edison bulb green juice raw denim leggings. Food truck heirloom celiac nulla aesthetic yuccie. Ascot big mood intelligentsia hammock, do kinfolk sartorial bodega boys pork belly esse la croix. Gastropub seitan in four dollar toast flannel non. Try-hard cred sus, glossier semiotics fixie chillwave id squid truffaut Brooklyn kickstarter.
                </p>
                </div>
                <StaffGridStyles className="staff">
                    <div className="staffGallery">
                        {staff.map((person) => {
                            const image = getImage(person.image.asset)
                            return (
                                <div className="container" key={person.id}>
                                    <GatsbyImage
                                    image={image}
                                    alt={`${person.name}, ${person.position}`}
                                    />
                                    <div className="overlay" aria-hidden>
                                        <h4>{person.name}</h4>
                                        <p>{person.position}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </StaffGridStyles>
            </div>
            </section>
        </AboutStyles>
    )
}

export const query = graphql`
    query {
        staff: allSanityStaff {
            nodes {
                name
                slug {
                    current
                }
                id
                position
                image {
                    asset {
                        gatsbyImageData(
                            layout:CONSTRAINED,
                            width:200,
                            height:200,
                            placeholder:BLURRED,
                        )
                    }
                }
            }
        }
    }
`