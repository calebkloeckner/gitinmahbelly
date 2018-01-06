console.log("working");

// $(toggle-class)

$(document).ready(function () {
    let recipes = [];

    function topRecipes() {
        $("#top-recipes").empty();
        for (var i = 0; i < recipes.length; i++) {
            $("#top-recipes").append(`<button class="food" data-button="${recipes[i]}"><img src="${recipes[i]}"></button>`);
            console.log(recipes[i]);

            // $("#top-recipes").attr("open", recipes[i]);
            // console.log(recipes);
        }
    }
    topRecipes();
    $('.modal').modal();

    $('#modal1').on('click', function () {
        const edamAppID = "c1724022";
        const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";
        var edamURL = 'https://api.edamam.com/search?q=' + '&app_id=' + edamAppID + '&app_key=' + edamAppKey + "&limit=100";
        $.ajax({
            url: edamURL,
            method: 'GET'
        }).done(function (response) {
            let results = response.data;
            for (var i = 0; i < results.length; i++) {
                
            }
            console.log(response.data);
        });
    });
    const edamAppID = "c1724022";
    const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";
    var edamIng = 'chicken'; //Spaces need to be translated to %20. required  
    var edamURL = 'https://api.edamam.com/search?q=' + edamIng + '&app_id=' + edamAppID + '&app_key=' + edamAppKey;
    $.ajax({
        url: edamURL,
        method: 'GET'
    }).done(function (response) {
        console.log(response)
    });

    $.ajax({
        url: edamURL,
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        for (let i = 0; i < 9; i++) {
            recipes.push(response.hits[i].recipe.image);
            console.log(response.hits[i].recipe.image);
            
            
        }
        topRecipes();
    });
});

// results[i].