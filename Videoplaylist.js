// Video data with URLs and descriptions
const videosList = [
    {
        video: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/videos/VID_20240406_100542.mp4',
        title: 'Imaan High Performance',
        description: 'Pushing limits through precision and power',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/2.mp4',
        title: 'Derick Endurance Training',
        description: 'Building stamina and mental resilience',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/3.mp4',
        title: 'Madelize Imaan Machine',
        description: 'Advanced technique and precision training',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/4.mp4',
        title: 'Aditi Machine Training',
        description: 'Developing consistency and technical skills',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/5.mp4',
        title: 'Sazi Machine Technique',
        description: 'Mastering advanced table tennis skills',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/6.mp4',
        title: 'Imaan Franco Technique',
        description: 'Exploring advanced Franco-style techniques',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/2.mp4',
        title: 'Derick Footwork Mastery',
        description: 'Perfecting footwork and movement patterns',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/11.mp4',
        title: 'Aditi Footwork Precision',
        description: 'Developing agile and strategic footwork',
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/10.mp4',
        title: 'Madelize Franco Style',
        description: 'Exploring unique Franco-inspired techniques',
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('mainVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const videoThumbnails = document.getElementById('videosList');

    // Helper function to generate color based on video title
    const generateColorFromTitle = (title) => {
        let hash = 0;
        for (let i = 0; i < title.length; i++) {
            hash = title.charCodeAt(i) + ((hash << 5) - hash);
        }
        const hue = Math.abs(hash % 360);
        return `hsl(${hue}, 70%, 35%)`;
    };

    // Create video thumbnails with dynamic backgrounds and table tennis icons
    const createVideoThumbnails = () => {
        videoThumbnails.innerHTML = videosList.map((video, index) => {
            const backgroundColor = generateColorFromTitle(video.title);
            
            return `
                <div class="video-list-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <div class="thumbnail" style="background-color: ${backgroundColor};">
                        <i class="ri-ping-pong-line play-icon"></i>
                    </div>
                    <div class="overlay">${video.title}</div>
                </div>
            `;
        }).join('');
    };

    // Update the main video player with selected video
    const updateMainVideo = (index) => {
        const selectedVideo = videosList[index];
        
        // Show loading state
        mainVideo.style.display = 'none';
        videoTitle.textContent = 'Loading...';
        videoDescription.textContent = 'Please wait while the video loads';
        
        // Remove any existing error messages
        const errorMessage = mainVideo.parentElement.querySelector('.video-error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        
        mainVideo.querySelector('source').src = selectedVideo.video;
        mainVideo.load();
        
        // When video can play, restore display and play
        mainVideo.oncanplay = () => {
            mainVideo.style.display = 'block';
            videoTitle.textContent = selectedVideo.title;
            videoDescription.textContent = selectedVideo.description;
            mainVideo.play();
        };

        // Update active thumbnail
        document.querySelectorAll('.video-list-item').forEach(item => item.classList.remove('active'));
        document.querySelector(`.video-list-item[data-index="${index}"]`).classList.add('active');
    };

    // Initialize the video gallery
    createVideoThumbnails();
    updateMainVideo(0);

    // Event listener for thumbnail clicks
    videoThumbnails.addEventListener('click', (e) => {
        const thumbnail = e.target.closest('.video-list-item');
        if (thumbnail) {
            const index = parseInt(thumbnail.dataset.index, 10);
            updateMainVideo(index);
        }
    });

    // Handle video loading errors
    mainVideo.addEventListener('error', (e) => {
        console.error('Video loading error:', e);
        videoTitle.textContent = 'Error Loading Video';
        videoDescription.textContent = 'Please try again later or check the video URL';
        
        // Display error message in video player
        const videoContainer = mainVideo.parentElement;
        
        // Remove any existing error messages first
        const existingError = videoContainer.querySelector('.video-error-message');
        if (existingError) {
            existingError.remove();
        }
        
        const errorMessage = document.createElement('div');
        errorMessage.className = 'video-error-message';
        errorMessage.innerHTML = `
            <i class="ri-error-warning-line"></i>
            <p>Video unavailable</p>
        `;
        videoContainer.appendChild(errorMessage);
    });
});