import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Tragos from '../images/tragos.jpg'
import '../styles/menu.css'

const tragos = () => (
  <Layout>
    <SEO title="Tragos | Rosanegra 1000" />
    <section className="menu">
        <h1>Tragos</h1>
        <img src={Tragos} alt="menu de tragos" />
      </section>
  </Layout>
)

export default tragos
