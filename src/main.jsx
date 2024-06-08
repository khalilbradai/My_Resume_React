import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Importation des styles des bibliothèques tierces
import '/public/vendor/aos/aos.css';
import '/public/vendor/bootstrap/css/bootstrap.min.css';
import '/public/vendor/bootstrap-icons/bootstrap-icons.css';
import '/public/vendor/boxicons/css/boxicons.min.css';
import '/public/vendor/glightbox/css/glightbox.min.css';
import '/public/vendor/swiper/swiper-bundle.min.css';

// Importation de vos styles personnalisés
import '../public/css/style.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)