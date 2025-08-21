class HeaderFooterManager {
    constructor() {
        this.headerContent = `
            <div class="nav-brand">
                <a href="index.html">
                    <img src="https://raw.githubusercontent.com/spinmazter/AcademyKuda/c944539b304cb381d3039759c387f635d2c3e6ef/img/logo.jpg" alt="SpinMasterz Logo" class="logo">
                </a>
            </div>
            
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <ul class="nav-menu">
                <li class="nav-item"><a href="index.html" class="nav-link"><i class="fas fa-home"></i>Home</a></li>
                <li class="nav-item"><a href="about.html" class="nav-link"><i class="fas fa-info-circle"></i>About</a></li>
                
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link"><i class="fas fa-dumbbell"></i>Programs <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="highperformance.html"><i class="fas fa-trophy"></i>High Performance</a></li>
                        <li><a href="one.html"><i class="fas fa-user"></i>One on One</a></li>
                        <li><a href="group.html"><i class="fas fa-users"></i>Group Training</a></li>
                        <li><a href="vacation.html"><i class="fas fa-calendar-week"></i>Vacation Training</a></li>
                        <li><a href="extra.html"><i class="fas fa-plus"></i>Extra Murals</a></li>
                        <li><a href="para.html"><i class="fas fa-wheelchair"></i>Para Classes</a></li>
                        <li><a href="tournaments.html"><i class="fas fa-medal"></i>Tournaments</a></li>
                    </ul>
                </li>
                
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link"><i class="fas fa-images"></i>Gallery <i class="fas fa-chevron-down"></i></a>
                    <ul class="dropdown-menu">
                        <li><a href="pictures.html"><i class="fas fa-camera"></i>Pictures</a></li>
                        <li><a href="videos.html"><i class="fas fa-video"></i>Videos</a></li>
                    </ul>
                </li>
                
                <li class="nav-item"><a href="testimonials.html" class="nav-link"><i class="fas fa-quote-left"></i>Testimonials</a></li>
                <li class="nav-item"><a href="contact.html" class="nav-link"><i class="fas fa-envelope"></i>Contact</a></li>
            </ul>
        `;

        this.footerContent = `
            <div class="footer-content">
                <div class="footer-section about">
                    <div class="footer-logo">
                        <img src="https://raw.githubusercontent.com/spinmazter/AcademyKuda/c944539b304cb381d3039759c387f635d2c3e6ef/img/logo.jpg" alt="SpinMasterz Academy Logo" class="footer-logo-img">
                        <h3>SpinMasterz Table Tennis Academy</h3>
                    </div>
                    <p class="footer-description">
                        Transforming passionate players into champions through world-class table tennis training and personalized coaching.
                    </p>
                    <div class="socials">
                        <a href="https://www.facebook.com/groups/468275692499194" target="_blank" class="social-link">
  <i class="fab fa-facebook-f"></i>
</a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.youtube.com/@kudamhurure" class="social-link" target="_blank" rel="noopener noreferrer">
  <i class="fab fa-youtube"></i>
</a>
                        <a href="https://wa.me/27697480306" class="social-link" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
                    </div>
                </div>

                <div class="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="programs.html">Training Programs</a></li>
                        <li><a href="tournaments.html">Tournaments</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-section programs">
                    <h3>Our Programs</h3>
                    <ul>
                        <li><a href="highperformance.html">High Performance</a></li>
                        <li><a href="one.html">One on One Training</a></li>
                        <li><a href="group.html">Group Training</a></li>
                        <li><a href="vacation.html">Holiday Programs</a></li>
                        <li><a href="para.html">Para Table Tennis</a></li>
                    </ul>
                </div>

                <div class="footer-section contact-info">
                    <h3>Contact Us</h3>
                    <div class="contact-details">
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <span>+27 69 748 0306</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <span>kudakwashe914@gmail.com</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>1120 Haarhoff Street<br>Waverly<br>Pretoria, 0186</span>
                        </div>
                        <div class="contact-item">
                            <i class="fas fa-clock"></i>
                            <span>Mon - Fri: 06:00 - 20:00<br>Sat: 08:00 - 16:00<br>Sun: 08:00 - 13:00</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-content">
                    <p>&copy; ${new Date().getFullYear()} SpinMasterz Table Tennis Academy. All rights reserved.</p>
                    <div class="footer-bottom-links">
                        <a href="privacy.html">Privacy Policy</a>
                        <a href="terms.html">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        `;
    }

    // Initialize header and footer
    init() {
        this.insertHeader();
        this.insertFooter();
        this.setupMobileMenu();
        this.setupDropdowns();
        this.highlightCurrentPage();
    }

    // Insert header into the page
    insertHeader() {
        const header = document.querySelector('nav.navbar');
        if (header) {
            header.innerHTML = this.headerContent;
        }
    }

    // Insert footer into the page
    insertFooter() {
        const footer = document.querySelector('footer.footer');
        if (footer) {
            footer.innerHTML = this.footerContent;
        }
    }

    // Setup mobile menu functionality
    setupMobileMenu() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            // Hamburger menu toggle
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                navMenu.classList.toggle('active');
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                }
            });

            // Close menu when clicking a link (but not dropdown toggles)
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    // Don't close menu if this is a dropdown toggle
                    const parentDropdown = link.closest('.dropdown');
                    if (parentDropdown && window.innerWidth <= 968) {
                        // This is a dropdown toggle in mobile view, don't close the menu
                        return;
                    }

                    // Close menu for regular links
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                });
            });

            // Remove mobile menu on window resize
            window.addEventListener('resize', () => {
                if (window.innerWidth > 968) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    // Also close any open dropdowns
                    document.querySelectorAll('.dropdown').forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            });
        }
    }

    // Setup dropdown menus
    setupDropdowns() {
        const dropdowns = document.querySelectorAll('.dropdown');

        dropdowns.forEach(dropdown => {
            const dropdownLink = dropdown.querySelector('.nav-link');

            // For mobile devices - handle dropdown toggle
            if (dropdownLink) {
                dropdownLink.addEventListener('click', (e) => {
                    if (window.innerWidth <= 968) {
                        e.preventDefault();
                        e.stopPropagation();

                        // Close other dropdowns
                        dropdowns.forEach(otherDropdown => {
                            if (otherDropdown !== dropdown) {
                                otherDropdown.classList.remove('active');
                            }
                        });

                        // Toggle current dropdown
                        dropdown.classList.toggle('active');
                    }
                });
            }

            // Handle clicks on dropdown menu items (close menu after selection)
            const dropdownItems = dropdown.querySelectorAll('.dropdown-menu a');
            dropdownItems.forEach(item => {
                item.addEventListener('click', () => {
                    if (window.innerWidth <= 968) {
                        const hamburger = document.querySelector('.hamburger');
                        const navMenu = document.querySelector('.nav-menu');
                        if (hamburger && navMenu) {
                            hamburger.classList.remove('active');
                            navMenu.classList.remove('active');
                        }
                        dropdown.classList.remove('active');
                    }
                });
            });

            // For desktop hover
            dropdown.addEventListener('mouseenter', () => {
                if (window.innerWidth > 968) {
                    dropdown.classList.add('active');
                }
            });

            dropdown.addEventListener('mouseleave', () => {
                if (window.innerWidth > 968) {
                    dropdown.classList.remove('active');
                }
            });
        });
    }

    // Highlight current page in navigation
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

// Initialize HeaderFooterManager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const manager = new HeaderFooterManager();
    manager.init();
}); 