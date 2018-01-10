console.log("working");
// $(toggle-class)
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
            
            buttonV.text(text1);
            buttonV.attr('class', 'ingredient-button');
            buttonV.attr('type', 'button');
            $('.searched-ingredients').append(buttonV);
            $('#search-bar').val(null);
            text1 = text1.trim();
            text1 = text1.replace(" ", "%20");
            text1 = text1.replace(" ", "%20");
            text1 = text1.replace(" ", "%20");
            text1 = text1.replace(" ", "%20");
            text1 = text1.replace(" ", "%20");
            buttonV.attr('id', `ing-${text1}`);
            buttonV.attr('data-button', text1);
            edamIng.push(text1);
          });

          $(document).on('click', ".ingredient-button", function () {
            let removeAct = $(this).attr("data-button");
            let removeActId = $(this).attr("id");
            var indexInArrayToRemove = edamIng.indexOf($(this).attr("data-button"));
            delete edamIng[indexInArrayToRemove];
            $(this).remove(); 
            edamIng.splice(indexInArrayToRemove, 1);
          });
          $('.search-button').on('click', function () {
            
            for (let i = 0; i < edamIng.length; i++) {
            edamIng = edamIng.toString().replace(",", "%20");
            console.log(edamIng);
            console.log("---");
        };
        var edamURL = 'https://api.edamam.com/search?q='+edamIng+'&app_id='+edamAppID+'&app_key='+edamAppKey;
            console.log("search executing");
            console.log(edamIng);
            console.log(edamURL);
            $.ajax({
                url: edamURL,
                method: 'GET'
            }).done(function (response) {
                console.log(response);
                if (response.count >=8) {
                  for (let i = 0; i < 8; i++) 
                    recipes.push({
                        title: response.hits[i].recipe.label,
                        ingredients: response.hits[i].recipe.ingredientLines,
                        image: response.hits[i].recipe.image,
                        link: response.hits[i].recipe.url
                    })}
                else {
                    for (let i = 0; i < response.count; i++) {
                        recipes.push({
                            title: response.hits[i].recipe.label,
                            ingredients: response.hits[i].recipe.ingredientLines,
                            image: response.hits[i].recipe.image,
                            link: response.hits[i].recipe.url
                        })
                };
                    // console.log(response.hits[i].recipe.image);
                }
                function topRecipes() {
                    console.log(recipes);
                    $("#top-recipes").empty();
                    for (var i = 0; i < recipes.length; i++) {
                        console.log(recipes[i]);
                        var custAttr = "id-"+i;
                        console.log(custAttr);
                        $("#top-recipes").prepend(`<button class='food' data-button='${JSON.stringify(recipes[i])}' data-id='${i}'  ${custAttr}='${i}'><img src='${recipes[i].image}'></button>`);
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
