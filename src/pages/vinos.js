import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Vinos from '../images/vinos.jpg'
import '../styles/menu.css'

const vinos = () => (
  <Layout>
    <SEO title="Vinos | Rosanegra 1000" />
    <section className="menu">
        <h1>Vinos</h1>
        <img src={Vinos} alt="menu de vinos" />
      </section>
  </Layout>
)

export default vinos
