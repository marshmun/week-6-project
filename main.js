const userInfo = " ?client_id=8538a1744a7fdaa59981232897501e04";
const clientUse = "https://api.soundcloud.com/users/";
var userDesire = "zach";
var searchBtn = document.querySelector('#searchBtn');
var searchInput = document.querySelector("#searchInput");



// 2. Create your `onSubmit` event for getting the user's search term


// 3. Create your `fetch` request that is called after a submission


// 4. Create a way to append the fetch results to your page


// 5. Create a way to listen for a click that will play the song in the audio play
searchBtn.addEventListener("click", function (e) {
    userDesire = searchInput.value;
    music()
});


function music() {
    fetch(clientUse + userDesire + userInfo)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var users = data.results;
            for (var i = 0; i < data.length; i++) {
                console.log("customer : ", users[i])
                thisStuf(users[i])
            }
        });
}


function thisStuf(data) {

    function createProfileWrapper() {
        var profileEverything = document.createElement('div');
        customers.appendChild(profileEverything);

        var customImg = document.createElement("img")
        customImg.classList.add("pic");
        customImg.src = data.avatar_url;
        profileEverything.appendChild(customImg);

        var customAd1 = document.createElement("p")
        customAd1.classList.add("name")
        customAd1.textContent = data.first_name;
        profileEverything.appendChild(customAd1);
    }
    createProfileWrapper();

}