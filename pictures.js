// Gallery images data (from pictures.html)
const images = [
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new12.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new10.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/1.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert1.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert2.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert3.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert4.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/cert5.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new15.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_1600.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2m.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/extra%20m1.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/wa8.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/welcome.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new6.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2b.png',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/27.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/29.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/20.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/21.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/3a.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_2342.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/44.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/sazi.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new8.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/30.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/FB_IMG_1664903679928.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/70.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/67.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/18.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/26.jpg',
    'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/storm.jpg'
];

// Dynamically create gallery items
const galleryContainer = document.getElementById('gallery');
if (galleryContainer) {
    images.forEach((src, idx) => {
        const imageDiv = document.createElement('div');
        imageDiv.className = 'image';
        imageDiv.innerHTML = `<span><img src="${src}" alt="Gallery Image ${idx+1}" loading="lazy"></span>`;
        galleryContainer.appendChild(imageDiv);
    });
}

// Modal logic
const gallery = document.querySelectorAll('.gallery .image');
const previewBox = document.querySelector('.preview-box');
const previewImg = previewBox.querySelector('img');
const closeIcon = previewBox.querySelector('.icon');
const currentImg = previewBox.querySelector('.current-img');
const totalImg = previewBox.querySelector('.total-img');
const shadow = document.querySelector('.shadow');
const prevBtn = document.querySelector('.slide.prev');
const nextBtn = document.querySelector('.slide.next');

let newIndex = 0;
let clickedImgIndex = 0;

totalImg.textContent = gallery.length;

gallery.forEach((imgDiv, i) => {
    imgDiv.onclick = () => {
        newIndex = i;
        clickedImgIndex = i;
        updatePreview();
        showModal();
    };
});

function updatePreview() {
    currentImg.textContent = newIndex + 1;
    const imgTag = gallery[newIndex].querySelector('img');
    previewImg.src = imgTag.src;
    prevBtn.style.display = newIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = newIndex === gallery.length - 1 ? 'none' : 'block';
}

function showModal() {
    previewBox.classList.add('show');
    shadow.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    previewBox.classList.remove('show');
    shadow.style.display = 'none';
    document.body.style.overflow = '';
}

prevBtn.onclick = () => {
    if (newIndex > 0) {
        newIndex--;
        updatePreview();
    }
};
nextBtn.onclick = () => {
    if (newIndex < gallery.length - 1) {
        newIndex++;
        updatePreview();
    }
};
closeIcon.onclick = hideModal;
shadow.onclick = hideModal;

document.addEventListener('keydown', function(e) {
    if (!previewBox.classList.contains('show')) return;
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.key === 'Escape') hideModal();
}); 