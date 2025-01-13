// import React, { useState } from "react"
// import { Link } from "react-router-dom"
// import Head from "./Head"
// import "./header.css"

// const Header = () => {
//   const [click, setClick] = useState(false)

//   return (
//     <>
//       <Head />
//       <header>
//         <nav className='flexSB'>
//           <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
//             <li>
//               <Link to='/'>Home</Link>
//             </li>
//             <li>
//               <Link to='/courses'>All Courses</Link>
//             </li>
//             <li>
//               <Link to='/about'>About</Link>
//             </li>
//             <li>
//               <Link to='/team'>Team</Link>
//             </li>
//             <li>
//               <Link to='/pricing'>Pricing</Link>
//             </li>
//             <li>
//               <Link to='/journal'>Journal</Link>
//             </li>
//             <li>
//               <Link to='/contact'>Contact</Link>
//             </li>
//           </ul>
//           <div className='start'>
//             <div className='button'>GET CERTIFICATE</div>
//           </div>
//           <button className='toggle' onClick={() => setClick(!click)}>
//             {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
//           </button>
//         </nav>
//       </header>
//     </>
//   )
// }

// export default Header


import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"

import "./header.css"
import { Margin, Padding } from "@mui/icons-material"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/travaux'>Travaux</Link>
            </li>
            <li>
              <Link to='/About'>About Us</Link>
            </li>
            {/* <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li> */}
            <li>
              <Link to='/machine'>Machine</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          

          <div className='start'>
  <li>
    <Link to='/sign-in' style={{ color: 'white'  }}>
      <i class='far-st far fa-chevron-right  '>Sign in</i>
    </Link>
   / <Link to='/register' style={{ color: 'white' }}>
      <i class='far fa-chevron-right'>Register</i>
    </Link>
  </li>
            {/* <li>
              <Link to='/contact'>
                <button className='primary-btn'>Request a Quote</button>
              </Link>
            </li> */}
          </div>
          {/* <div className='start'>
            <div className='button'>GET CERTIFICATE</div>
          </div> */}
          {/* <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button> */}
        </nav>
      </header>
    </>
  )
}

export default Header
