$(document).ready(function () {
    
    //variables
    var slides = $('figure.slide');
    var dots = $('button.dot');
    var position = 0;
    var timer = 0;
    var current = 0;
    var flag = false;
    
    //setting initial setup (slide, image dot)
    slides.eq(position).css('display','block');
    dots.eq(position).addClass('checked');
    changeSlide(1);
    
    //changing silde by clicking on the button
    $('button').click(function () {
        
        clearTimeout(timer);
        
        //side buttons (left or right)
        if ($(this).hasClass('side')) {
            
           if ($(this).hasClass('left')) { changeSlide(0); } 
           else { changeSlide(1); } 
            
        }
        //dots to click
        else if ($(this).hasClass('dot')) {
            
            dots.eq(position).removeClass('checked');
            $(this).addClass('checked');

            //to fade out current slide because of change in position
            flag = true;
            current = position;

            if (dots.eq(0).hasClass('checked')) {position = 3; changeSlide(1);}
            else if (dots.eq(1).hasClass('checked')) {position = 0; changeSlide(1);}
            else if (dots.eq(2).hasClass('checked')) {position = 1; changeSlide(1);}
            else if (dots.eq(3).hasClass('checked')) {position = 2; changeSlide(1);}
            
        }
        
    });
    
    //function to change a slide
    function changeSlide(duration) {
        
        if (flag) {slides.eq(current).fadeOut(1000); flag = false;}
        else slides.eq(position).fadeOut(1000);
        dots.removeClass('checked');
        
        if (duration === 1) {
            position++;
            if (position > 3) position = 0;
        }
        else if (duration === 0) {
            position--; 
            if (position < 0) position = 3;
        }
        
        slides.eq(position).fadeIn(1000);
        dots.eq(position).addClass('checked');
        
        timer = setTimeout(function(){changeSlide(1)}, 4000);
        
    }
    
    
    
});