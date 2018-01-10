console.log("working");

// $(toggle-class)

$(document).ready(function () {
    let recipes = [];

    function topRecipes() {
        console.log(recipes);
        $("#top-recipes").empty();
        for (var i = 0; i < recipes.length; i++) {
            console.log(recipes[i]);
            $("#top-recipes").append(`<button class="food" data-button='${JSON.stringify(recipes[i])}' data-id="${i}"><img src="${recipes[i].image}"></button>`);
            // console.log(recipes[i]);

            // $("#top-recipes").attr("open", recipes[i]);
            // console.log(recipes);
        }
    }
    topRecipes();
    $('.modal').modal();
    
    $(document).on('click', ".food", function () {
        let clicky = $(this).attr("data-button");
        let clickedId = $(this).attr("data-id");
        console.log(clicky);
        $('#modal1').modal('open');
        // $("#inside-modal").append(clicky);
        let recipeTitle = recipes[clickedId].title;
        let recipeBody = recipes[clickedId].ingredients;
        let recipeImage = recipes[clickedId].image;
        let recipeUrl = recipes[clickedId].link;
        console.log(recipeTitle);

        $("#recipe-name").html(recipeTitle);
        $("#recipe-body").html(recipeBody);
        $("#recipe-image").attr("src", recipeImage);
        $("#recipe-url").attr("href", recipeUrl);
        console.log(recipeUrl);


        console.log("boogers");

        // let modalTitle;
        // const edamAppID = "c1724022";
        // const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";
        // var edamURL = 'https://api.edamam.com/search?q=' + '&app_id=' + edamAppID + '&app_key=' + edamAppKey + "&limit=10";
        // $.ajax({
        //     url: edamURL,
        //     method: 'GET'
        // }).done(function (response) {
        // for (let i = 0; i < 8; i++) {
        //     recipes.push(response.hits[i].recipe.image);
        // }
        // for (let i = 0; i < 8; i++) {
        //     recipes.push(response.hits[i].recipe.image);
        //     console.log(response.hits[i].recipe.image);  
        // }


        //     console.log(response);
        // });
        
    });
    // $(".modal-content").empty();
    const edamAppID = "c1724022";
    const edamAppKey = "cdded1f6d7a29716aec7adcec57b419e";
    var edamIng = 'beef'; //Spaces need to be translated to %20. required  
    var edamURL = 'https://api.edamam.com/search?q=' + edamIng + '&app_id=' + edamAppID + '&app_key=' + edamAppKey + "&limit=10";
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
        for (let i = 0; i < 8; i++) {
            recipes.push({
                title: response.hits[i].recipe.label,
                ingredients: response.hits[i].recipe.ingredientLines,
                image: response.hits[i].recipe.image,
                link: response.hits[i].recipe.url
            });
            console.log(response.hits[i].recipe.image);


        }
        topRecipes();
    });
});