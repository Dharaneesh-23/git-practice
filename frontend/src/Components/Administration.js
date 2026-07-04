import React from 'react'
import LoginPageComponent from './AdminComponents/LoginPageComponent'
import ComponentHeader from './ComponentHeader'
import { Outlet } from 'react-router-dom'
function Administration() {
  return (
    <div>
      {/* <ComponentHeader cName='Adminstration'/> */}
      <Outlet />
    </div>
  )
}

export default Administration
