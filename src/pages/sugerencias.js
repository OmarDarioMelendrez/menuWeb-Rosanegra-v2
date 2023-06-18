import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import sugerencias from '../images/sugerencias.jpg'
import '../styles/menu.css'

const Sugerencias = () => (
  <Layout>
    <SEO title="Tragos | Rosanegra 1000" />
    <section className="menu">
        <h1>Sugerencias</h1>
        <img src={sugerencias} alt="Sugerencias" />
      </section>
  </Layout>
)

export default Sugerencias
