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
        title: 'Provincial U19 Champion',
        description: 'Proud moment as our player claims the provincial championship title.',
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
        title: 'Runners-up Award',
        description: 'Celebrating excellence and outstanding performance in table tennis.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new15.jpg',
        title: 'Provincial U13 Champion',
        description: 'Perfecting technique through systematic and focused training drills.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/IMG_1600.jpg',
        title: 'Extra Mural Activities',
        description: 'Welcoming new members and showcasing our world-class facilities.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2m.jpg',
        title: 'School League Match',
        description: 'Early morning sessions building discipline and improving skills.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/extra%20m1.jpg',
        title: 'Finals School League',
        description: 'Going beyond the basics with advanced training techniques.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/wa8.jpg',
        title: 'Winners Provincial Tournament',
        description: 'Creating an inclusive environment for all table tennis enthusiasts.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/welcome.jpg',
        title: 'Provincial Champion',
        description: 'Product of SpinMasterz Academy.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new6.jpg',
        title: 'Under 13 Provincial Team',
        description: 'Elite training programs designed for competitive excellence.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/2b.png',
        title: 'Under 13 Champion',
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
        title: 'Under 15s Provincial Team',
        description: 'Connecting with the community and promoting table tennis.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/21.jpg',
        title: 'Gold Metal  SA Games',
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
        title: 'Under 15s Provincial Team',
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
        title: 'South Africa Games',
        description: 'Our experienced coach demonstrating expert techniques.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/new8.jpg',
        title: 'South Africa Games',
        description: 'Nurturing young talent with age-appropriate training programs.',
        category: 'Training'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/30.jpg',
        title: 'Winner 19 Provincials',
        description: 'Proud moment as we celebrate a big achievement.',
        category: 'Tournaments'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/FB_IMG_1664903679928.jpg',
        title: 'Under 19s Provincial Team',
        description: 'Enjoying the lighter side of table tennis with fun activities.',
        category: 'Events'
    },
    {
        src: 'https://raw.githubusercontent.com/spinmazter/AcademyKuda/main/img/70.jpg',
        title: 'South Africa games',
        description: 'Showing exceptional skill during matches.',
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
        title: 'South Africa Games',
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
        title: 'Gauteng North Closed Tournament',
        description: 'Mastering advanced techniques with expert coaching guidance.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Coaching1.jpg?raw=true',
        title: 'Gold Medal 15s Provincial',
        description: 'Coaching session in action at SpinMasterzTT Academy.',
        category: 'Tournaments'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Ima7.jpg?raw=true',
        title: 'Runners-Up 19',
        description: 'Training and development at SpinMasterzTT Academy.',
        category: 'Tournaments'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Derek3.jpg?raw=true',
        title: 'Derek',
        description: 'Focused training session with Derek.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Ima4.jpg?raw=true',
        title: 'Runners-Up U19s Provincials',
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
        title: 'Vedansh',
        description: 'Bronze medal U15s Provincials.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Saz.jpg?raw=true',
        title: 'Sazi',
        description: 'Winning mentality.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Ima5.jpg?raw=true',
        title: 'Winner',
        description: 'Training at SpinMasterzTT Academy.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Derek2.jpg?raw=true',
        title: 'Derek',
        description: 'Derek in a competitive match.',
        category: 'Tournaments'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Shane3.jpg?raw=true',
        title: 'Shane',
        description: 'Shane demonstrating advanced skills.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Aditi2.jpg?raw=true',
        title: '1st Place',
        description: 'Aditi U15s Provincial Champion.',
        category: 'Tournaments'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Vedansh3.jpg?raw=true',
        title: 'Vedansh',
        description: 'Vedansh 3rd place finish.',
        category: 'Training'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/10.jpg?raw=true',
        title: 'South Africa Games',
        description: 'Memorable moment at SpinMasterzTT Academy.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/11.jpg?raw=true',
        title: 'Derek',
        description: 'Another great day for the academy.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/Aditi3.jpg?raw=true',
        title: 'Aditi',
        description: 'Awards Ceremony.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/FB_IMG_1664903786722.jpg?raw=true',
        title: 'Under 13 Team',
        description: 'South Africa Games.',
        category: 'Events'
    },
    {
        src: 'https://github.com/spinmazter/AcademyKuda/blob/df29da56ccab111c7e283509464f14b9c7296067/img/FB_IMG_1665475425602.jpg?raw=true',
        title: 'Nicke',
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
        title: 'Aditi',
        description: 'Aditi on her way to winning the event.',
        category: 'Tournaments'
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_20240706_112705_1.jpg?raw=true",
        title: "Sazi putting in the work",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa4.jpg?raw=true",
        title: "Aditi winner U13s",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa25.jpg?raw=true",
        title: "Winner",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/derick%20Me.jpg?raw=true",
        title: "derick Me",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa19.jpg?raw=true",
        title: "Under 15 Champion",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa14.jpg?raw=true",
        title: "Champion",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new14.jpg?raw=true",
        title: "Shane",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa21.jpg?raw=true",
        title: "Aditi",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/Ima7.jpg?raw=true",
        title: "Imaan",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/kudaAction.jpg?raw=true",
        title: "kudaAction",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa24.jpg?raw=true",
        title: "Silver Medal Provincials",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_2381.jpg?raw=true",
        title: "Madelize",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_20240706_112706.jpg?raw=true",
        title: "Sazi",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new2.jpg?raw=true",
        title: "Silver Medal Team Events",
        description: "Captured moment at South Africa Games.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/matches.jpg?raw=true",
        title: "matches",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new3.jpg?raw=true",
        title: "Mixed Doubles",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/Ima9.jpg?raw=true",
        title: "Imaan",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/Ima1.jpg?raw=true",
        title: "Winner",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_2421.jpg?raw=true",
        title: "Liam",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_20240706_112707.jpg?raw=true",
        title: "Sazi",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa7.jpg?raw=true",
        title: "Victory",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Events"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa2.jpg?raw=true",
        title: "Shane",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new8.jpg?raw=true",
        title: "Kelly",
        description: "Captured moment at South Africa Games.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new15.jpg?raw=true",
        title: "new15",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_2812.jpg?raw=true",
        title: "Umpire Duties",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/Ima6.jpg?raw=true",
        title: "Imaan",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_20240706_112708.jpg?raw=true",
        title: "Loop Training",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/IMG_3252.jpg?raw=true",
        title: "Cape Town",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/Ima.jpg?raw=true",
        title: "Imaan",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/Me%20Vic.jpg?raw=true",
        title: "Zim National Team",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new4.jpg?raw=true",
        title: "new4",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/coachK.jpg?raw=true",
        title: "coachK",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/coaches%202.jpg?raw=true",
        title: "Level One Coaching",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new10.jpg?raw=true",
        title: "new10",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa5.jpg?raw=true",
        title: "Glory",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/sazi.jpg?raw=true",
        title: "sazi",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Training"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/wa16.jpg?raw=true",
        title: "winner",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
    },
    {
        src: "https://github.com/spinmazter/AcademyKuda/blob/407633661d47cd885ebc25e9f1ba972134dc5e95/img/new7.jpg?raw=true",
        title: "South Africa Games",
        description: "Captured moment at SpinMasterzTT Academy.",
        category: "Tournaments"
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