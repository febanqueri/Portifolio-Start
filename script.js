$(document).ready(function(){
    $(window).scroll(function(){
        // MENU NAVEGAÇÕES/NAVBAR, fixa ao rolar a pagina
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        // BOTÃO de rolagem pra cima (scroll-up)
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //Deslizando para cima (slider-up)
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
        //Removendo a "rolagem suave" ao clicar no slider-up.
        $('html').css("scrollBehavior","auto");
    });

    //Aplicando novamente a "rolagem suave" nos itens do MENU, após o click!
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    //toggle MENU NAVEGAÇÕES/NAVBAR
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //Animando os textos (ou tentando, RECURSO TOOOOOOOOOOOOOOOOP)
    var typed = new Typed(".typing",{
        strings: ["Desenvolvedor","Suporte Técnico","Freelancer","Web Designer"],
        typeSpeed: 100,
        bakcSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desenvolvedor","Suporte Técnico","Freelancer","Web Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Carrosel da Coruja (Apresentação EQUIPES, etc)
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        responsive:{
            0:{items:1, nav: false},
            600:{items: 2, nav: false},
            1000:{items: 3, nav: false}
        }
    })
});