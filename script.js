document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Hamburger menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Mobile dropdown toggle
    if (window.innerWidth <= 968) {
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                dropdown.classList.toggle('active');
                
                // Close other dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.classList.remove('active');
                    }
                });
            });
        });
    }

    // Remove mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 968) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });

    // Achievement Numbers Counting Animation
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // Format the number based on the original text
            const originalText = element.getAttribute('data-target');
            if (originalText.includes('%')) {
                element.textContent = Math.floor(current) + '%';
            } else if (originalText.includes('+')) {
                element.textContent = Math.floor(current) + '+';
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Intersection Observer for triggering animations when in view
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const target = parseInt(entry.target.getAttribute('data-target'));
                animateCounter(entry.target, target);
            }
        });
    }, observerOptions);

    // Initialize achievement counters
    const achievementNumbers = document.querySelectorAll('.achievement-number');
    achievementNumbers.forEach(element => {
        const originalText = element.textContent;
        const numericValue = parseInt(originalText.replace(/[^\d]/g, ''));

        // Store original text and numeric value
        element.setAttribute('data-target', originalText);
        element.setAttribute('data-value', numericValue);

        // Set initial value to 0
        if (originalText.includes('%')) {
            element.textContent = '0%';
        } else if (originalText.includes('+')) {
            element.textContent = '0+';
        } else {
            element.textContent = '0';
        }

        // Observe the element
        observer.observe(element);
    });

    // Also animate the years badge in welcome section
    const yearsBadge = document.querySelector('.years');
    if (yearsBadge) {
        const originalText = yearsBadge.textContent;
        const numericValue = parseInt(originalText.replace(/[^\d]/g, ''));

        yearsBadge.setAttribute('data-target', originalText);
        yearsBadge.setAttribute('data-value', numericValue);
        yearsBadge.textContent = '0+';

        observer.observe(yearsBadge);
    }
});