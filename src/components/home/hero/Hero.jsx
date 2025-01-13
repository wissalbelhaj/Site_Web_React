// import React from "react"
// import Heading from "../../common/heading/Heading"
// import "./Hero.css"

// const Hero = () => {
//   return (
//     <>
//       <section className='hero'>
//         <div className='container'>
//           <div className='row'>
//             <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' />
//             <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
//             <div className='button'>
//               <button className='primary-btn'>
//                 GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//               <button>
//                 VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//       <div className='margin'></div>
//     </>
//   )
// }

// export default Hero



import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading  title='Bienvenue dans le monde de la  Broderie Industrielle' />
            <p>La broderie industrielle, symbole d'artisanat et de précision, donne naissance à des œuvres d'art textiles, dans les coulisses des industries créatives.</p>
            {/* <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div> */}
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
