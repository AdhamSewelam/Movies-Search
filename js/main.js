$(".slidebar-toggle").click(function () {
    isTrue ? ($(".slidebar-menu").removeClass("close-menu").addClass("open-menu"),
        inWidth = $(".slidebar-menu").width(),
        $(".slidebar").css("left", inWidth),
        $(".fa-align-justify").toggleClass("fa-times"),
        $(".slidebar-menu .text1").animate({ opacity: "1", paddingTop: "25px" }, 1100),
        $(".slidebar-menu .text2").animate({ opacity: "1", paddingTop: "25px" }, 1200),
        $(".slidebar-menu .text3").animate({ opacity: "1", paddingTop: "25px" }, 1300),
        $(".slidebar-menu .text4").animate({ opacity: "1", paddingTop: "25px" }, 1400),
        $(".slidebar-menu .text5").animate({ opacity: "1", paddingTop: "25px" }, 1500),
        $(".slidebar-menu .text6").animate({ opacity: "1", paddingTop: "25px" }, 1600),
        isTrue = !isTrue) : ($(".slidebar-menu").addClass("close-menu").removeClass("open-menu"),
            $(".fa-align-justify").toggleClass("fa-times"),
            $(".slidebar").css("left", 0),
            $(".slidebar-menu li").animate({ opacity: "0", paddingTop: "350px" }, 500),
            isTrue = !isTrue)
});

var links = document.getElementsByClassName("text-decoration-none");
var inWidth = 0;
var isTrue = !0;
var movie = [];
var movies= [];
var moviesDetails;
var imgPath = "https://image.tmdb.org/t/p/w500";

async function getMovies(curruntMovie) {
    var response = await fetch(`https://api.themoviedb.org/3/movie/${curruntMovie}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k`)
    var finalResponse = await response.json();
    movie = finalResponse.results;
    displayMovies();
}
getMovies("now_playing");

function displayMovies() {
    var cols = '';
    for (var i = 0; i < movie.length; i++) {
        cols +=
            `
            <div class="col-md-4 py-3">
                <div class="movie position-relative overflow-hidden">
                    <img src=" ${imgPath + movie[i].poster_path}" class="w-100" alt="">
                        <div class="layer d-flex align-items-center text-dark position-absolute w-100 h-100">
                            <div>
                                <h2 class="fw-bolder"> ${movie[i].original_title}</h2>
                                <p class="fw-bolder text-danger">${movie[i].overview}</p>
                                <p class="fw-bolder"> Rate: ${movie[i].vote_average}</p>
                                <p class="fw-bolder text-danger">${movie[i].release_date}</p>
                            </div>
                        </div>
                </div>
            </div>
        `
    }
    document.getElementById("movieData").innerHTML = cols;
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        var currentMovie = e.target.id;
        getMovies(currentMovie);
    })
}

async function getSingleMovie(e) {
    var response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${e}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`)
    moviesDetails = await response.json();
    movies = moviesDetails.results;
    displaySingleMovies();
}

window.onload = () =>
{
    let allMovies = document.getElementById("allMovies")
    allMovies.onkeyup = (event) =>
    {
        getSingleMovie(allMovies.value)
    }
}

function displaySingleMovies() {
    var cols = '';
    for (var i = 0; i < movies.length; i++) {
        cols +=
            `
            <div class="col-md-4 py-3">
                <div class="movie position-relative overflow-hidden">
                    <img src=" ${imgPath + movies[i].poster_path}" class="w-100" alt="">
                        <div class="layer d-flex align-items-center text-dark position-absolute w-100 h-100">
                            <div>
                                <h2 class="fw-bolder"> ${movies[i].original_title}</h2>
                                <p class="fw-bolder text-danger">${movies[i].overview}</p>
                                <p class="fw-bolder"> Rate: ${movies[i].vote_average}</p>
                                <p class="fw-bolder text-danger">${movies[i].release_date}</p>
                            </div>
                        </div>
                </div>
            </div>
        `
    }
    document.getElementById("movieData").innerHTML = cols;
}

function search(val)
{
    var cols = '';
    for (var i = 0; i < movie.length; i++) {
        if(movie[i].original_title.toLowerCase().includes(val.toLowerCase()))
        {
            cols +=
                `
                <div class="col-md-4 py-3">
                    <div class="movie position-relative overflow-hidden">
                        <img src=" ${imgPath + movie[i].poster_path}" class="w-100" alt="">
                            <div class="layer d-flex align-items-center text-dark position-absolute w-100 h-100">
                                <div>
                                    <h2 class="fw-bolder"> ${movie[i].original_title}</h2>
                                    <p class="fw-bolder text-danger">${movie[i].overview}</p>
                                    <p class="fw-bolder"> Rate: ${movie[i].vote_average}</p>
                                    <p class="fw-bolder text-danger">${movie[i].release_date}</p>
                                </div>
                            </div>
                    </div>
                </div>
            `
        }
    }
    document.getElementById("movieData").innerHTML = cols;
}

let userName = document.getElementById("name");
   let userEmail = document.getElementById("email");
   let userPhone = document.getElementById("phone");
   let userAge = document.getElementById("age");
   let userPassword = document.getElementById("password");
   let userRePassword = document.getElementById("rePassword");
   let userNameAlert = document.getElementById("namealert");
   let userEmailAlert = document.getElementById("emailalert");
   let userPhoneAlert = document.getElementById("phonealert");
   let userAgeAlert = document.getElementById("agealert");
   let userpasswordAlert = document.getElementById("passwordalert");
   let userRepasswordAlert = document.getElementById("repasswordalert");
function userNameValid() {
    return 1 == /^[a-zA-Z0-9]+$/.test(userName.value) ? 
    (userNameAlert.style.display = "none", !0) : 
    (userNameAlert.style.display = "block", !1)
}
function userEmailValid() {
    return 1 == /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(userEmail.value) ?
     (userEmailAlert.style.display = "none", !0) : 
     (userEmailAlert.style.display = "block", !1)
}
function userPhoneValid() {
    return 1 == /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value) ?
     (userPhoneAlert.style.display = "none", !0) : 
     (userPhoneAlert.style.display = "block", !1)
}
function userAgeValid() {
    return 1 == /^[1-9][0-9]?$|^100$/.test(userAge.value) ? 
    (userAgeAlert.style.display = "none", !0) : 
    (userAgeAlert.style.display = "block", !1)
}
function userPasswordValid() {
    return 1 == /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value) ? 
    (userpasswordAlert.style.display = "none", !0) : 
    (userpasswordAlert.style.display = "block", !1)
}
function userRePasswordValid() {
    return userPassword.value == userRePassword.value ? 
    (userRepasswordAlert.style.display = "none", !0) : 
    (userRepasswordAlert.style.display = "block", !1)
}
userAgeAlert.style.display = "none",
userName.addEventListener("keyup", userNameValid),
userEmail.addEventListener("keyup", userEmailValid),
userPhone.addEventListener("keyup", userPhoneValid),
userAge.addEventListener("keyup", userAgeValid),
userPassword.addEventListener("keyup", userPasswordValid),
userRePassword.addEventListener("keyup", userRePasswordValid),
document.getElementById("contact").addEventListener("click", function () 
{
    userNameValid() && 
    userEmailValid() && 
    userPhoneValid() && 
    userAgeValid() && 
    userPasswordValid() && 
    userRePasswordValid() ? 
    document.getElementById("submitBtn").disabled = !1 : 
    document.getElementById("submitBtn").disabled = !0
});
