import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Footer() {

  const form = useRef();

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1nquvhi", "template_3umu0qb", form.current,"user_mfDgHFD0J2tuz2wIy2FLY")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="contenedor-footer">
          <h2 id="2" className="titulo">Contactanos</h2>
      </div>
      
      <div className="container">
        <div className="contact-section">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <label>Nombre y apellido</label>
            <input type="text" name="user_name" className="contact-form-text" />
            <label>Email</label>
            <input type="email" name="user_email" className="contact-form-text" />
            <label>Telefono</label>
            <input type="text" name="telef" className="contact-form-text" />
            <label>Motivo de contacto</label>
            <textarea name="message" id="" cols="10" rows="5" className="contact-form-text"></textarea>
            <input type="submit" value="Send"  className="contact-form-btn"/>
          </form>
           <div>
          <span>
            <a href="https://www.facebook.com/Comisi%C3%B3n-de-Homenaje-GADA-101-Bater%C3%ADa-B-576913029071289">
            <i className="fab fa-facebook-square">/Comisión de Homenaje GADA 101 Batería B</i></a>
          </span>
          <span>
            <a href="https://www.instagram.com/bateriabgada101/">
            <i className="fab fa-instagram-square">/bateriabgada101</i></a>
          </span>
        </div>

        <h3 className="titulo-final">Malvinas | Por Siempre Argentinas!</h3>
        </div>  
      </div>
    </>
  )
}

