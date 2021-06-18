import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Vinos from '../images/vino1.jpg'
import Vinos2 from '../images/vino2.jpg'
import Flyer from '../images/flyervino.jpg'
import '../styles/menu.css'

const vinos = () => (
  <Layout>
    <SEO title="Vinos | Rosanegra 1000" />
    <section className="menu">
        <h1>Vinos</h1>
        <img src={Vinos} alt="menu de vinos" />
        <img src={Vinos2} alt="menu de vinos" />
        <img src={Flyer} alt="flyer de vinos" />
      </section>
  </Layout>
)

export default vinos
