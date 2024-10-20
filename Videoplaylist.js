const videosList = [
{
	video: './videos/VID_20240406_100542.mp4',
	title: 'Imaan High Performance'
},
{
	video: './videos/2.mp4',
	title: 'Derick Endurance Training'
},
{
	video: './videos/3.mp4',
	title: 'Madelize Imaan Machine'
},
{
	video: './videos/4.mp4',
	title: 'Aditi Machine'
},
{
	video: './videos/5.mp4',
	title: 'Sazi Machine'
},
{
	video: './videos/6.mp4',
	title: 'Imaan Franco'
},
{
	video: './videos/2.mp4',
	title: 'Derick Footwork'
},
{
	video: './videos/11.mp4',
	title: 'Aditi Footwork'
},
{
	video: './videos/10.mp4',
	title: 'Madelize Franco'
},
]

const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});