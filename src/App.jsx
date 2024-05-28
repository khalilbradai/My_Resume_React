import React, { useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';


function App() {

  useEffect(() => {
    const pureCounter = document.createElement('script');
    pureCounter.src = '/assets/vendor/purecounter/purecounter_vanilla.js';
    pureCounter.async = true;
    document.body.appendChild(pureCounter);

    const aos = document.createElement('script');
    aos.src = '/assets/vendor/aos/aos.js';
    aos.async = true;
    document.body.appendChild(aos);

    const bootstrap = document.createElement('script');
    bootstrap.src = '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    bootstrap.async = true;
    document.body.appendChild(bootstrap);

    const glightbox = document.createElement('script');
    glightbox.src = '/assets/vendor/glightbox/js/glightbox.min.js';
    glightbox.async = true;
    document.body.appendChild(glightbox);

    const isotope = document.createElement('script');
    isotope.src = '/assets/vendor/isotope-layout/isotope.pkgd.min.js';
    isotope.async = true;
    document.body.appendChild(isotope);

    const swiper = document.createElement('script');
    swiper.src = '/assets/vendor/swiper/swiper-bundle.min.js';
    swiper.async = true;
    document.body.appendChild(swiper);

    const typed = document.createElement('script');
    typed.src = '/assets/vendor/typed.js/typed.umd.js';
    typed.async = true;
    document.body.appendChild(typed);

    const waypoints = document.createElement('script');
    waypoints.src = '/assets/vendor/waypoints/noframework.waypoints.js';
    waypoints.async = true;
    document.body.appendChild(waypoints);

    const phpEmailForm = document.createElement('script');
    phpEmailForm.src = '/assets/vendor/php-email-form/validate.js';
    phpEmailForm.async = true;
    document.body.appendChild(phpEmailForm);

    const mainJs = document.createElement('script');
    mainJs.src = '/assets/js/main.js';
    mainJs.async = true;
    document.body.appendChild(mainJs);
  }, []);

  return (
    <div>

      <Navbar />
      <Footer />

    </div>
  )
}

export default App
