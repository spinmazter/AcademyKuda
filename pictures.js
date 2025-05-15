// pictures.js
document.addEventListener('DOMContentLoaded', () => {
    const galleryTrack = document.querySelector('.gallery-track');
    const prevButton = document.querySelector('.gallery-prev');
    const nextButton = document.querySelector('.gallery-next');
    let currentIndex = 0;

    // Image data with details and added color themes
    const galleryImages = [
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new12.jpg',
            name: 'Nicke',
            description: 'U15s, South Africa Games..!',
            theme: 'blue'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new10.jpg',
            name: 'Madelize',
            description: 'U19s, South Africa Games..!',
            theme: 'green'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/1.jpg',
            name: 'Liam',
            description: 'U15s, South Africa Games..!',
            theme: 'purple'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert1.jpg',
            name: 'Werner',
            description: 'Opens, Gauteng North Closed..!',
            theme: 'orange'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert2.jpg',
            name: 'Nicke',
            description: 'U19s, Gauteng North Closed..!',
            theme: 'red'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert3.jpg',
            name: 'Madelize',
            description: 'U19s, Winner Gauteng North Closed..!',
            theme: 'teal'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert4.jpg',
            name: 'Madelize&Imaan',
            description: 'Under19s, 2nd and 3rd place Gauteng North..!',
            theme: 'indigo'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert5.jpg',
            name: 'Vedansh',
            description: 'U15s, Gauteng North Closed..!',
            theme: 'coral'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new15.jpg',
            name: 'Aditi',
            description: 'U13s, Winner Gauteng North Closed..!',
            theme: 'blue'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_1600.jpg',
            name: 'Oos-Moot',
            description: 'Schools League, 2nd position in League..!',
            theme: 'green'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2m.jpg',
            name: 'Oos-Moot',
            description: 'Extra-Murals, Pretoria League..!',
            theme: 'purple'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/extra%20m1.jpg',
            name: 'Team Oos-Moot',
            description: 'Gauteng North School League..!',
            theme: 'orange'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/wa8.jpg',
            name: 'Imaan&Aditi',
            description: '1st&2nd, Gauteng North Closed..!',
            theme: 'red'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/welcome.jpg',
            name: 'Storm',
            description: 'Gauteng North Player..!',
            theme: 'teal'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new6.jpg',
            name: 'Sazi&Vedansh',
            description: 'U13s, South Africa Games..!',
            theme: 'indigo'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2b.png',
            name: 'Imaan',
            description: 'U13s, Winner Gauteng North Closed..!',
            theme: 'coral'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/27.jpg',
            name: 'Liam',
            description: 'U19s, Gauteng North Closed..!',
            theme: 'blue'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/29.jpg',
            name: 'Imaan',
            description: 'U13s, South Africa Games..!',
            theme: 'green'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/20.jpg',
            name: 'Derick',
            description: 'Under15s Team, South Africa Games..!',
            theme: 'purple'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/21.jpg',
            name: 'Sazi',
            description: 'Gold Medal, South Africa Games..!',
            theme: 'orange'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/3a.jpg',
            name: 'Nicke',
            description: 'U19s, South Africa Games..!',
            theme: 'red'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_2342.jpg',
            name: 'Shane',
            description: 'U15s, South Africa Games..!',
            theme: 'teal'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/44.jpg',
            name: 'Liam',
            description: 'U15s, Cape Town South Africa Games..!',
            theme: 'indigo'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/20.jpg',
            name: 'Derick&Shane',
            description: 'U15s, Cape Town South Africa Games..!',
            theme: 'coral'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/sazi.jpg',
            name: 'Sazi',
            description: 'U13s, South Africa Games Cape Town..!',
            theme: 'blue'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new8.jpg',
            name: 'Kelly',
            description: 'U15s, South Africa Games..!',
            theme: 'green'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new15.jpg',
            name: 'Imaan',
            description: 'U15s, South Africa Games Cape Town..!',
            theme: 'purple'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/30.jpg',
            name: 'Madelize',
            description: 'U19s, Winner Gauteng North Closed..!',
            theme: 'orange'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/FB_IMG_1664903679928.jpg',
            name: 'Madelize&Nicke',
            description: 'U19s, South Africa Games..!',
            theme: 'red'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/70.jpg',
            name: 'Nicke',
            description: 'U19s, South Africa Games..!',
            theme: 'teal'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/67.jpg',
            name: 'Imaan',
            description: 'Practice, SpinMasterz Academy..!',
            theme: 'indigo'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/18.jpg',
            name: 'Derick',
            description: 'U15 Team, South Africa Games Cape Town..!',
            theme: 'coral'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/26.jpg',
            name: 'Madelize',
            description: 'U19s, Winner Gauteng North Closed..!',
            theme: 'blue'
        },
        {
            src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/storm.jpg',
            name: 'Storm',
            description: 'U19s, Gauteng North Open..!',
            theme: 'green'
        }
    ];

    // Function to format player names
    function formatPlayerName(name) {
        // Split names with '&' to handle multiple names
        const names = name.split('&');
        
        // Capitalize first letter of each name and handle multiple names
        const formattedNames = names.map(n => 
            n.split(' ').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            ).join(' ')
        ).join(' & ');
        
        return formattedNames;
    }

    // Function to create gallery items
    function createGalleryItem(image) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item', `theme-${image.theme}`);
        
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.name;
        
        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('gallery-item-details');
        
        const nameHeading = document.createElement('h3');
        nameHeading.textContent = formatPlayerName(image.name);
        
        const descriptionPara = document.createElement('p');
        descriptionPara.textContent = image.description;
        
        detailsDiv.appendChild(nameHeading);
        detailsDiv.appendChild(descriptionPara);
        
        galleryItem.appendChild(imgElement);
        galleryItem.appendChild(detailsDiv);
        
        return galleryItem;
    }

    // Populate gallery
    function populateGallery() {
        galleryTrack.innerHTML = '';
        galleryImages.forEach(image => {
            const galleryItem = createGalleryItem(image);
            galleryTrack.appendChild(galleryItem);
        });
    }

    // Slide functionality
    function slideGallery(direction) {
        const itemWidth = galleryTrack.querySelector('.gallery-item').offsetWidth;
        currentIndex += direction;
        
        // Wrap around gallery
        if (currentIndex < 0) currentIndex = galleryImages.length - 1;
        if (currentIndex >= galleryImages.length) currentIndex = 0;
        
        const offset = -currentIndex * itemWidth;
        galleryTrack.style.transform = `translateX(${offset}px)`;
    }

    // Event listeners for navigation
    prevButton.addEventListener('click', () => slideGallery(-1));
    nextButton.addEventListener('click', () => slideGallery(1));

    // Initial population
    populateGallery();
});