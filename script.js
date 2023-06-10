let condition=true;
let start=0;
let end = 0;

$('.menu_small_icon').click(function () {
    if (condition) {
    open();    
    } else {
    close();
    }
    });


$('.menu_small_icon').on('touchstart',function(event){
    start=event.originalEvent.touches[0].pageX;
});

$('.menu_small_icon').on('touchend',function(event){
    end=event.originalEvent.touches[0].pageX;
    if (end-start >= 10 && condition) {
        open();    
        } 
    else if(start-end >= 10 && !condition){
        close();
        }
});


function open(){
    anime({
        targets:'.menu-small',
        translateX:['-100%','0'],
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    condition=false;
};


function close(){
    anime({
        targets:'.menu-small',
        translateX:['0','-100%'],
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    condition=true
};


function open(){
    anime({
        targets:'.menu-small',
        translateX:['-100%','0'],
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    anime({
        targets:'.menu_small_icon',
        rotate:90,
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    anime({
        targets:'.stick',
        rotate:180,
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    condition=false;
};


function close(){
    anime({
        targets:'.menu-small',
        translateX:['0','-100%'],
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    anime({
        targets:'.menu_small_icon',
        rotate:-180,
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    anime({
        targets:'.stick',
        rotate:-360,
        easing:'easeInOutQuad',
        diraction:'alternate',
        duration:1000,
        loop:false
    });
    condition=true
};

let links =document.querySelectorAll('.scroll');
let targetID;
links.forEach(function(element){
    element.addEventListener('click',function(event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior:'smooth',
            block:'start'
        })
    })
})
