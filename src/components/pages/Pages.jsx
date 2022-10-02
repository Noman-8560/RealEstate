import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Property from "../property/Property"
import Services from "../services/Services"
import Signup from "../auth/Signup"
import Signin from "../auth/Signin"
import Buy from "../buy/Buy"

// import Contact from "../contact/Contact"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/Properties' component={Property} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/buy' component={Buy} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
