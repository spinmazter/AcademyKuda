// pictures.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryTrack = document.querySelector('.gallery-track');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');

    // Image data with details
    const galleryImages = [
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new12.jpg',
            name: 'Nicke',
            description: 'U15s, South Africa Games..!'
        },
        // Add all your other images here following the same structure
        // Last image from your original HTML
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new10.jpg',
            name: 'Madelize',
            description: 'U19s, South Africa Games..!'
        },


        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/1.jpg',
            name: 'Liam',
            description: 'U15s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert1.jpg',
            name: 'Werner',
            description: 'Opens, Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert2.jpg',
            name: 'Nicke',
            description: 'U19s, Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert3.jpg',
            name: 'Madelize',
            description: 'U19s, Winner Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert4.jpg',
            name: 'Madelize&Imaan',
            description: 'Under19s, 2nd and 3rd place Gauteng North..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert5.jpg',
            name: 'Vedansh',
            description: 'U15s, Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new15.jpg',
            name: 'Aditi',
            description: 'U13s, Winner Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_1600.jpg',
            name: 'Oos-Moot',
            description: 'Schools League, 2nd position in League..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2m.jpg',
            name: 'Oos-Moot',
            description: 'Extra-Murals, Pretoria League..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/extra%20m1.jpg',
            name: 'Team Oos-Moot',
            description: 'Gauteng North School League..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/wa8.jpg',
            name: 'Imaan&Aditi',
            description: '1st&2nd, Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/welcome.jpg',
            name: 'Storm',
            description: 'Gauteng North Player..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new6.jpg',
            name: 'Sazi&Vedansh',
            description: 'U13s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2b.png',
            name: 'Imaan',
            description: 'U13s, Winner Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/27.jpg',
            name: 'Liam',
            description: 'U19s, Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/29.jpg',
            name: 'Imaan',
            description: 'U13s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/20.jpg',
            name: 'Derick',
            description: 'Under15s Team, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/21.jpg',
            name: 'Sazi',
            description: 'Gold Medal, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/3a.jpg',
            name: 'Nicke',
            description: 'U19s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_2342.jpg',
            name: 'Shane',
            description: 'U15s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/44.jpg',
            name: 'Liam',
            description: 'U15s, Cape Town South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/20.jpg',
            name: 'Derick&Shane',
            description: 'U15s, Cape Town South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/sazi.jpg',
            name: 'Sazi',
            description: 'U13s, South Africa Games Cape Town..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new8.jpg',
            name: 'Kelly',
            description: 'U15s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new15.jpg',
            name: 'Imaan',
            description: 'U15s, South Africa Games Cape Town..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/30.jpg',
            name: 'Madelize',
            description: 'U19s, Winner Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/FB_IMG_1664903679928.jpg',
            name: 'Madelize&Nicke',
            description: 'U19s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/70.jpg',
            name: 'Nicke',
            description: 'U19s, South Africa Games..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/67.jpg',
            name: 'Imaan',
            description: 'Practice, SpinMasterz Academy..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/18.jpg',
            name: 'Derick',
            description: 'U15 Team, South Africa Games Cape Town..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/26.jpg',
            name: 'Madelize',
            description: 'U19s, Winner Gauteng North Closed..!'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/storm.jpg',
            name: 'Storm',
            description: 'U19s, Gauteng North Open..!'
        }
    ];

    // Populate gallery dynamically
    function populateGallery() {
        galleryImages.forEach(image => {
            const galleryItem = document.createElement('div');
            galleryItem.classList.add('gallery-item');
            galleryItem.innerHTML = `
                <img src="${image.src}" alt="${image.name}">
                <div class="gallery-item-details">
                    <h3>${image.name}</h3>
                    <p>${image.description}</p>
                </div>
            `;
            galleryTrack.appendChild(galleryItem);
        });
    }

    // Slider functionality
    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 100;
        galleryTrack.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        updateSlider();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Touch/Swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    galleryTrack.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    galleryTrack.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swiped left, go next
            currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        }
        if (touchEndX > touchStartX) {
            // Swiped right, go previous
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        }
        updateSlider();
    }

    // Initialize
    populateGallery();
});