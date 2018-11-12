
const selectOption = $('.sectionContainer')
const articleOption = $('.sectionArticleContainer')


$(function () {
    // selectOption.select2();
    selectOption.on("change", function (event) {
        articleOption.empty();
        let news = [];
        let apiUrl = "https://api.nytimes.com/svc/topstories/v2/";
        let apiKey = '?' + $.param({
            'api-key': "c295f39d23ee41c4868972af403fba71"
        });
        let url = apiUrl + event.target.value + ".json" + apiKey;


        console.log(event);
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function (data) {

            news = data.results;
            console.log(data);

            $('.loaderGif').hide();
            let counter = 0;
            $.each(news, function (key, value) {

                if (value.multimedia.length === 5 && counter < 12) {
                    counter = counter + 1;
                    const imageUrl = value.multimedia[4].url;
                    const articleNewsUrl = value.url;
                    articleOption.append('<div class="articleContents" style="background-image: url(' + imageUrl + ')"> <a id="link" href = ' + articleNewsUrl + '><p class="articleTitle">' + value.title + '</p></a></div>');

                }

            });



        }).fail(function (err) {
            throw err;
        });

    });
});


selectOption.on("change", function (event) {
    $('.ajax').css({
        "display": 'inline',
    });

    $(".sectionContainer option[value='section']").remove();



    if ($(window).width() >= 600 && $(window).width() < 1240) {
        $('.main').css({
            "height": '15vh',

        })

        $('.logoContainer').css({
            "height": '100px',
            "margin-top": '0px',
            "margin-left": '138px',


        })

        $('.logo').css({
            "height": '65px',

        })


        $('p.title').css({
            "text-align": 'initial',
            "left": '8%',
            "position": 'relative',

        })

        $('.titleContainer').css({
            
            "margin-top": '0px',
        })

        $('.titleContainer select').css({

            "margin-left": '35px',
            "align-self": 'flex-start',

        })

        $('.ajax').css({
            "margin-top": '20px',
        });


    } else if ($(window).width() >= 1240) {

        $('.main').css({
            "height": '15vh',

        })

        $('.logo').css({
            "height": '65px',

        })

        $('.logoContainer').css({
            "margin-left": '50px',
        })
        $('.titleContainer').css({
            "margin-left": '50px',
        })

        $('.titleContainer select').css({
            "margin-left": '38px',
        })

        $('p.title').css({
            "margin-left": '39px',
        })

        $('.ajax').css({
        "margin-top": '5%',
        "margin-left": '-64%',
        })


    } else {

        $('.main').css({
            "height": '74vh', //'68vh' 

        })

        articleOption.css({
            "margin-top": '-60px',

        })

        $('.logoContainer').css({
            "margin-top": '0px',
            "height": '50vh',
        })

        $('.titleContainer').css({
        "margin-top": '-20px',
    })

        $('.ajax').css({
            "margin-left": '180px',
        })


    

    }
});
