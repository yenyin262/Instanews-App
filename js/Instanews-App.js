
$(function () {
    var news = [];
    let url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    url += '?' + $.param({
        'api-key': "c295f39d23ee41c4868972af403fba71"
    });
    $.ajax({
        url: url,
        method: 'GET',
    }).done(function (data) {
        //console.log(data);
        news = data.results;
        //console.log(news);
        let lists = {};
        $.each(data.results, function (key, value) {
            lists[value.section] = value.section;
        });
        $('.loadergif').hide();

        //console.log(lists);
        $.each(Object.keys(lists), function (key, value) {
            $('.section-container').append('<option>' + value + '</option>');
        });
        
        //let articles = [{}];
        // $.each(news, function (key, value) {
        //     articles[value.title] = value.title;
        //     console.log(value.title);
        // });
        
       //edit real
        // $.each(news, function (key, value) {
        //     let articles = articles.push(value.title);
        //     console.log(articles);

            // let categoryMatchArticle = {}
            //  if ('.section-container' === value.title) { 

            //     return true; 
            //  }
            //  else { 
            //      return false;
            //  }
        // });
        $('.section-container').on("change", function () { //to store the lists of articles in each match select section
   
            var selectedCategory = $(".section-container option:selected").text(); ///
            console.log(selectedCategory);

            let categoryArticles = news.filter(function (newsitem) { 
                return newsitem.section === selectedCategory;
            });
            console.log(categoryArticles);


            let categoryArticlesWithImages = categoryArticles.filter(function(categoryArticle) { 

                if (categoryArticle.multimedia[4] && categoryArticle.length === 12) { 
                    
                    return categoryArticle === selectedCategory;

                  
                    //console.log(categoryArticle.multimedia[4].url);
                }
            else {
                 (!categoryArticle.multimedia[4] && categoryArticle.length < 12) 
                          return false;

                        //     }

                }
             
            });    console.log(categoryArticlesWithImages);
            // news 40 
            //filter array of news by selected catergoy to 12 
    
            // if (selectedCategory === news.section) { 
            //  console.log(news.section);
            

         // get articles = 
           
         
         




        });
    



    }).fail(function (err) {
        throw err;
    });

});


    // On change method for select
    // filter only those articles which match current select
    // display first 12
    // filter those which have images - or at each loop - can delete it from results
// });


// $(document).on('change','.section-container',function(){
    


   



// function getNewsArticles() {
//     let getNewsArticles = value.title

// }

// function articleHasImage(currentArticle) {
//     if (!currentArticle.multimedia) {
//         return false;
//     }
//     if (currentArticle.multimedia[4].url) {
//         //console.log(currentArticle.multimedia[4].url);
//     }
//     return true;
// };

// function matchesCategoryAndHasImage(currentArticle, category) {
//     if (currentArticle.section === category && articleHasImage(currentArticle)) {
//         return true;
//     }
//     return false;
// }


// function showFilteredArticles(category) {
//     // news = data.results;
// }

    // let url = "https://api.nytimes.com/svc/topstories/v2/home.json";
    // url += '?' + $.param({
    //     'api-key': "c295f39d23ee41c4868972af403fba71"
    // });
    // $.ajax({
    //     url: url,
    //     method: 'GET',
    // }).done(function (data) {
    //     console.log(data);
    //     let articles = data.results;

    // Filter the articles (articles of correct category with images)
//     let filteredArticles = filterArticles(articles, category);

//     // Add the articles to document (ie. show them on the screen)
//     //     showArticles(filteredArticles);
//     // }).fail(function (err) {
//     //     throw err;
//     // });




// function onCategorySelect(category) {
//     let inputArticles = getNewsArticles();

//     showArticles(filteredArticles);
// }

// function getSelectedCategory() {
//     let selectedCategory = $(".section-container option:selected").text(); ///
//     console.log(selectedCategory);
//     return selectedCategory;
// }

// $('.section-container').on("change", function () { //to store the lists of articles in each match select section
//     // Get the select category
//     let selectedCategory = getSelectedCategory();

//     // Get all unfiltered articles
//     showFilteredArticles(selectedCategory);
// });


// function showArticles(filteredArticles) { // WORK ON - CREATE CONTAINER = IMAGES SRC SET IMAGES SRC CREATE DIV

//     //let showArticles = value.

// }

// function filterArticles(allArticles, category) {
//     let filteredArticles = [];
//     for (let i = 0; (i < allArticles.length) && (filteredArticles.length <= 12); i++) {
//         let currentArticle = allArticles[i];
//         if (matchesCategoryAndHasImage(currentArticle, category)) {
//             filteredArticles.push(currentArticle);
//         }
//     }
//     return filteredArticles;
//}