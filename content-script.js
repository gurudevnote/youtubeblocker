const chanelBlockeds = [
    'Kids Diana Show'
];

const videoBlockeds = [
    'diana'
];

setInterval(() => {
    let videoTitle = document.querySelector('h1[class *="metadata"]').textContent;
    let chanelName = document.querySelector('#owner-and-teaser [class *="channel"]').textContent;

    chanelBlockeds.forEach((chanel) => {
        if (chanelName.toLowerCase().indexOf(chanel.toLowerCase()) >= 0) {
            window.location.href = 'https://www.youtube.com/';
        }
    });

    videoBlockeds.forEach((video) => {
        if (videoTitle.toLowerCase().indexOf(video.toLowerCase()) >= 0) {
            window.location.href = 'https://www.youtube.com/';
        }
    });
}, 2000);