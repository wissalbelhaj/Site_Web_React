// import React from "react"
// import AboutCard from "../about/AboutCard"
// import Hblog from "./Hblog"
// import HAbout from "./HAbout"
// import Hero from "./hero/Hero"
// import Hprice from "./Hprice"
// import Testimonal from "./testimonal/Testimonal"

// const Home = () => {
//   return (
//     <>
//       <Hero />
//       <AboutCard />
//       <HAbout />
//       <Testimonal />
//       <Hblog />
//       <Hprice />
//     </>
//   )
// }

// export default Home



import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
//import SinglePage from "../../SinglePage/SinglePage"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
      {/* <SinglePage/> */}
    </>
  )
}

export default Home
