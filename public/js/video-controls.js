// video controller 
const videos = document.querySelectorAll('.video-element')

videos.forEach(
    video => {
        const overlay = video.nextElementSibling
        const playButton = overlay.querySelector('.play-button')
        const pauseButton = overlay.querySelector('.pause-button')
        const fullScreenButton = overlay.querySelector('.fullscreen-button')

        // show overlay
        video.parentElement.addEventListener('mouseenter', () => {
            overlay.classList.remove("invisible")
            overlay.classList.add("visible")
        })
        // hide overlay
        video.parentElement.addEventListener('mouseleave', () => {
            overlay.classList.remove("visible")
            overlay.classList.add("invisible") 
        })

        // play video and turn full screen
        playButton.addEventListener('click', () => {
            video.play()
            video.requestFullscreen()
        })

        // Function to check if the video is in fullscreen mode
        function isVideoInFullscreen() {
            return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        }

        // Event listener for fullscreen change
        document.addEventListener('fullscreenchange', handleFullscreenChange)
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange)
        document.addEventListener('mozfullscreenchange', handleFullscreenChange)
        document.addEventListener('MSFullscreenChange', handleFullscreenChange)

        // Function to handle fullscreen change
        function handleFullscreenChange() {
            if (!isVideoInFullscreen()) {
            // Pause the video if not in fullscreen
            video.pause();
            }
        }
    }
)

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
    }
}

if( isMobile.any() ) {
    alert('Mobile')
} else {
    alert('Not Mobile')
}