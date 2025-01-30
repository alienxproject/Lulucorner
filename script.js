document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '27810clgul3b61qaodw89';
    const apiUrl = `https://lulustream.com/api/file/list?key=${apiKey}`;

    const videoGrid = document.getElementById('video-grid');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.files && data.files.length > 0) {
                data.files.forEach(video => {
                    const videoItem = document.createElement('div');
                    videoItem.classList.add('video-item');

                    const thumbnail = document.createElement('img');
                    thumbnail.src = video.thumbnail;
                    thumbnail.alt = video.title;

                    const title = document.createElement('h3');
                    title.textContent = video.title;

                    videoItem.appendChild(thumbnail);
                    videoItem.appendChild(title);

                    videoItem.addEventListener('click', () => {
                        window.location.href = `watch.html?videoId=${video.id}`;
                    });

                    videoGrid.appendChild(videoItem);
                });
            } else {
                videoGrid.innerHTML = '<p>No videos found.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching video data:', error);
            videoGrid.innerHTML = '<p>Error loading videos.</p>';
        });
});
