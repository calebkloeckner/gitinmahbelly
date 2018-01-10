console.log("working");
// $(toggle-class)
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

$(document).ready(function () {
    $('form').submit(function(e){
        e.preventDefault();
    });

    topRecipes();

    $.ajax({
      url: edamURL,
      method: 'GET'
    }).done(function(response) {        
        edamIng=[];
        $('form').submit(function(e){
            var buttonV = $('<button>');
            var text1 = $('#search-bar').val();
            edamIng.push(text1);
            buttonV.text(text1);
            buttonV.attr('id', `ing-${text1}`);
            buttonV.attr('class', 'ingredient-button');
            buttonV.attr('type', 'button');
            buttonV.attr('data', text1);
            $('.searched-ingredients').append(buttonV)
            $('#search-bar').val(null);
            console.log(edamIng);
          });

          $("ingredient-button").click(function(){
            $("button").remove();
            // var indexInArrayToRemove = edamIng.indexOf(this.attr("data"));
            // console.log(indexInArrayToRemove);

            // remove indexInArrayToRemove

            // remove this jquery element from dom
            // console.log(edamIng.indexOf(this.data));
            console.log(edamIng);
          });
          $('.search-button').on('click', function () {
            var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
            console.log("search executing");
            console.log(edamIng);
            console.log(edamURL);
            $.ajax({
                url: edamURL,
                method: 'GET'
            }).done(function (response) {
                for (let i = 0; i < 8; i++) {
                    recipes.push({
                        title: response.hits[i].recipe.label,
                        ingredients: response.hits[i].recipe.ingredientLines,
                        image: response.hits[i].recipe.image,
                        link: response.hits[i].recipe.url
                    });
                    // console.log(response.hits[i].recipe.image);
                }
                function topRecipes() {
                    console.log(recipes);
                    $("#top-recipes").empty();
                    for (var i = 0; i < recipes.length; i++) {
                        console.log(recipes[i]);
                        $("#top-recipes").prepend(`<button class="food" data-button='${JSON.stringify(recipes[i])}' data-id="${i}"><img src="${recipes[i].image}"></button>`);
                        // console.log(recipes[i]);
                
                        // $("#top-recipes").attr("open", recipes[i]);
                        // console.log(recipes);
                    }
                }
                
                console.log(edamIng);
                console.log(response);
                topRecipes();
            });
            
        });

      testResponse = response;
      var ingLoop = response.hits[0].recipe.ingredients;
    //   console.log(response)
    //   console.log(response.hits[0].recipe.image)
    //   console.log(response.hits[0].recipe.label)
    //   for (i = 0; i < ingLoop.length; i++) {
    //   console.log(ingLoop[i].text)}
    //   console.log(response.hits[0].recipe.source)
    //   console.log(response.hits[0].recipe.url)
    //   console.log(response.hits[0].recipe.yield)
    //   console.log(testResponse)
    });

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


    });
    // $(".modal-content").empty();
   
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
