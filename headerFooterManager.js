class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar">
          <div class="branding">
            <a href="index.html" class="branding-logo">
              <img src="https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/my%20logo2.jpg" alt="SpinMasterzTT Official Logo">
            </a>
          </div>
          <input type="checkbox" id="input-hamburger" hidden>
          <label for="input-hamburger" class="hamburger"></label>
          <ul class="menu">
            <li><a href="index.html" class="menu-link">Home</a></li>
            <li><a href="about.html" class="menu-link">About</a></li>
            <li class="has-dropdown">
              <a href="#" class="menu-link">Programs
                <span class="arrow"></span>
              </a>
              <ul class="submenu">
                <li><a href="highperformance.html" class="menu-link">High Performance</a></li>
                <li><a href="OneOn.html" class="menu-link">One on One</a></li>
                <li class="has-dropdown">
                  <a href="#" class="menu-link">Other Programs
                    <span class="arrow"></span>
                  </a>
                  <ul class="submenu">
                    <li><a href="group.html" class="menu-link">Group Training</a></li>
                    <li><a href="vacation.html" class="menu-link">Vacation Training</a></li>
                    <li><a href="para.html" class="menu-link">Para Classes</a></li>
                    <li class="has-dropdown">
                      <a href="sa.html" class="menu-link">Tournaments
                        <span class="arrow"></span>
                      </a>
                      <ul class="submenu">
                        <li><a href="sa.html" class="menu-link">SA GAMES</a></li>
                        <li><a href="gno.html" class="menu-link">GN OPEN</a></li>
                        <li><a href="gnc.html" class="menu-link">GN CLOSED</a></li>
                        <li><a href="jo.html" class="menu-link">J'BURG OPEN</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="has-dropdown">
              <a href="#" class="menu-link">Gallery
                <span class="arrow"></span>
              </a>
              <ul class="submenu">
                <li><a href="pictures.html" class="menu-link">Pictures</a></li>
                <li><a href="video.html" class="menu-link">Videos</a></li>
              </ul>
            </li>
            <li><a href="testimonial.html" class="menu-link">Testimonials</a></li>
            <li><a href="contact.html" class="menu-link">Contact</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>SpinMasterz <span>Academy</span></h3>
          <p class="footer-links">
            <a href="index.html">Home</a> |
            <a href="about.html">About</a> |
            <a href="contact.html">Contact</a> |
            <a href="testimonial.html">Testimonial</a> |
          </p>
          <p class="footer-company-name">Copyright @ 2024 <strong>SpinMasterz Academy</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p><span>Hoërskool </span>OOS MOOT</p>
          </div>
          <div>
            <i class="fa fa-phone"></i>
            <p>+27 69 748 0306</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:kudacoach@gmail.com">kudacoach@gmail.com</a></p>
          </div> 
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the Academy</span>
            <strong>SpinMasterz Academy</strong> Where players develop into Champions
          </p>
          <div class="footer-icons">
            <a href="http://wa.me/+27697480306"><i class="fa fa-whatsapp"></i></a>
            <a href="#"><i class="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/kuda-mhurure-681a6b53" target="_blank">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="https://www.youtube.com/@kudamhurure"><i class="fa fa-youtube"></i></a>
            <a href="https://www.facebook.com/groups/468275692499194/" target="_blank"><i class="fa fa-facebook"></i></a>
          </div>
        </div>
      </footer> 
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    `;
  }
}

customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);