import React, { useState } from "react"
import { Link } from "react-router-dom"
// import HeadTitle from "../../Common/HeadTitle/HeadTitle"
import Back from "../common/back/Back"
import "./design.css"

const Login = () => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const [recValue, setRecValue] = useState([])
  // const submitForm = (e) => {
  //   e.preventDefault()
  //   const newValue = { email: email, password: password }

  //   setRecValue([...recValue, newValue])
  //   console.log(newValue)

  //   setEmail("")
  //   setPassword("")
  // }
  return (
    <>
      <Back title='Se connecter' />
      <section className='forms top contacts'>
        <div className='container'>
          <div className='sign-box'>
            
            <p>Entrez votre e-mail et votre mot de passe ci-dessous pour vous connecter à votre compte et profiter des avantages de notre site Web.</p>
            <form action='' >
              <input type='text' name='email'  placeholder='Email' />
              <input type='password' name='password' placeholder='Password' />
{/* 
              <div className='flex_space'>
                <div className='flex'>
                  <input type='checkbox' />
                  <label>Remember Me</label>
                </div>
               
              </div> */}

              <button type='submit' className='primary-btn' >
              Se connecter
              </button>
              <p className='btn'>
              Vous n'avez pas de compte ? <Link to='/register'>S'inscrire!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* <section className='show-data'>
        {recValue.map((cureentValue) => {
          return (
            <>
              <div className='sign-box'>
                <h1>Connectez-vous avec succès</h1>
                <h3>
                  Email : <p>{cureentValue.email}</p>
                </h3>
                <h3>
                  Password : <p>{cureentValue.password}</p>
                </h3>
              </div>
            </>
          )
        })}
      </section> */}
    </>
  )
}

export default Login
