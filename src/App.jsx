import React, { useEffect } from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css'
import '../public/vendor/aos/aos.css';
import '../public/vendor/bootstrap/css/bootstrap.min.css';
import '../public/vendor/bootstrap-icons/bootstrap-icons.css';
import '../public/vendor/boxicons/css/boxicons.min.css';
import '../public/vendor/glightbox/css/glightbox.min.css';
import '../public/vendor/swiper/swiper-bundle.min.css';
import '../public/css/style.css';


function App() {

  useEffect(() => {
    const pureCounter = document.createElement('script');
    pureCounter.src = '/vendor/purecounter/purecounter_vanilla.js';
    pureCounter.async = true;
    document.body.appendChild(pureCounter);

    const aos = document.createElement('script');
    aos.src = '/vendor/aos/aos.js';
    aos.async = true;
    document.body.appendChild(aos);

    const bootstrap = document.createElement('script');
    bootstrap.src = '/vendor/bootstrap/js/bootstrap.bundle.min.js';
    bootstrap.async = true;
    document.body.appendChild(bootstrap);

    const glightbox = document.createElement('script');
    glightbox.src = '/vendor/glightbox/js/glightbox.min.js';
    glightbox.async = true;
    document.body.appendChild(glightbox);

    const isotope = document.createElement('script');
    isotope.src = '/vendor/isotope-layout/isotope.pkgd.min.js';
    isotope.async = true;
    document.body.appendChild(isotope);

    const swiper = document.createElement('script');
    swiper.src = '/vendor/swiper/swiper-bundle.min.js';
    swiper.async = true;
    document.body.appendChild(swiper);

    const typed = document.createElement('script');
    typed.src = '/vendor/typed.js/typed.umd.js';
    typed.async = true;
    document.body.appendChild(typed);

    const waypoints = document.createElement('script');
    waypoints.src = '/vendor/waypoints/noframework.waypoints.js';
    waypoints.async = true;
    document.body.appendChild(waypoints);

    const phpEmailForm = document.createElement('script');
    phpEmailForm.src = '/vendor/php-email-form/validate.js';
    phpEmailForm.async = true;
    document.body.appendChild(phpEmailForm);

    const mainJs = document.createElement('script');
    mainJs.src = '/js/main.js';
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
