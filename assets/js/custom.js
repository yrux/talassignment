$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#dynamic').addClass('newClass');
    } else {
       $('#dynamic').removeClass('newClass');
    }
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
       $('#dynamic2').addClass('newClass2');
    } else {
       $('#dynamic2').removeClass('newClass2');
    }
});