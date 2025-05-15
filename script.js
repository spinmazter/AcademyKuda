document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown toggle elements
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    // For mobile: Handle clicks on dropdown toggles
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // Only apply this in mobile view
            if (window.innerWidth <= 992) {
                e.preventDefault();
                
                // Get the parent dropdown or nested-dropdown element
                const parentLi = this.parentElement;
                
                // Toggle active class on the parent
                parentLi.classList.toggle('active');
                
                // Close other dropdowns at the same level
                const siblings = Array.from(parentLi.parentElement.children);
                siblings.forEach(sibling => {
                    if (sibling !== parentLi && sibling.classList.contains('active')) {
                        sibling.classList.remove('active');
                    }
                });
            }
        });
    });
    
    // Reset mobile menu state when resizing to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992) {
            document.querySelectorAll('.dropdown.active, .nested-dropdown.active').forEach(el => {
                el.classList.remove('active');
            });
        }
    });
});