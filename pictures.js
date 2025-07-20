// Gallery images data with enhanced content
const images = [
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new12.jpg',
        title: 'Tournament Victory 2023',
        description: 'Celebrating our champions who dominated the 2023 season with exceptional skill and determination.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new10.jpg',
        title: 'Intensive Training Session',
        description: 'Our dedicated players pushing their limits during high-intensity training sessions.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/1.jpg',
        title: 'Team Event 2022',
        description: 'Building camaraderie and team spirit through collaborative events and activities.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert1.jpg',
        title: 'Certificate of Excellence',
        description: 'Recognizing outstanding achievements and dedication to the sport of table tennis.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert2.jpg',
        title: 'Award Ceremony',
        description: 'Honoring our players\' hard work and commitment at our annual awards ceremony.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert3.jpg',
        title: 'National Champion',
        description: 'Proud moment as our player claims the national championship title.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert4.jpg',
        title: 'Regional Winner',
        description: 'Dominating the regional competition with superior technique and strategy.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert5.jpg',
        title: 'Best Player Award',
        description: 'Celebrating excellence and outstanding performance in table tennis.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new15.jpg',
        title: 'Focused Drills',
        description: 'Perfecting technique through systematic and focused training drills.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_1600.jpg',
        title: 'Academy Open Day',
        description: 'Welcoming new members and showcasing our world-class facilities.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2m.jpg',
        title: 'Morning Practice',
        description: 'Early morning sessions building discipline and improving skills.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/extra%20m1.jpg',
        title: 'Extra Mile Session',
        description: 'Going beyond the basics with advanced training techniques.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/wa8.jpg',
        title: 'Welcoming New Members',
        description: 'Creating an inclusive environment for all table tennis enthusiasts.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/welcome.jpg',
        title: 'Welcome Ceremony',
        description: 'Official welcome ceremony for new academy members.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new6.jpg',
        title: 'High Performance Training',
        description: 'Elite training programs designed for competitive excellence.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2b.png',
        title: 'Doubles Champions',
        description: 'Celebrating success in doubles competition with perfect teamwork.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/27.jpg',
        title: 'Podium Finish',
        description: 'Standing proud on the podium after exceptional tournament performance.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/29.jpg',
        title: 'Winning Moment',
        description: 'Capturing the joy and excitement of victory in competition.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/20.jpg',
        title: 'Community Outreach',
        description: 'Connecting with the community and promoting table tennis.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/21.jpg',
        title: 'Family Day',
        description: 'Bringing families together through the love of table tennis.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/3a.jpg',
        title: 'Technique Workshop',
        description: 'Mastering advanced techniques through specialized workshops.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_2342.jpg',
        title: 'Academy Gathering',
        description: 'Building community spirit through regular academy gatherings.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/44.jpg',
        title: 'Finals Day',
        description: 'The excitement and tension of tournament finals day.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/sazi.jpg',
        title: 'Coach Sazi in Action',
        description: 'Our experienced coach demonstrating expert techniques.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new8.jpg',
        title: 'Youth Training',
        description: 'Nurturing young talent with age-appropriate training programs.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/30.jpg',
        title: 'Medal Ceremony',
        description: 'Proud moments during medal ceremonies celebrating achievements.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/FB_IMG_1664903679928.jpg',
        title: 'Fun Day',
        description: 'Enjoying the lighter side of table tennis with fun activities.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/70.jpg',
        title: 'Speed Drills',
        description: 'Improving reaction time and speed through specialized drills.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/67.jpg',
        title: 'Agility Training',
        description: 'Enhancing footwork and movement through agility exercises.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/18.jpg',
        title: 'Academy Social',
        description: 'Building friendships and community through social events.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/26.jpg',
        title: 'Regional Finals',
        description: 'Competing at the highest level in regional championships.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/storm.jpg',
        title: 'Stormy Match Day',
        description: 'Facing challenges head-on during intense competition.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/b2d659516473fdd7b2504e335a2b1147398b83e2/img/Saz2.jpg?raw=true',
        title: 'Coach Saz Advanced Training',
        description: 'Mastering advanced techniques with expert coaching guidance.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Coaching1.jpg?raw=true',
        title: 'Coaching1',
        description: 'Coaching session in action at SpinMasterzTT Academy.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Ima7.jpg?raw=true',
        title: 'Ima7',
        description: 'Training and development at SpinMasterzTT Academy.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Derek3.jpg?raw=true',
        title: 'Derek3',
        description: 'Focused training session with Derek.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Ima4.jpg?raw=true',
        title: 'Ima4',
        description: 'Athlete in action at SpinMasterzTT Academy.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/josh.jpg?raw=true',
        title: 'Josh',
        description: 'Josh during a training session.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Vedansh5.jpg?raw=true',
        title: 'Vedansh5',
        description: 'Vedansh showing great form in training.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Saz.jpg?raw=true',
        title: 'Saz',
        description: 'Coach Saz inspiring the next generation.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Ima5.jpg?raw=true',
        title: 'Ima5',
        description: 'Training at SpinMasterzTT Academy.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Derek2.jpg?raw=true',
        title: 'Derek2',
        description: 'Derek in a competitive match.',
        category: 'Tournaments'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Shane3.jpg?raw=true',
        title: 'Shane3',
        description: 'Shane demonstrating advanced skills.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Aditi2.jpg?raw=true',
        title: 'Aditi2',
        description: 'Aditi in a focused training session.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Vedansh3.jpg?raw=true',
        title: 'Vedansh3',
        description: 'Vedansh working on technique.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/10.jpg?raw=true',
        title: 'Image10',
        description: 'Memorable moment at SpinMasterzTT Academy.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/11.jpg?raw=true',
        title: 'Image11',
        description: 'Another great day at the academy.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Aditi3.jpg?raw=true',
        title: 'Aditi3',
        description: 'Aditi practicing advanced drills.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/FB_IMG_1664903786722.jpg?raw=true',
        title: 'FB_IMG_1664903786722',
        description: 'Fun and camaraderie at SpinMasterzTT Academy.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/FB_IMG_1665475425602.jpg?raw=true',
        title: 'FB_IMG_1665475425602',
        description: 'Celebrating achievements together.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Franco.jpg?raw=true',
        title: 'Franco',
        description: 'Franco in action at the academy.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Aditi4.jpg?raw=true',
        title: 'Aditi4',
        description: 'Aditi showing great form.',
        category: 'Training'
    }
];

// Slider functionality
class ImageSlider {
    constructor() {
        this.currentIndex = 0;
        this.isPlaying = true;
        this.interval = null;
        this.intervalTime = 5000; // 5 seconds
        
        this.sliderWrapper = document.querySelector('.slider-wrapper');
        this.thumbnailWrapper = document.querySelector('.thumbnail-wrapper');
        this.prevBtn = document.querySelector('.prev-btn');
        this.nextBtn = document.querySelector('.next-btn');
        this.playPauseBtn = document.querySelector('.play-pause-btn');
        
        this.init();
    }
    
    init() {
        this.createSlides();
        this.createThumbnails();
        this.bindEvents();
        this.startAutoPlay();
        this.updateSlide(0);
    }
    
    createSlides() {
        this.sliderWrapper.innerHTML = '';
        images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.setAttribute('data-index', index);
            slide.innerHTML = `
                <img src="${image.src}" alt="${image.title}" class="slide-image">
                <div class="slide-content">
                    <h3 class="slide-title">${image.title}</h3>
                    <p class="slide-description">${image.description}</p>
                    <div class="slide-category">${image.category}</div>
                </div>
            `;
            this.sliderWrapper.appendChild(slide);
        });
    }
    
    createThumbnails() {
        this.thumbnailWrapper.innerHTML = '';
        images.forEach((image, index) => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'thumbnail';
            thumbnail.setAttribute('data-index', index);
            thumbnail.innerHTML = `<img src="${image.src}" alt="${image.title}">`;
            thumbnail.addEventListener('click', () => this.goToSlide(index));
            this.thumbnailWrapper.appendChild(thumbnail);
        });
    }
    
    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.previousSlide();
            if (e.key === 'ArrowRight') this.nextSlide();
            if (e.key === ' ') {
                e.preventDefault();
                this.togglePlayPause();
            }
        });
        
        // Touch/swipe support for mobile
        let startX = 0;
        let endX = 0;
        
        this.sliderWrapper.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.sliderWrapper.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            this.handleSwipe();
        });
        
        this.handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.previousSlide();
                }
            }
        };
    }
    
    updateSlide(index) {
        // Update slides
        const slides = document.querySelectorAll('.slide');
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
        
        // Update thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(thumb => thumb.classList.remove('active'));
        thumbnails[index].classList.add('active');
        
        this.currentIndex = index;
    }
    
    nextSlide() {
        const nextIndex = (this.currentIndex + 1) % images.length;
        this.updateSlide(nextIndex);
        this.resetAutoPlay();
    }
    
    previousSlide() {
        const prevIndex = this.currentIndex === 0 ? images.length - 1 : this.currentIndex - 1;
        this.updateSlide(prevIndex);
        this.resetAutoPlay();
    }
    
    goToSlide(index) {
        this.updateSlide(index);
        this.resetAutoPlay();
    }
    
    startAutoPlay() {
        if (this.interval) clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.nextSlide();
        }, this.intervalTime);
    }
    
    stopAutoPlay() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    
    resetAutoPlay() {
        if (this.isPlaying) {
            this.stopAutoPlay();
            this.startAutoPlay();
        }
    }
    
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        const icon = this.playPauseBtn.querySelector('i');
        
        if (this.isPlaying) {
            icon.className = 'fas fa-pause';
            this.playPauseBtn.setAttribute('aria-label', 'Pause Slideshow');
            this.startAutoPlay();
        } else {
            icon.className = 'fas fa-play';
            this.playPauseBtn.setAttribute('aria-label', 'Play Slideshow');
            this.stopAutoPlay();
        }
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ImageSlider();
});

// Keep modal functionality for compatibility
const previewBox = document.querySelector('.preview-box');
const shadow = document.querySelector('.shadow');

if (previewBox && shadow) {
    const closeIcon = previewBox.querySelector('.icon');
    closeIcon.onclick = () => {
        previewBox.classList.remove('show');
        shadow.style.display = 'none';
        document.body.style.overflow = '';
    };
    shadow.onclick = () => {
        previewBox.classList.remove('show');
        shadow.style.display = 'none';
        document.body.style.overflow = '';
    };
}