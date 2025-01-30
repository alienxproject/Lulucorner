document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('videoId');

    const videoPlayer = document.getElementById('video-player');

    if (videoId) {
        const videoElement = document.createElement('video');
        videoElement.src = `https://lulustream.com/api/file/stream?key=27810clgul3b61qaodw89&id=${videoId}`;
        videoElement.controls = true;
        videoElement.autoplay = true;
        videoElement.style.width = '100%';

        videoPlayer.appendChild(videoElement);
    } else {
        videoPlayer.innerHTML = '<p>Video not found.</p>';
    }
});
