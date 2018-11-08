$(function () {
    
    $('.section-container').on("change", function (event) { //to store the lists of articles in each match select section
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
            //console.log(data);
            news = data.results;
            //console.log(news);
            
            $('.loadergif').hide();
            let counter = 0; 
            $.each(news,function(key,value) { 
            
                if (value.multimedia.length === 5 && counter < 12) {
                    counter = counter + 1; 
                    var imageUrl = value.multimedia[4].url;
                    $('.sectionArticleContainer').append('<div class="articleContents" style="background-image: url('+ imageUrl +')"> <p class="articleTitle">' + value.title + '</p></div>');
                    
                }
          
            });
            
            
            
        }).fail(function (err) {
            throw err;
        });
        
    });
});
