var findOne = function (haystack, object) {
    return object.some(function (v) {
        return haystack.indexOf(v) >= 0;
    });
};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const gifkey = "JFlbvY7o0WgDcLH8D9vc7jlFL5hMW2Dl";
const imdataKey = "c6TNwjpz";
const imdataSKey = "J8adbvz3Bs5KLJ2nTeFRXSAwKNUanpar";
var imdataProduct = "";
var runI = 0;

// const edamAppID = "c1724022";
// const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";
//local test key
const edamAppID = "926110ce";
const edamAppKey = "c284b239fa0287a8009b4ce59afed42c";

var edamIng = [];  //Spaces need to be translated to %20. required 
var edamIngRandom = ['beef', 'pork', 'chicken', 'ramen', 'apple%20cherry', 'milk%20corn', 'curry']
edamIng.push(edamIngRandom[getRandomInt(edamIngRandom.length)]);
var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
var clickedmodal = "";
var testResponse = {};
let recipes = [];
var modalParse;

let database = firebase.database();
var databasePush = firebase.database().ref();
let favorites = [];
let favoritesCheck = [];
let indexOfRecipeToCheck = [];
var savedRecipe =[];

function favoriteFunctionLoad(refSource, refDatabase) {
    console.log("favorited? ?");
    // modal opened --> indexOfRecipeToCheck;
    indexOfRecipeToCheck = [recipes[clickedmodal]];

    //checkFavs = check favorites in database if indexOfRecipeToCheck exists.
    var checkFavs = findOne(refSource,refDatabase);
    // var checkFavs = findOne(favorites,indexOfRecipeToCheck);
    if (checkFavs === true){
        $(".favorite-ID").attr("src", "images/like.png").attr("status", "1");
        console.log('true return')
    }
    if (checkFavs === false){
        console.log('false return')
    }
}

$(document).on('click', ".favorite-ID", function () {

    console.log("Checking favorites");
    // modal opened --> indexOfRecipeToCheck;
    indexOfRecipeToCheck = [recipes[clickedmodal]];

    //checkFavs = check favorites in database if indexOfRecipeToCheck exists.
    var checkFavs = findOne(favorites,indexOfRecipeToCheck);
    if (checkFavs === true){
        $(".favorite-ID").attr("src", "images/heart.png").attr("status", "0");
        favorites.splice(indexOfRecipeToCheck, 1);
    }
    else if (checkFavs === false){
        $(".favorite-ID").attr("src", "images/like.png").attr("status", "1");
        favorites = favorites.concat(indexOfRecipeToCheck);
        favoritesCheck.push(recipes)
        findOne(favoritesCheck, favorites);
    };
    favoriteFunctionLoad(favorites, indexOfRecipeToCheck);
    console.log(favorites);
    databasePush.push(favorites);
    console.log(favorites)
    console.log('-----')

});

$(document).ready(function(){
    $('.content').mouseenter(function() {
        $(".content-overlay").css({"opacity": "1"});
        $(".content-details").css({"top": "50%", "left": "50%", "opacity": "1"});
    });
    $('.content').mouseleave(function() {
        $(".content-overlay").css({"opacity": "0"});
        $(".content-details").css({"top": "0", "left": "0", "opacity": "0"});
    });
                // modal display
                $('.modal').modal();
                // on click function to open the modal
                $(document).on('click', ".foodish", function () {
                  console.log(this);
                  modalParse = JSON.parse($(this).attr("data-button"));
                  let clickedId = $(this).attr("data-id");
                  clickedmodal = clickedId;
                  console.log(modalParse);
                  $('#modal1').modal('open');
                    // displays the object insie the modal
                    let recipeTitle = modalParse.title;
                    let recipeBody = modalParse.ingredients;
                    let recipeImage = modalParse.image;
                    let recipeUrl = modalParse.link;
                    console.log(recipeTitle);
                    console.log(modalParse.ingredients);
                    // for loop to add each ingredient to its own line with a <p> tag
                    let i;
                    for (i = 0; i < modalParse.ingredients.length; i++) {
                      let item = $('<p>').html(modalParse.ingredients[i]);
                      $("#recipe-body").append(item);
                    }
                    $("#recipe-name").html(recipeTitle).prepend("<img src='images/heart.png' class='favorite-ID' type='button' status='0'>").append("<img src='#' id='recipe-image'>");
                    $("#recipe-image").attr("src", recipeImage);
                    $("#recipe-url").attr("href", recipeUrl);
                    console.log(recipeUrl);
                    favoriteFunctionLoad(favorites, indexOfRecipeToCheck);
                });
        
});