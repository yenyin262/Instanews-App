$(function () {
    const selectOption = $('.sectionContainer');
    const articleOption = $('.sectionArticleContainer');
    const main = $('.main');
    const logoContainer = $('.logoContainer');
    const logo = $('.logo');
    const description = $('p.title');
    const dropDownContainer = $('.dropDownContainer');
    const selectDropDownContainer = $('.dropDownContainer select');
    const footerCopyright = $('.copyrightSection');
    let news = [];
    const ajax = $('.ajax');

    selectOption.select2();

    function fetchArticles(data) {

        news = data.results;

        $('.loaderGif').hide();
        let counter = 0;
        // $.each(news, function (key, value) {
        $.each(news, (key, value) => {
            
            if (value.multimedia.length === 5 && counter < 12) {
                counter = counter + 1;
                const imageUrl = value.multimedia[4].url;
                const articleNewsUrl = value.url;
                articleOption.append(`<article class="articleContents" style="background-image: url(  ${imageUrl})"> <a id="link" href =  ${articleNewsUrl}  ><p class="articleTitle">  ${value.title}  </p></a></article>`);
            }
        });
    }

    selectOption.on('change', (event) => {
        articleOption.empty();
        let apiUrl = 'https://api.nytimes.com/svc/topstories/v2/';
        let apiKey = '?' + $.param({
            'api-key': 'VgfxUztDMZve2b4mN3eRWPXLVz35FvgT'
        });
        let url = apiUrl + event.target.value + '.json' + apiKey;
        
        $.ajax({
            url: url,
            method: 'GET',
            
        }).done((data) => fetchArticles(data))
        .fail(function (err) {
        throw err;
        });
    });
    
    function tabletCSS() {
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
            'width': 'unset',
            'margin-left': '90px',
            'margin-right': '40px',
        })
        
        selectDropDownContainer.css({
            'margin-left': '35px',
            'align-self': 'flex-start',
        })
        
        ajax.css({
            'margin-top': '20px',
        });
        
        footerCopyright.css({
            'margin-top': '20px',
        })
    }
    
    function desktopCSS() {
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
        
        selectDropDownContainer.css({
            'margin-left': '38px',
        })
        
        ajax.css({
            'margin-top': '5%',
            'margin-left': '-64%',
        })
        
        footerCopyright.css({
            'margin-top': '20px',
        })
        
    }
    
    function mobileCSS() { 
        
        main.css({
            'height': '55vh',
            'padding-bottom': '20px',
            'padding-top': '20px',
        })
        
        logoContainer.css({
            'margin-top': '0px',
            'height': '40vh',
        })
        
        dropDownContainer.css({
            'margin-top': '10px',
        })
        
        ajax.css({
            'margin-left': '180px',
        })
        
        footerCopyright.css({
            'margin-top': '20px',
        })
        
    }
   
    selectOption.on('change', () => {
        ajax.css({
            'display': 'inline',
        });
        
        selectOption.find('option[value=\'section\']').remove();
        // function tabletCSS()
        if ($(window).width() >= 600 && $(window).width() < 1240) {
            tabletCSS();
        } else if ($(window).width() >= 1240) {
            desktopCSS();
        } else {
            mobileCSS();
            
        }
        
    });
    
});