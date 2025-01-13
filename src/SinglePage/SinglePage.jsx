import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Sdata from "../components/allcourses/Sdata"
//import EmptyFile from "../Common/Empty/EmptyFile"
import { useParams } from "react-router-dom"
//import HeadTitle from "../Common/HeadTitle/HeadTitle"
import "./page.css"
import Back from "../components/common/back/Back"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])

  return (
    <>
      <Back />

      {item ? (
        <section className='single-page top'>
          <div className='container-single' >
            <Link to='/courses' className='primary-btn back' style={{ backgroundColor:'#fe8432' }}>
              <i className='fas fa-long-arrow-alt-left'></i> Go Back
            </Link>

            {/* --------- main-content--------- */}

            <article className='content flex'>
              <div className='main-content'>
                <img src={item.image} alt='' />
                <p>{item.desc}</p>
                <p>{item.desc2}</p>
                <p>{item.desc3}</p>
                <p>{item.desc4}</p>
                {/* <p>{item.desc}</p> */}

                {/* <div className='para flex_space'>
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>Whta is the {item.title} City ?</h1>
                <p>{item.desc}</p> */}

                {/* <div className='image grid1 '>
                  <img src={item.paraImage_one} alt='' />
                  <img src={item.paraImage_two} alt='' />
                </div> */}
                {/* <p>{item.desc}</p> */}
              </div>
              {/* --------- main-content--------- */}

              {/* --------- side-content--------- */}
              <div className='side-content' >
                <div className='box-single'  style={{ backgroundColor:'#1ea5d6' }}>
                  <h2>Vous avez des questions ou besoin de renseignements supplémentaires sur nos services ?</h2>
                  <p>{item.sidepara}</p>
                  <button className='outline-btn'>
                    <i className='fa fa-phone-alt'></i> Contact Us
                  </button>
                </div>

                {/* <div className='box2'>
                  <p>{item.sidepara}</p>
                </div> */}
              </div>
              {/* --------- side-content--------- */}
            </article>
          </div>
        </section>
      ) : (
        <Back />
      )}
    </>
  )
}

export default SinglePage
