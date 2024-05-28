import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';
import Resume from '../Resume/Resume';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';

function Navbar(){
    return(
        <div>
        
        <header id="header" className="d-flex flex-column justify-content-center">
          <nav id="navbar" className="navbar nav-menu">
            <ul>
              <li><a href='#' className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
              <li><a href='#about' className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
              <li><a href='#resume' className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
              <li><a href='#portfolio' className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
              <li><a href='#services' className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></a></li>
              <li><a href='#contact' className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
            </ul>
          </nav>
          </header>

            <Home  />
            <main id="main">
                <About />
                <Resume />
                <Portfolio />
                <Services />
                <Contact />
            </main>
          
        </div>
 
    )

}

export default Navbar;




// export class Navbar extends Component{
//     render(){
//         return(
//             <header id="header" class="d-flex flex-column justify-content-center">
//               <nav id="navbar" class="navbar nav-menu">
//                 <ul>
//                   <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
//                   <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
//                   <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
//                   <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
//                   <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
//                   <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
//                 </ul>
//               </nav>
//             </header>
//         )
//     }
// }

