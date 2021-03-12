import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Menu1 from '../images/menu-principal-1.jpg'
import Menu2 from '../images/menu-principal-2.jpg'
import '../styles/menu.css'

const menuPrincipal = () => (
  <Layout>
    <SEO title="Menú principal | Rosanegra 1000" />
    <section className="menu">
        <h1>Menú Principal</h1>
        <img src={Menu1} alt="imagen menu principal" />
        <img src={Menu2} alt="imagen menu principal" />
      </section>
  </Layout>
)

export default menuPrincipal
