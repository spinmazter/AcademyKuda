// Video Gallery JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Video Data
    const videos = [
        {
            id: 1,
            title: 'Imaan High Performance',
            description: 'Pushing limits through precision and power',
            thumbnail: 'https://cdn.pixabay.com/photo/2020/05/26/07/43/table-tennis-5221728_1280.jpg',
            videoUrl: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/videos/VID_20240406_100542.mp4',
            category: 'training',
            duration: '3:45'
        },
        {
            id: 2,
            title: 'Derick Endurance Training',
            description: 'Building stamina and mental resilience',
            thumbnail: 'https://cdn.pixabay.com/photo/2016/06/02/02/33/ping-pong-1430587_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/2.mp4',
            category: 'training',
            duration: '4:20'
        },
        {
            id: 3,
            title: 'Madelize Imaan Machine',
            description: 'Advanced technique and precision training',
            thumbnail: 'https://cdn.pixabay.com/photo/2019/09/03/08/38/table-tennis-4448978_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/3.mp4',
            category: 'technique',
            duration: '5:15'
        },
        {
            id: 4,
            title: 'Aditi Machine Training',
            description: 'Developing consistency and technical skills',
            thumbnail: 'https://cdn.pixabay.com/photo/2017/08/07/01/41/table-tennis-2598219_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/4.mp4',
            category: 'training',
            duration: '3:30'
        },
        {
            id: 5,
            title: 'Sazi Machine Technique',
            description: 'Mastering advanced table tennis skills',
            thumbnail: 'https://cdn.pixabay.com/photo/2019/05/08/21/21/table-tennis-4189931_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/5.mp4',
            category: 'technique',
            duration: '4:10'
        },
        {
            id: 6,
            title: 'Imaan Franco Technique',
            description: 'Exploring advanced Franco-style techniques',
            thumbnail: 'https://cdn.pixabay.com/photo/2020/01/21/19/45/table-tennis-4783565_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/6.mp4',
            category: 'technique',
            duration: '3:55'
        },
        {
            id: 7,
            title: 'Derick Footwork Mastery',
            description: 'Perfecting footwork and movement patterns',
            thumbnail: 'https://cdn.pixabay.com/photo/2016/05/16/21/07/table-tennis-1396648_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/2.mp4',
            category: 'tournament',
            duration: '4:45'
        },
        {
            id: 8,
            title: 'Aditi Footwork Precision',
            description: 'Developing agile and strategic footwork',
            thumbnail: 'https://cdn.pixabay.com/photo/2017/09/03/01/12/table-tennis-2708416_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/11.mp4',
            category: 'tournament',
            duration: '3:25'
        },
        {
            id: 9,
            title: 'Madelize Franco Style',
            description: 'Exploring unique Franco-inspired techniques',
            thumbnail: 'https://cdn.pixabay.com/photo/2018/07/22/08/47/tennis-3554019_1280.jpg',
            videoUrl: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/10.mp4',
            category: 'technique',
            duration: '4:30'
        }
    ];

    const mainVideo = document.getElementById('mainVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const videosList = document.getElementById('videosList');
    const videoSearch = document.getElementById('videoSearch');
    let filteredVideos = [...videos];

    // Function to create video thumbnails
    function createVideoThumbnails(videosToShow = videos) {
        videosList.innerHTML = '';
        videosToShow.forEach(video => {
            const thumbnail = document.createElement('div');
            thumbnail.className = 'video-thumbnail';
            thumbnail.innerHTML = `
                <div class="thumbnail-wrapper">
                    <img src="${video.thumbnail}" alt="${video.title}" class="thumbnail-img">
                    <div class="thumbnail-overlay">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="thumbnail-info">
                    <h3>${video.title}</h3>
                    <p>${video.description}</p>
                    <div class="video-meta">
                        <span class="video-category"><i class="fas fa-tag"></i> ${video.category}</span>
                        <span class="video-duration"><i class="fas fa-clock"></i> ${video.duration}</span>
                    </div>
                </div>
            `;

            // Add click event to change main video
            thumbnail.addEventListener('click', () => {
                updateMainVideo(video);
                // Add smooth scroll to main video
                document.querySelector('.featured-video-section').scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            });

            videosList.appendChild(thumbnail);
        });
    }

    // Function to update main video
    function updateMainVideo(video) {
        // Add fade-out effect
        mainVideo.style.opacity = '0';
        videoTitle.style.opacity = '0';
        videoDescription.style.opacity = '0';

        setTimeout(() => {
            mainVideo.src = video.videoUrl;
            mainVideo.load(); // Important for video loading
            videoTitle.textContent = video.title;
            videoDescription.textContent = video.description;
            
            // Update video metadata
            const categoryElement = document.querySelector('.video-meta .video-category');
            const durationElement = document.querySelector('.video-meta .video-duration');
            
            if (categoryElement) {
                categoryElement.innerHTML = `<i class="fas fa-tag"></i> ${video.category}`;
            }
            if (durationElement) {
                durationElement.innerHTML = `<i class="fas fa-clock"></i> ${video.duration}`;
            }

            // Add fade-in effect
            mainVideo.style.opacity = '1';
            videoTitle.style.opacity = '1';
            videoDescription.style.opacity = '1';

            // Reset play button
            const playButton = document.querySelector('.play-button');
            if (playButton) {
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        }, 300);
    }

    // Initialize video gallery
    createVideoThumbnails();

    // Add transition effects
    mainVideo.style.transition = 'opacity 0.3s ease';
    videoTitle.style.transition = 'opacity 0.3s ease';
    videoDescription.style.transition = 'opacity 0.3s ease';

    // Add category filtering functionality
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.dataset.category;
            
            // Remove active class from all cards
            categoryCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            this.classList.add('active');

            // Add filter animation
            videosList.style.opacity = '0';
            
            setTimeout(() => {
                if (category === 'all') {
                    filteredVideos = [...videos];
                } else {
                    filteredVideos = videos.filter(video => video.category === category);
                }
                createVideoThumbnails(filteredVideos);
                videosList.style.opacity = '1';
            }, 300);
        });
    });

    // Add search functionality with debounce
    let searchTimeout;
    videoSearch.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        
        searchTimeout = setTimeout(() => {
            const searchTerm = e.target.value.toLowerCase();
            videosList.style.opacity = '0';
            
            setTimeout(() => {
                filteredVideos = videos.filter(video => 
                    video.title.toLowerCase().includes(searchTerm) ||
                    video.description.toLowerCase().includes(searchTerm)
                );
                createVideoThumbnails(filteredVideos);
                videosList.style.opacity = '1';
            }, 300);
        }, 300); // Debounce delay
    });

    // Add play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', () => {
            if (mainVideo.paused) {
                mainVideo.play();
                playButton.innerHTML = '<i class="fas fa-pause"></i>';
            } else {
                mainVideo.pause();
                playButton.innerHTML = '<i class="fas fa-play"></i>';
            }
        });
    }

    // Update play button icon based on video state
    mainVideo.addEventListener('play', () => {
        const playButton = document.querySelector('.play-button');
        if (playButton) {
            playButton.innerHTML = '<i class="fas fa-pause"></i>';
        }
    });

    mainVideo.addEventListener('pause', () => {
        const playButton = document.querySelector('.play-button');
        if (playButton) {
            playButton.innerHTML = '<i class="fas fa-play"></i>';
        }
    });

    // Handle video errors
    mainVideo.addEventListener('error', () => {
        console.error('Video loading error');
        videoTitle.textContent = 'Error Loading Video';
        videoDescription.textContent = 'Please try again later';
    });
});
