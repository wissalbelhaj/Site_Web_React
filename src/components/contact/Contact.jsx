// import React from "react"
// import Back from "../common/back/Back"
// import "./contact.css"

// const Contact = () => {
//   const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
//   return (
//     <>
//       <Back title='Contact us' />
//       <section className='contact padding'>
//         <div className='container shadow flexSB'>
//           <div className='left row'>
//             <iframe src={map}></iframe>
//           </div>
//           <div className='right row'>
//             <h1>Contact us</h1>
//             <p>We're open for any suggestion or just to have a chat</p>

//             <div className='items grid2'>
//               <div className='box'>
//                 <h4>ADDRESS:</h4>
//                 <p>198 West 21th Street, Suite 721 New York NY 10016</p>
//               </div>
//               <div className='box'>
//                 <h4>EMAIL:</h4>
//                 <p> info@yoursite.com</p>
//               </div>
//               <div className='box'>
//                 <h4>PHONE:</h4>
//                 <p> + 1235 2355 98</p>
//               </div>
//             </div>

//             <form action=''>
//               <div className='flexSB'>
//                 <input type='text' placeholder='Name' />
//                 <input type='email' placeholder='Email' />
//               </div>
//               <input type='text' placeholder='Subject' />
//               <textarea cols='30' rows='10'>
//                 Create a message here...
//               </textarea>
//               <button className='primary-btn'>SEND MESSAGE</button>
//             </form>

//             <h3>Follow us here</h3>
//             <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Contact





// import React from "react"
// import Back from "../common/back/Back"
// import "./contact.css"

// const Contact = () => {
//   const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d904726.6131739549!2d85.24565535!3d27.65273865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1652535615693!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
//   return (
//     <>
//       <Back title='Contact us' />
//       <section className='contact padding'>
//         <div className='container shadow flexSB'>
//           <div className='left row'>
//             <iframe src={map}></iframe>
//           </div>
//           <div className='right row'>
//             <h1>Contact us</h1>
//             <p>Nous sommes ouverts à toute suggestion</p>

//             <div className='items grid2'>
//               <div className='box'>
//                 <h4>ADDRESS:</h4>
//                 <p>198 West 21th Street, Suite 721 New York NY 10016</p>
//               </div>
//               <div className='box'>
//                 <h4>EMAIL:</h4>
//                 <p> info@yoursite.com</p>
//               </div>
//               <div className='box'>
//                 <h4>PHONE:</h4>
//                 <p> + 1235 2355 98</p>
//               </div>
//             </div>

//             <form action=''>
//               <div className='flexSB'>
//                 <input type='text' placeholder='Name' />
//                 <input type='email' placeholder='Email' />
//               </div>
//               <input type='text' placeholder='Subject' />
//               <textarea cols='30' rows='10'>
//                 Create a message here...
//               </textarea>
//               <button className='primary-btn'>SEND MESSAGE</button>
//             </form>

//             <h3>Follow us here</h3>
//             <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Contact


import React, { useState } from "react";
import Back from "../common/back/Back";
import "./contact.css";

const Contact = () => {
  const map =
    "https://maps.google.com/maps?q=manhattan&t=&z=13&ie=UTF8&iwloc=&output=embed";
  
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Ici, vous pouvez ajouter votre logique d'envoi de message
    // Par exemple, envoyer une requête HTTP à un serveur
    // Une fois que le message est envoyé avec succès, vous pouvez définir setMessageSent(true) et réinitialiser les champs du formulaire
    setMessageSent(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <Back title="Contact us" />
      <section className="contact padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map} title="map"></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>Nous sommes ouverts à toute suggestion</p>

            <div className="contact grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> MyStyle22@gmail.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> +212 694-412125</p>
              </div>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="flexSB">
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                />
              </div>
              <input 
                type="text" 
                placeholder="Subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleInputChange} 
              />
              <textarea 
                cols="30" 
                rows="10" 
                placeholder="Create a message here..." 
                name="message" 
                value={formData.message} 
                onChange={handleInputChange} 
              />
               <button className="primary-btn">SEND MESSAGE</button>
              {messageSent && <p style={{color : 'red'}}>Message envoyé avec succès !</p>}
       
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
