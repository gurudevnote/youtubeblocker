const chanelBlockeds = [
    'Kids Diana Show'
];

const videoBlockeds = [
    'diana'
];

function domChangedHandle() {
    let video = document.querySelector('h1[class *="metadata"]');
    let videoTitle = video ? video.textContent : '';
    let chanel = document.querySelector('#owner-and-teaser [class *="channel"]');
    let chanelName = chanel ? chanel.textContent : '';

    if (
        videoTitle !== ''
        && !videoTitle.match(/blender/i)
        && window.location.href !== 'https://www.youtube.com/results?search_query=blender'
    ) {
        let hour = new Date().getHours();
        if (hour !== 10) {
            window.location.href = 'https://www.youtube.com/results?search_query=blender';
            observer.disconnect();
        }
    }

    chanelBlockeds.forEach((chanel) => {
        if (chanelName.toLowerCase().indexOf(chanel.toLowerCase()) >= 0) {
            window.location.href = 'https://www.youtube.com/';
            observer.disconnect();
        }
    });

    videoBlockeds.forEach((video) => {
        if (videoTitle.toLowerCase().indexOf(video.toLowerCase()) >= 0) {
            window.location.href = 'https://www.youtube.com/';
            observer.disconnect();
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
}


const observer = new MutationObserver(domChangedHandle)
const targetNode = document.body;
const config = { attributes: true, childList: true, subtree: true };

setTimeout(() => observer.observe(targetNode, config), 3000);