import { graphql, Link } from "gatsby"
import React from "react"

export default function Home() {
  return (
    <>
    <section>
      <h3>Our Bestsellers. View full menu <Link to="/menu" className="accent">Here</Link>!</h3>
    </section>
    </>
    )
}
