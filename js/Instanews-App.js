$(function () {
    
    $('.sectionContainer').on("change", function (event) { //to store the lists of articles in each match select section
        $('.sectionArticleContainer').empty();
        let news = [];
        let apiUrl = "https://api.nytimes.com/svc/topstories/v2/";
        let apiKey = '?' + $.param({
            'api-key': "c295f39d23ee41c4868972af403fba71"
        });
        let url = apiUrl + event.target.value +".json" + apiKey;
        console.log(event);
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (data) {
           
            news = data.results;
            
            
            $('.loaderGif').hide();
            let counter = 0; 
            $.each(news,function(key,value) { 
            
                if (value.multimedia.length === 5 && counter < 12) {
                    counter = counter + 1; 
                    const imageUrl = value.multimedia[4].url;
                    const articleNewsUrl = value.url;
                    $('.sectionArticleContainer').append('<div class="articleContents" style="background-image: url('+ imageUrl +')"> <a id="link" href = ' + articleNewsUrl + '><p class="articleTitle">' + value.title + '</p></a></div>');
                    
                }
          
            });
            
            
            
        }).fail(function (err) {
            throw err;
        });
        
    });
});
