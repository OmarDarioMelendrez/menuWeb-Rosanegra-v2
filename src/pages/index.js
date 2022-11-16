import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


import '../styles/menu.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home | Rosanegra 1000" />
    <section className="menu">
        <h1>Seleccionar menú</h1>
        <div className="btnsContainer">
          <Link to="/menu-principal" className="btn-link">
            <button className="btn">Menú Principal</button>
          </Link>
          <Link to="/vinos" className="btn-link">
            <button className="btn">Vinos</button>
          </Link>
          <Link to="/tragos" className="btn-link">
            <button className="btn">Tragos</button>
          </Link>
        </div>
      </section>

  </Layout>
)

export default IndexPage
