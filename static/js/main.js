$(document).ready(function(){
    //news
    $("#breakingnews").BreakingNews({
        background		:"none",
        linkcolor		:"#B6B9BC",
        linkhovercolor	:"red",
        isbold			:false,
        width			:1190,
        timer			:3000,
        autoplay		:true,
        effect			:"slide",
    });

    //banner_slider
    // $('.banner_slider').bxSlider({
    //     // slideWidth: clientW,
    //     auto: true,
    //     infiniteLoop: true,
    //     hideControlOnEnd: false,
    //     slideMargin: 0,
    //     startSlide: 0
    // })

    // $('.banner_slider').bxSlider({
    //     // slideWidth: 1,
    //     auto: 2000,
    //     autoHover: false,
    //     autoStart: true,
    //     adaptiveHeight: true,
    //     startSlides: 0,
    //     displaySlideQty: 1,
    //     captions: true,
    //     // controls: false,//隐藏左右按钮
    //     minSlides: 1,
    //     maxSlides: 1,
    //     moveSlides: 1,
    //     tickerHover: true,
    //     speed:1000,
    //     slideMargin: 0
    // });
    //scheme_sider
    $('.scheme_sider').bxSlider({
        slideWidth: 1190,
        auto: true,
        autoHover: true,
        minSlides: 5,
        maxSlides: 6,
        moveSlides: 2,
        startSlide: 0,
        slideMargin: 10
    });
    //case_slider
    $('.case_slider').bxSlider({
        // slideWidth: 1190,
        auto: false,
        infiniteLoop: true,
        hideControlOnEnd: true,
        slideMargin: 0
    })
    //use
    _search();
    $(window).on('scroll',function() {
        _scroll()
    });

    //scroll
    function _scroll(){
        var scrollTop =$(window).scrollTop();
        if(scrollTop>700){
            $('.tst_top').css({'background':'rgba(3,36,76,1)'});
            $('.x-goto-top').css({"display":"block"})
        }else{
            $('.tst_top').css({'background':'rgba(3,36,76,.7)'});
            $('.x-goto-top').css({"display":"none"})
        }
    }

    $('.x-goto-top').click(function () {
        var top = document.body.scrollTop || document.documentElement.scrollTop
        scrollBy(0,-top);
    })

    //search
    function _search() {
        $(".search_icon").mouseenter(function () {
            $(".search_input").css("visibility","visible")
            $(".search_input").animate({marginRight: '10px'}, "slow")
        })
        $(".search").mouseleave(function () {
            $(".search_input").animate({marginRight: '-20px'}, "slow")
            $(".search_input").css("visibility","hidden")
        })
    }

    //小屏
    var clientW = document.documentElement.clientWidth;
    if(clientW > 1190) {
        //TODO
    } else if (clientW <= 414 ) {
        $('.scheme_sider').bxSlider({
            slideWidth: 414,
            auto: true,
            autoHover: true,
            minSlides: 2,
            maxSlides: 6,
            moveSlides: 2,
            startSlide: 0,
            slideMargin: 10
        });
    }


});

