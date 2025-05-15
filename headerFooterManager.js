class HeaderFooterManager {
    constructor() {
        this.header = `
            <header>
        <nav class="navbar">
            <div class="logo">
                <a href="index.html">
                    <img src="https://raw.githubusercontent.com/spinmazter/AcademyKuda/c944539b304cb381d3039759c387f635d2c3e6ef/img/logo.jpg" alt="Logo" class="logo-img">
                </a>
            </div>
            
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="menu-icon">
                <i class="fas fa-bars"></i>
            </label>
            
            <ul class="nav-menu">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">Programs <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="highperformance.html">High Performance</a></li>
                        <li><a href="oneon.html">One on One</a></li>
                        <li><a href="group.html">Group Training</a></li>
                        <li><a href="vacation.html">Vacation Training</a></li>
                        <li><a href="para.html">Para Classes</a></li>
                        <li class="nested-dropdown">
                            <a href="#" class="dropdown-toggle">Tournaments <i class="fas fa-chevron-right"></i></a>
                            <ul class="nested-dropdown-menu">
                                <li><a href="sa.html">SA GAMES</a></li>
                                <li><a href="gno.html">GN OPEN</a></li>
                                <li><a href="gnc.html">GN CLOSED</a></li>
                                <li><a href="jo.html">J'BURG OPEN</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle">Gallery <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="pictures.html">Pictures</a></li>
                        <li><a href="videos.html">Videos</a></li>
                    </ul>
                </li>
                <li><a href="testimonial.html">Testimonial</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
        `;

        this.footer = `
            <footer class="footer">
                <div class="footer-waves">
                    <div class="wave" id="wave1"></div>
                    <div class="wave" id="wave2"></div>
                    <div class="wave" id="wave3"></div>
                    <div class="wave" id="wave4"></div>
                </div>

                <div class="footer-content">
                    <div class="footer-section brand">
                        <h3 class="footer-logo">SpinMasterz <span>Academy</span></h3>
                        <p class="footer-tagline">Where players develop into Champions</p>
                        <nav class="footer-nav">
                            <a href="index.html">Home</a>
                            <a href="about.html">About</a>
                            <a href="contact.html">Contact</a>
                            <a href="testimonial.html">Testimonial</a>
                        </nav>
                    </div>

                    <div class="footer-section contact">
                        <h4>Contact Information</h4>
                        <div class="contact-info">
                            <div class="contact-item">
                                <i class="fas fa-map-marker-alt"></i>
                                <div>
                                    <span>Location</span>
                                    <p>Hoërskool OOS MOOT</p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-phone-alt"></i>
                                <div>
                                    <span>Call Us</span>
                                    <p><a href="tel:+27697480306">+27 69 748 0306</a></p>
                                </div>
                            </div>
                            <div class="contact-item">
                                <i class="fas fa-envelope"></i>
                                <div>
                                    <span>Email Us</span>
                                    <p><a href="mailto:kudacoach@gmail.com">kudacoach@gmail.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="footer-section social">
                        <h4>Connect With Us</h4>
                        <div class="social-links">
                            <a href="http://wa.me/+27697480306" class="social-link whatsapp" aria-label="WhatsApp">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <a href="#" class="social-link twitter" aria-label="Twitter">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/kuda-mhurure-681a6b53" class="social-link linkedin" target="_blank" aria-label="LinkedIn">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.youtube.com/@kudamhurure" class="social-link youtube" aria-label="YouTube">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.facebook.com/groups/468275692499194/" class="social-link facebook" target="_blank" aria-label="Facebook">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="footer-line"></div>
                    <p class="copyright">
                        Copyright ${new Date().getFullYear()} <strong>SpinMasterz Academy</strong>. All rights reserved.
                    </p>
                </div>
            </footer>
        `;
    }

    init() {
        // Insert header and footer
        this.insertHeader();
        this.insertFooter();
        
        // Initialize mobile menu
        this.initMobileMenu();
        
        // Highlight current page in navigation
        this.highlightCurrentPage();
    }

    insertHeader() {
        const headerPlaceholder = document.querySelector('#header');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = this.header;
        }
    }

    insertFooter() {
        const footerPlaceholder = document.querySelector('#footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = this.footer;
        }
    }

    initMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });
        }
    }

    highlightCurrentPage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const manager = new HeaderFooterManager();
    manager.init();
});