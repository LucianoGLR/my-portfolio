import React, { useState } from 'react';
// import imagen from '/TPRS7H4PN-U05RMBMAB5Z-c50f2310710c-512.jpeg';
import imagen from '/Untitledd.png';
import './App.css';

function App() {

  return (
    <div className="container">
      <div className="header-box">
        <img src={imagen} alt="foto perfil" />
        <h1>Luciano Gallinger</h1>
      </div>

      <div className="about-box">
        <p className='my-about'>
          Hola! Soy un desarrollador junior apasionado por el mundo de la tecnología y el desarrollo web.
          <br />
          <br />
          Mi objetivo es adquirir experiencia y habilidades mientras contribuyo al desarrollo de soluciones creativas y funcionales. Aunque soy relativamente nuevo en la industria, estoy comprometido con mi crecimiento profesional y listo para enfrentar cualquier desafío que se presente en el camino.
          <br />
          <br />
          Mis proyectos WearFashion y Countries, me han proporcionado valiosas lecciones y experiencias prácticas.
          <br />
          <br />
          Gracias por interesarte en mi perfil y acompañarme en esta emocionante travesía. ¡Estoy listo para seguir aprendiendo y creciendo junto a la comunidad de desarrollo!
        </p>
      </div>

      <br />

      <h3 className='title'>Proyectos en los que he trabajado</h3>
      <div className="projects-box">
        <div className="projects-container">
          <div className="project">
            <h4>Wearfashion App 👕</h4>
            <p>
              Description: "An e-commerce platform dedicated to urban fashion, offering trendy clothing options for a style-conscious demographic.
              Features include user-friendly navigation, secure checkout, and interactive product displays."
            </p>
            <a href="https://www.youtube.com/watch?v=78UhoOp5lmc"><img src="/imagewear.png" alt="Project Video" width="350" height="200" /></a>
            <p>Link to <a href="https://wearfashion.vercel.app/">Wearfashion</a> deploy</p>
          </div>
          <div className="project">
            <h4>Countries App 🗺️</h4>
            <p>
              App for exploring countries with information and tourist activities. It has multiple filters
              to get a search so much especify
            </p>
            <a href="https://www.youtube.com/watch?v=URL_DEL_VIDEO"><img src="/countries.png" alt="Project Video" width="350" height="200" /></a>
            <p>Link to <a href="https://countriesapp.vercel.app/">Countries App</a> deploy</p>
          </div>
        </div>
      </div>

      <br />

      <div className='technologies-box'>
        <h3 className='title'>Tecnologias que utilizo</h3>
        <br />
        <div className="technologies-icons">
          <img src="/js.png" alt="JavaScript" />
          <img src="/html.png" alt="HTML" />
          <img src="/css-3.png" alt="CSS3" />
          <img src="/atom.png" alt="React" />
          <img src="/redux.png" alt="Redux" />
          <img src="/express.png" alt="Express" />
          <img src="/programing.png" alt="Node.js" />
          <img src="/sql-server.png" alt="SQL" />
          <img src="/postgre.png" alt="PostgreSQL" />
        </div>
      </div>

      <br />

      <h4 className='my-about'>
        Gracias por interesarte en mi perfil y acompañarme en esta emocionante travesía.
        <br />
        ¡Estoy listo para seguir aprendiendo y creciendo junto a la comunidad de desarrollo!
      </h4>

      <br />

      <h3 className='title'>Contacta Conmigo🤳</h3>
      <div className="footer-box">
        <div className="footer-content">
          <div className="location-section">
            <h4>Ubicación</h4>
            <p>📌Granadero Baigorria, Santa Fe, Argentina</p>
          </div>
          <div className="contact-section">
            <h4>Información de Contacto</h4>
            <p><strong>📫Email:</strong> <a href="mailto:lucianogallinger@gmail.com">lucianogallinger@gmail.com</a></p>
            <p><strong>📞Teléfono:</strong> <a href="tel:+543436403559">+54 3436-403559</a></p>
            <p><strong>🐱GitHub:</strong> <a href="https://github.com/lucianogallinger">lucianogallinger</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
