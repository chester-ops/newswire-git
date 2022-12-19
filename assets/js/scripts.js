$(document).ready(()=>{
     // MAIN SLIDER
     $(".owl-carousel.site-slider__slides").owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 12000,
        items: 1
    });

    // WIDGET SLIDER
    $(".owl-carousel.latest-posts__list").owlCarousel({
        loop:true,
        margin: 0,
        nav: false,
        responsiveClass: true,
        autoplay: false,
        autoplayTimeout: 6000,
        items: 1
    });

    // SITE SEARCH
    $(".open-search").click(()=>{
        $(".site-search").slideToggle("fast","linear");
    });
    
    $(window).scroll(()=>{
       $(".site-search").css("display","none");
    });


    // MOBILE MENU
    $(".open-menu").click(()=>{
        $(".site-mobile").slideToggle("fast","linear");
    });
    $(".site-mobile__list--item.menu-item-has-children").click((e)=>{
        e.currentTarget.classList.toggle("open");
    })

    // STICKY HEADER
    var prevScrollpos = window.scrollY;
    window.onscroll = ()=>{
        var currentScrollpos = window.scrollY;
        var stickyNav = document.querySelector(".site-header__bottom");
        console.log(currentScrollpos);
        if(currentScrollpos >= 200){
            stickyNav.classList.add("sticky-nav");
            if(prevScrollpos > currentScrollpos && currentScrollpos >= 300){
                stickyNav.classList.add("open");
            }else{
                $(".site-mobile").slideUp("fast","linear");
                stickyNav.classList.remove("open");
                
            }
        }else{
           
            stickyNav.classList.remove("sticky-nav");
        }
        prevScrollpos = currentScrollpos;
    }   
});