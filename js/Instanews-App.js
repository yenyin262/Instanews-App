$(function () {
    const selectOption = $('.sectionContainer')
    const articleOption = $('.sectionArticleContainer')

     selectOption.select2();


    selectOption.on('change', (event) => {
        articleOption.empty();
        let news = [];
        let apiUrl = 'https://api.nytimes.com/svc/topstories/v2/';
        let apiKey = '?' + $.param({
            'api-key': "VgfxUztDMZve2b4mN3eRWPXLVz35FvgT"
        });
        let url = apiUrl + event.target.value + ".json" + apiKey;

        $.ajax({
            url: url,
            method: 'GET',
        // }).done(function (data) {
        }).done((data)  => {
            news = data.results;

            $('.loaderGif').hide();
            let counter = 0;
            // $.each(news, function (key, value) {
            $.each(news,(key, value) => {

                if (value.multimedia.length === 5 && counter < 12) {
                    counter = counter + 1;
                    const imageUrl = value.multimedia[4].url;
                    const articleNewsUrl = value.url;
                    articleOption.append(`<article class="articleContents" style="background-image: url(  ${imageUrl })"> <a id="link" href =  ${articleNewsUrl}  ><p class="articleTitle">  ${value.title}  </p></a></article>`);
                    // articleOption.append('<div class="articleContents" style="background-image: url(' + imageUrl + ')"> <a id="link" href = ' + articleNewsUrl + '><p class="articleTitle">' + value.title + '</p></a></div>');
                }
            });

        }).fail(function (err) {
            throw err;
        });

    });


    const ajax =  $('.ajax')
selectOption.on("change",  (event)  => {
   ajax.css({
        'display': 'inline',
    });

    //$(".sectionContainer option[value='section']").remove();
    selectOption.find("option[value='section']").remove(); 
    
    const main = $('.main')
    const logoContainer =  $('.logoContainer')
    const logo = $('.logo')
    const description = $('p.title')
    const dropDownContainer = $('.dropDownContainer')
    const selectdropDownContainer = $('.dropDownContainer select')
    const footerCopyright =  $('.copyrightSection')

    if ($(window).width() >= 600 && $(window).width() < 1240) {
       

        main.css({
            'height': '16vh',
            'padding-top': '20px',
            'padding-bottom': '20px',
            'justify-content': 'center',
            'align-items': 'center',
        })

        logoContainer.css({
            'height': '100px',
            'margin-top': '0px',       
        })

        logo.css({
            'height': '65px',
        })

        description.css({
            'margin-left': '-1px',
        })

        dropDownContainer.css({
            'margin-top': '0px',
            'align-items': 'unset',
          'width':'unset',
             'margin-left': '90px',
           'margin-right': '40px',
        
        })

        selectdropDownContainer.css({
            'margin-left': '35px',
            'align-self': 'flex-start',

        })

        ajax.css({
            'margin-top': '20px',
        });
        
        footerCopyright.css({
            'margin-top': '20px',
        })


    } else if ($(window).width() >= 1240) {

       main.css({
            'height': '15vh',
            'padding-top': '10px',
            'padding-bottom': '10px',
        })

        logo.css({
            'height': '65px',
        })

      logoContainer.css({
            'margin-left': '50px',
            'margin-right': '80px',
        })
        dropDownContainer.css({
            'margin-top': '-6px'
        })

        selectdropDownContainer.css({
            'margin-left': '38px',
        })

       ajax.css({
            'margin-top': '5%',
            'margin-left': '-64%',
        })

        footerCopyright.css({
            'margin-top': '20px',
        })


    } else {

        main.css({
            //'height': '74vh',
            // 'height': '90vh',
        'height': '55vh',
            'padding-bottom':'20px',
            'padding-top':'20px',
        })


        articleOption.css({
          //  'margin-top': '-60px',
        })

       logoContainer.css({
            'margin-top': '0px',
            'height': '40vh',
           // 'height': '50vh',
        })

        dropDownContainer.css({
           // 'margin-top': '-20px',   
            'margin-top': '10px',
        })

        ajax.css({
            'margin-left': '180px',
        })

        footerCopyright .css({
            'margin-top': '20px',
        })


    }
});

});