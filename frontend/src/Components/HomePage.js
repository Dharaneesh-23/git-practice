import React, { Component } from 'react'
// import logo from './assets/images/ARAMM_CHECK-removebg.png'
import NavBarComp from './NavBarComp'
import Herocomponent from './HomePageComponentes/Herocomponent'
import HomeTreatment from './HomePageComponentes/HomeTreatment'
import HomeWelcome from './HomePageComponentes/HomeWelcome'
import MachineTypes from './HomePageComponentes/MachineTypes'
import Footer from './Footer'
class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBarComp />
        <Herocomponent/>
        <HomeWelcome />
        <div className='display-center my-2'>
          <HomeTreatment />
        </div>
        <div className='display-center background-image'>
          <MachineTypes />
        </div>
        <Footer />
      </div>
    )
  }
}

export default HomePage
