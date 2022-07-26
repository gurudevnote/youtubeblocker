const chanelBlockeds = [
    'Kids Diana Show'
];

const videoBlockeds = [
    'diana'
];

function domChangedHandle() {
    return () => {
        let videoTitle = document.querySelector('h1[class *="metadata"]').textContent;
        let chanelName = document.querySelector('#owner-and-teaser [class *="channel"]').textContent;

        if (!videoTitle.match(/blender/i)) {
            let hour = new Date().getHours();
            if (hour !== 10) {
                window.location.href = 'https://www.youtube.com/';
            }
        }

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

        //Youtube search list
        let videos = document.querySelectorAll('#contents ytd-video-renderer, #contents ytd-channel-renderer');
        videos.forEach((video) => {
            let textContext = video.textContent;
            videoBlockeds.forEach((blockedVideo) => {
                if (textContext.toLowerCase().indexOf(blockedVideo.toLowerCase()) >= 0) {
                    video.remove();
                }
            });
        });
    };
}

setInterval(domChangedHandle(), 1000);