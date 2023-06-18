// import React from 'react'
// import PropTypes from 'prop-types'

import { Outlet } from "react-router-dom";


// eslint-disable-next-line react/prop-types
function LayoutHomePage() {
  return (
    <div>
      <h3>INI LAYOUT HOME PAGE</h3>
      <Outlet />
      </div>
  )
}

// LayoutHomePage.propTypes = {
//   children: PropTypes.node
// }

export default LayoutHomePage;