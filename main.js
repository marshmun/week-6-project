const userInfo = "?client_id=8538a1744a7fdaa59981232897501e04";
const clientUse = "https://api.soundcloud.com/users/";
var userDesire = "";
var searchBtn = document.querySelector('#searchBtn');
var searchInput = document.querySelector("#searchInput");
var musicPlayer = document.querySelector(".music-player");



// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
searchBtn.addEventListener("click", function (e) {
    userDesire = searchInput.value;
    music()
    searchInput = "";
});
searchInput.addEventListener("keypress", function (e) {
    if (e.which == 13) {
        event.preventDefault();
        userDesire = searchInput.value;
    }
    music()
});


function music() {

    fetch(clientUse + userDesire + userInfo)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var user = data;
            console.log(user);

            fetch(clientUse + user.id + "/tracks" + userInfo)
                .then((res) => {
                    return res.json();
                }).then((tracks) => {
                    console.log(tracks);
                    tracks.forEach((t) => {
                        thisStuf(t);
                    })
                })
        });
}


function thisStuf(data) {

    function createProfileWrapper() {
        var profileEverything = document.createElement('div');
        profileEverything.classList.add("content");


        profileEverything.addEventListener("click", function (e) {
            musicPlayer.src = data.stream_url + userInfo;
        })



        var customImg = document.createElement("img");
        customImg.classList.add("pic");
        customImg.src = data.artwork_url;
        profileEverything.appendChild(customImg);

        var songName = document.createElement("p");
        songName.classList.add("title");
        songName.textContent = data.title;
        profileEverything.appendChild(songName);

        var customAd1 = document.createElement("p");
        customAd1.classList.add("name");
        customAd1.textContent = data.user.username;
        profileEverything.appendChild(customAd1);

        document.querySelector(".results").appendChild(profileEverything);

    }
    createProfileWrapper();
}