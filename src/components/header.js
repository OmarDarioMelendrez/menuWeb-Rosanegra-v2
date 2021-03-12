import * as React from "react"
import { Link } from "gatsby"

import './header.css'
import Logo from '../images/logo.jpg'

const Header = ({ siteTitle }) => (
  <header className="headerMenu">
  <Link to="/menu">
    <img src={Logo} alt={`logo del restaurante`} />
  </Link>
</header>
)



export default Header
