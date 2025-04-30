const videosList = [
    {
        video: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/videos/VID_20240406_100542.mp4',
        title: 'Imaan High Performance',
        description: 'Pushing limits through precision and power',
        thumbnail: 'path/to/imaan_high_performance_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/2.mp4',
        title: 'Derick Endurance Training',
        description: 'Building stamina and mental resilience',
        thumbnail: 'path/to/derick_endurance_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/3.mp4',
        title: 'Madelize Imaan Machine',
        description: 'Advanced technique and precision training',
        thumbnail: 'path/to/madelize_imaan_machine_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/4.mp4',
        title: 'Aditi Machine Training',
        description: 'Developing consistency and technical skills',
        thumbnail: 'path/to/aditi_machine_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/5.mp4',
        title: 'Sazi Machine Technique',
        description: 'Mastering advanced table tennis skills',
        thumbnail: 'path/to/sazi_machine_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/6.mp4',
        title: 'Imaan Franco Technique',
        description: 'Exploring advanced Franco-style techniques',
        thumbnail: 'path/to/imaan_franco_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/2.mp4',
        title: 'Derick Footwork Mastery',
        description: 'Perfecting footwork and movement patterns',
        thumbnail: 'path/to/derick_footwork_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/11.mp4',
        title: 'Aditi Footwork Precision',
        description: 'Developing agile and strategic footwork',
        thumbnail: 'path/to/aditi_footwork_thumbnail.jpg'
    },
    {
        video: 'https://github.com/spinmazter/AcademyKuda/raw/main/videos/10.mp4',
        title: 'Madelize Franco Style',
        description: 'Exploring unique Franco-inspired techniques',
        thumbnail: 'path/to/madelize_franco_thumbnail.jpg'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('mainVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDescription = document.getElementById('videoDescription');
    const videoThumbnails = document.getElementById('videosList');

    const createVideoThumbnails = () => {
        videoThumbnails.innerHTML = videosList.map((video, index) => `
            <div class="video-list-item ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="overlay">${video.title}</div>
            </div>
        `).join('');
    };

    const updateMainVideo = (index) => {
        const selectedVideo = videosList[index];
        
        mainVideo.querySelector('source').src = selectedVideo.video;
        mainVideo.load();
        mainVideo.play();

        videoTitle.textContent = selectedVideo.title;
        videoDescription.textContent = selectedVideo.description;

        document.querySelectorAll('.video-list-item').forEach(item => item.classList.remove('active'));
        document.querySelector(`.video-list-item[data-index="${index}"]`).classList.add('active');
    };

    createVideoThumbnails();
    updateMainVideo(0);

    videoThumbnails.addEventListener('click', (e) => {
        const thumbnail = e.target.closest('.video-list-item');
        if (thumbnail) {
            const index = parseInt(thumbnail.dataset.index, 10);
            updateMainVideo(index);
        }
    });

    mainVideo.addEventListener('error', (e) => {
        console.error('Video loading error:', e);
        videoTitle.textContent = 'Error Loading Video';
        videoDescription.textContent = 'Please try again later';
    });
});
