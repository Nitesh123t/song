document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");

    const songs = [
        "C:/Users/hp/Desktop/SongBrowser/song.mp3"
        
    ];

    let currentSongIndex = 0;

    function playCurrentSong() {
        if (currentSongIndex < songs.length) {
            audioSource.src = songs[currentSongIndex];
            audioPlayer.load();
            audioPlayer.play();
        }
    }

    audioPlayer.addEventListener("ended", function() {
        currentSongIndex++;
        playCurrentSong();
    });

    playCurrentSong();
});

