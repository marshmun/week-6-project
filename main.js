const userInfo = "?client_id=8538a1744a7fdaa59981232897501e04";
const clientUse = "https://api.soundcloud.com/users/";
var userDesire = "";
var searchBtn = document.querySelector('#searchBtn');
var searchInput = document.querySelector("#searchInput");
var musicPlayer = document.querySelector(".music-player");
var nothingness = document.querySelector(".results")



searchBtn.addEventListener("click", function (e) {
    userDesire = searchInput.value;
    music()
    searchInput = "";
});
searchInput.addEventListener("keypress", function (e) {
    if (e.which == 13) {
        event.preventDefault();
        userDesire = searchInput.value;
        music()
    }
});


function music() {

    fetch(clientUse + userDesire + userInfo)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var user = data;

            fetch(clientUse + user.id + "/tracks" + userInfo)
                .then((res) => {
                    nothingness.innerHTML = "";
                    return res.json();
                }).then((tracks) => {
                    if (tracks.length > 1) {
                        tracks.forEach((t) => {
                            thisStuf(t);
                        })
                    } else {
                        var destruction = document.createElement('p')
                        destruction.classList.add("nothing")
                        destruction.textContent = "No Results Please Try Again";
                        nothingness.appendChild(destruction);
                    }
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
        var songName = document.createElement("p");
        var customAd1 = document.createElement("p");

        customImg.classList.add("pic");
        if (data.artwork_url) {
            customImg.src = data.artwork_url;
        }
        else {
            customImg.src = "http://www.51allout.co.uk/wp-content/uploads/2012/02/Image-not-found.gif"
        }

        songName.classList.add("title");
        songName.textContent = data.title;
        customAd1.classList.add("name");
        customAd1.textContent = data.user.username;

        profileEverything.appendChild(customImg);
        profileEverything.appendChild(songName);
        profileEverything.appendChild(customAd1);

        document.querySelector(".results").appendChild(profileEverything);

    }
    createProfileWrapper();
}