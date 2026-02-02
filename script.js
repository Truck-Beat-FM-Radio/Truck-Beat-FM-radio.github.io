function sendRequest() {
    const webhookURL = "https://discord.com/api/webhooks/1467974708107415736/pe3cquvh_Lj2X2BDWYfAOmK_p8Qxq41IWiOxJo6xy96ObFgS984tDCjlNdm7Ghnm-5nj";

    const name = document.getElementById('firstName').value;
    const shout = document.getElementById('shoutOut').value;
    const song = document.getElementById('songName').value;

    const message = {
        content: "📻 New Request for Truck Beat FM\nFrom: " + name + "\nShout out: " + shout + "\nSong: " + song
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    })
    .then(() => {
        alert("Request submitted to the DJ!");
        document.getElementById('firstName').value = "";
        document.getElementById('shoutOut').value = "";
        document.getElementById('songName').value = "";
    })
    .catch(err => alert("Error sending request."));
}

// Radio Player Logic
const audio = document.getElementById("radio-stream");
const playBtn = document.querySelector(".play-button");

let isPlaying = false;

if(playBtn) {
    playBtn.addEventListener("click", () => {
        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            playBtn.classList.add("pause");
        } else {
            audio.pause();
            isPlaying = false;
            playBtn.classList.remove("pause");
        }
    });
}

document.getElementById("requestsForm").addEventListener("submit", function (e){
    e.preventDefault();
    sendRequest();
})

const volumeSlider = document.getElementById("volume-slider");
if (volumeSlider && audio){
    audio.volume = volumeSlider.value

}
volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});