import React from 'react'


function ComponentHeader(props) {
  const bgImage = props.bgImage;
  const style = {
    backgroundImage:`linear-gradient(rgba(184, 34, 150, 0.4), rgba(184, 34, 150, 0.4)), url(${bgImage})`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'100% 100%',
    // backgroundColor:'rgba(234,34,45,0.5)',
  }
  return (
    // <div className=''>
          <div className='component-header container-fluid px-0' style={style}>
            <p className='component-header-text display-center mb-0'>{props.cName}</p>  
        </div>
    // </div>
  )
}

export default ComponentHeader
